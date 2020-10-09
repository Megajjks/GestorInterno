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

  //get commitments in tracing
  useEffect(() => {
    const fetchCommitment = async () => {
      dispatch({ type: actions.getCommitments });
      try {
        const { data } = await api.get(
          `/commitments/filter/tracing/?page=${state.page}`
        );
        dispatch({
          type: actions.getCommitmentsSuccess,
          payload: {
            commitments: data.items,
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
  }, [state.page]);

  const viewDetails = (item) => {
    history.push({
      pathname: `/panel/traicing_commitment/${item.id}`,
      state: item.id,
    });
  };

  // handle Change Pagination
  const handleChangePagination = (event, value) => {
    dispatch({ type: actions.setPage, payload: value });
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
      <FilterBar status={query} typeTable={"tracing"} />
      {state.commitmentsLoader ? <Spinner /> : renderTracingTable()}
    </Fragment>
  );
};

export default Tracing;
