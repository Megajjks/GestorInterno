import React, { Fragment, useState, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import PoolTable from "../../ui/tables/PoolTable";
import Btn from "../../ui/GeneralButton";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import api from "../../../helpers/api";
import { filterWithStatus, dataStatus } from "../../../helpers";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import { WrapperHeader, SearchBar } from "./styled";
import IcoExport from "../../../assets/img/download.svg";

const Pool = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const [searchString, setSearchString] = useState("");

  //get commitments
  useEffect(() => {
    const fetchCommitment = async () => {
      dispatch({ type: actions.getCommitments });
      try {
        const { data } = await api.get("/commitments");

        //filter commitments with status
        let query = ["prevalidado", "validando", "correcion"];
        dispatch({
          type: actions.getCommitmentsSuccess,
          payload: filterWithStatus(data, query),
        });
      } catch (e) {
        dispatch({
          type: actions.getCommitmentsError,
          payload:
            "Por el momento no se pueden obtener los datos, verifique su conexión",
        });
      }
    };
    fetchCommitment();
  }, []);

  //Logic of search bar
  useEffect(() => {
    if (!searchString) {
      return;
    }
    const busqueda = state.commitments.filter((item) => {
      const payload = searchString.toLowerCase();
      const organization = item.organization.toLowerCase();
      const agent = `${item.firstName.toLowerCase()}  ${item.lastName.toLowerCase()}`;
      const city = item.city.toLowerCase();
      const status = item.status.toLowerCase();
      const sector = item.sector.toLowerCase();
      const state = item.state.toLowerCase();

      if (searchString === "") {
        return dispatch({
          type: actions.filterCommitments,
          payload: state.commitments,
        });
      } else if (
        organization.includes(payload) ||
        agent.includes(payload) ||
        city.includes(payload) ||
        state.includes(payload) ||
        sector.includes(payload) ||
        status.includes(dataStatus(payload).tag)
      ) {
        return item;
      }
    });
    dispatch({ type: actions.filterCommitments, payload: busqueda });
  }, [searchString]);

  const search = (e) => {
    const { value } = e.target;
    setSearchString(value);
  };

  //View details of one commitment
  const viewDetails = (item) => {
    history.push({
      pathname: `/panel/commitment_report/${item.id}`,
      state: item,
    });
  };

  //function to download data in excel file
  const exportData = () => {
    dispatch({ type: actions.exportData });
    const { data } = api
      .get("/commitments/get/excel/", {
        responseType: "blob",
      })
      .then(({ data }) => {
        dispatch({ type: actions.exportDataSuccess });
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        const date = new Date();
        link.href = downloadUrl;
        link.setAttribute(
          "download",
          `Compromisos-MDADC (${date.getDate()}-${date.getMonth()}-${date.getFullYear()}).xlsx`
        ); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((e) => {
        dispatch({
          type: actions.exportDataError,
          payload: "Problemas al momento de descargar el archivo",
        });
      });
  };

  return (
    <Fragment>
      <WrapperHeader>
        <h1>Pool de compromisos</h1>
        <Btn
          title="Exportar datos"
          size="20%"
          type="primary-loader"
          ico={IcoExport}
          onClick={exportData}
          loader={state.exportData}
        />
      </WrapperHeader>
      <SearchBar value={searchString} onChange={search} />
      <PoolTable commitments={state.commitments} viewDetails={viewDetails} />
      {state.commitmentsLoader ? <Spinner /> : null}
      {state.commitmentsError ? <Error /> : null}
    </Fragment>
  );
};

export default Pool;
