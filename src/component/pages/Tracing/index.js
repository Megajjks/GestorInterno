import React, { Fragment, useState, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import Pagination from "../../ui/Pagination";
import api from "../../../helpers/api";
import TracingTable from "../../ui/tables/TracingTable";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import FilterBar from "../../ui/FilterBar";

const Tracing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const query = ["primer_contacto", "articulando", "cumplido", "archivado"];
  const history = useHistory();

  //Functions to send in FilterBar
  const getFilterCommitmentsTracing = () => {
    dispatch({ type: actions.getCommitments });
  };
  const getFilterCommitmentsTracingSuccess = (data) => {
    dispatch({
      type: actions.getCommitmentsSuccess,
      payload: {
        commitments: data.items,
        page: data.page,
        pageLimit: data.limitPage,
      },
    });
  };
  const getFilterCommitmentsTracingError = (msg) => {
    dispatch({
      type: actions.getCommitmentsError,
      payload: msg
    });
  };

  //get commitments in tracing
  useEffect(() => {
    const fetchCommitment = async () => {
      getFilterCommitmentsTracing();
      try {
        const { data } = await api.get(
          `/commitments/filter/tracing/?page=${state.page}`
        );
        getFilterCommitmentsTracingSuccess(data);
      } catch (e) {
        getFilterCommitmentsTracingError(
          "Por el momento no se pueden obtener los datos, verifique su conexión"
        );
      }
    };
    fetchCommitment();
  }, [state.page]);

  const viewDetails = (item) => {
    history.push({
      pathname: `/panel/traicing_commitment/${item.id}`,
      state: item,
    });
  };

  // handle Change Pagination
  const handleChangePagination = (event, value) => {
    dispatch({ type: actions.setPage, payload: value });
  };

  //Function to filter
  const handleSearchFilter = (field, value) => {
    dispatch({ type: actions.setSearchFilter, payload: { field, value } });
  };

  const renderTracingTable = () => {
    if (state.commitmentsError) return <Error />;
    return (
      <>
        <TracingTable
          commitments={state.commitments}
          viewDetails={viewDetails}
        />
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
      <h1>Seguimiento de los compromisos</h1>
      <FilterBar
        state={state}
        status={query}
        typeTable={"tracing"}
        getFilterCommitmentsTracing={getFilterCommitmentsTracing}
        getFilterCommitmentsTracingSuccess={getFilterCommitmentsTracingSuccess}
        getFilterCommitmentsTracingError={getFilterCommitmentsTracingError}
        handleSearchFilter={handleSearchFilter}
      />
      {state.commitmentsLoader ? <Spinner /> : renderTracingTable()}
    </Fragment>
  );
};

export default Tracing;
