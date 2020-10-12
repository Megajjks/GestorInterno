import React, { Fragment, useState, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import PoolTable from "../../ui/tables/PoolTable";
import Btn from "../../ui/GeneralButton";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import Pagination from "../../ui/Pagination";
import api from "../../../helpers/api";
import { WrapperHeader, BtnGroup } from "./styled";
import { existSync, notify } from "../../../helpers";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import IcoExport from "../../../assets/img/download.svg";
import IcoSync from "../../../assets/img/sync.svg";
import FilterBar from "../../ui/FilterBar";
import SendEmailModal from "../../ui/modals/SendEmailModal";
import { ToastContainer } from "react-toastify";

const Pool = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const query = ["prevalidado", "validando", "correccion", "falla"];
  const history = useHistory();

  //Functions to send in FilterBar
  const getFilterCommitmentsPool = () => {
    dispatch({ type: actions.getCommitments });
  };
  const getFilterCommitmentsPoolSuccess = (data) => {
    dispatch({
      type: actions.getCommitmentsSuccess,
      payload: {
        commitments: data.items,
        existSync: existSync(data.items),
        page: data.page,
        pageLimit: data.limitPage,
      },
    });
  };
  const getFilterCommitmentsPoolError = (msg) => {
    dispatch({
      type: actions.getCommitmentsError,
      payload: msg,
    });
  };

  //get commitments in pool
  useEffect(() => {
    const fetchCommitment = async () => {
      getFilterCommitmentsPool();
      try {
        const { data } = await api.get(
          `/commitments/filter/pool/?page=${state.page}`
        );
        getFilterCommitmentsPoolSuccess(data);
        dispatch({
          type: actions.clearSearchFilter,
          payload: { reset: "" },
        });
      } catch (e) {
        getFilterCommitmentsPoolError(
          "Por el momento no se pueden obtener los datos, verifique su conexión"
        );
      }
    };
    fetchCommitment();
  }, [state.reload, state.page]);

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
        notify("success", "💾  Datos exportados correctamente");
      })
      .catch((e) => {
        notify("error", "⚠️ Problemas al momento de descargar el archivo");
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
      notify("success", "🔃  Compromisos sincronizados correctamente");
      dispatch({ type: actions.syncSucess, payload: !state.reload });
    } catch {
      notify("error", "⚠️ Problemas al momento de sincronizar los compromisos");
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

  //Function to filter
  const handleSearchFilter = (field, value) => {
    dispatch({ type: actions.setSearchFilter, payload: { field, value } });
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
        <SendEmailModal state={state} typeTable={"pool"} />
      </WrapperHeader>
      <FilterBar
        state={state}
        status={query}
        typeTable={"pool"}
        getFilterCommitmentsPool={getFilterCommitmentsPool}
        getFilterCommitmentsPoolSuccess={getFilterCommitmentsPoolSuccess}
        getFilterCommitmentsPoolError={getFilterCommitmentsPoolError}
        handleSearchFilter={handleSearchFilter}
      />
      {state.commitmentsLoader ? <Spinner /> : renderPoolTable()}
      <ToastContainer />
    </Fragment>
  );
};

export default Pool;
