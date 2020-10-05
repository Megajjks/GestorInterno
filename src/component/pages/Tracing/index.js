import React, { Fragment, useState, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { SearchBar } from "./styled";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import Pagination from "../../ui/Pagination";
import api from "../../../helpers/api";
import TracingTable from "../../ui/tables/TracingTable";
import { dataStatus } from "../../../helpers";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";

const Tracing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const [searchString, setSearchString] = useState("");

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

  useEffect(() => {
    if (!searchString) {
      return;
    }
    //const commitmentsBefore = [...commitments];
    const busqueda = state.commitments.filter((item) => {
      console.log(item);
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

  const viewDetails = (item) => {
    history.push({
      pathname: `/panel/traicing_commitment/${item.id}`,
      state: item.id,
    });
  };

  const search = (e) => {
    const { value } = e.target;
    setSearchString(value);
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
      <SearchBar value={searchString} onChange={search} />
      {state.commitmentsLoader ? <Spinner /> : renderTracingTable()}
    </Fragment>
  );
};

export default Tracing;
