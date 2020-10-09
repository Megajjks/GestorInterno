import React, { Fragment, useState, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import PoolTable from "../../ui/tables/PoolTable";
import Btn from "../../ui/GeneralButton";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import Pagination from "../../ui/Pagination";
import api from "../../../helpers/api";
import { dataStatus, existSync } from "../../../helpers";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import { WrapperHeader, BtnGroup, SearchBar } from "./styled";
import IcoExport from "../../../assets/img/download.svg";
import IcoSync from "../../../assets/img/sync.svg";

const Pool = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const [searchString, setSearchString] = useState("");

  //get commitments in pool
  useEffect(() => {
    const fetchCommitment = async () => {
      dispatch({ type: actions.getCommitments });
      try {
        const { data } = await api.get(
          `/commitments/filter/pool/?page=${state.page}`
        );
        dispatch({
          type: actions.getCommitmentsSuccess,
          payload: {
            commitments: data.items,
            existSync: existSync(data.items),
            page: data.page,
            pageLimit: data.limitPage,
          },
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
  }, [state.reload, state.page]);

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
      state: item.id,
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

  //function to Synchronization the commitments in the salesForce(
  const syncCommitments = async () => {
    dispatch({ type: actions.sync });
    try {
      const { data } = await api.post("/resendall/");
      dispatch({ type: actions.syncSucess, payload: !state.reload });
    } catch {
      dispatch({
        type: actions.syncError,
        payload: "Problemas al sincronizar los compromisos",
      });
    }
  };

  // handle Change Pagination
  const handleChangePagination = (event, value) => {
    dispatch({ type: actions.setPage, payload: value });
  };

  const renderPoolTable = () => {
    if (state.commitmentsError) return <Error />;
    return (
      <>
        <PoolTable commitments={state.commitments} viewDetails={viewDetails} />
        <Pagination
          count={state.pageLimit}
          page={state.page}
          callBack={handleChangePagination}
        />
      </>
    );
  };

  return (
    <Fragment>
      <WrapperHeader>
        <h1>Pool de compromisos</h1>
        <BtnGroup showBtnSycn={state.showBtnSycn}>
          {state.showBtnSycn ? (
            <Btn
              title="Sincronizar"
              size="40%"
              type="primary-loader"
              ico={IcoSync}
              onClick={syncCommitments}
              loader={state.syncCommitmentsLoader}
            />
          ) : null}
          <Btn
            title="Exportar datos"
            size="40%"
            type="primary-loader"
            ico={IcoExport}
            onClick={exportData}
            loader={state.exportData}
          />
        </BtnGroup>
      </WrapperHeader>
      <SearchBar value={searchString} onChange={search} />
      {state.commitmentsLoader ? <Spinner /> : renderPoolTable()}
    </Fragment>
  );
};

export default Pool;
