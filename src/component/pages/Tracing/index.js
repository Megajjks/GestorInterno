import React, { Fragment, useEffect, useContext } from "react";
import { CommitmentContext } from "../../context/CommitmentContext";
import { actions } from "../../context/CommitmentContext/actions";
import { useHistory } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import Pagination from "../../ui/Pagination";
import api from "../../../helpers/api";
import TracingTable from "../../ui/tables/TracingTable";
import { dataStatus } from "../../../helpers";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import FilterBar from "../../ui/FilterBar";
import SendEmailModal from "../../ui/modals/SendEmailModal";

const Tracing = () => {
  const { state, dispatch } = useContext(CommitmentContext);
  const query = ["primer_contacto", "articulando", "cumplido", "archivado"];
  const history = useHistory();

  //get commitments in tracing
  useEffect(() => {
    const fetchCommitment = async () => {
      dispatch({ type: actions.getCommitmentsTracing });
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
        dispatch({
          type: actions.clearSearchFilter,
          payload: { reset: "" },
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
      <SendEmailModal />
      <FilterBar status={query} typeTable={"tracing"} />
      <SearchBar value={searchString} onChange={search} />
      {state.commitmentsLoader ? <Spinner /> : renderTracingTable()}
    </Fragment>
  );
};

export default Tracing;
