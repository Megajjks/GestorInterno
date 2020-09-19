import React, { Fragment, useEffect, useContext } from "react";
import { CommitmentFilterContext } from "../../context/CommitmentFilterContext";
import { actions } from "../../context/CommitmentFilterContext/actions";
import { useHistory } from "react-router-dom";
import PoolTable from "../../ui/tables/PoolTable";
import Btn from "../../ui/GeneralButton";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import api from "../../../helpers/api";
import { filterWithStatus, existSync } from "../../../helpers";
import { WrapperHeader, BtnGroup } from "./styled";
import IcoExport from "../../../assets/img/download.svg";
import IcoSync from "../../../assets/img/sync.svg";
import FilterBar from "../../ui/FilterBar";

const Pool = () => {
  const { state, dispatch } = useContext(CommitmentFilterContext);
  const query = ["prevalidado", "validando", "correcion", "falla"];
  const history = useHistory();

  //get commitments
  useEffect(() => {
    const fetchCommitment = async () => {
      dispatch({ type: actions.getCommitments });
      try {
        const { data } = await api.get("/commitments");
        //filter commitments with status
        dispatch({
          type: actions.getCommitmentsSuccess,
          payload: {
            commitments: filterWithStatus(data, query),
            existSync: existSync(data),
          },
        });
        dispatch({
          type: actions.filterCommitments,
          payload: filterWithStatus(data, query)
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
  }, [state.reload]);

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

  //function to Synchronization the commitments in the salesForce(
  const syncCommitments = async () => {
    dispatch({ type: actions.sync });
    try {
      const { data } = await api.post("/resendall");
      dispatch({ type: actions.syncSucess, payload: !state.reload });
    } catch {
      dispatch({
        type: actions.syncError,
        payload: "Problemas al sincronizar los compromisos",
      });
    }
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
      <FilterBar status={query} typeTable={"pool"}/>
      <PoolTable commitments={state.commitmentsFilter} viewDetails={viewDetails} />
      {state.commitmentsLoader ? <Spinner /> : null}
      {state.commitmentsError ? <Error /> : null}
    </Fragment>
  );
};

export default Pool;
