import React, { useEffect, useReducer } from "react";
import CommitmentCardList from "../../ui/CommitmentCardList";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import Pagination from "../../ui/Pagination";
import WithoutData from "../../ui/alerts/WithoutData";
import api from "../../../helpers/api";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import FilterBar from "../../ui/FilterBar";

const Management = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const query = ["primer_contacto", "articulando"];

  //get commitments in Management
  useEffect(() => {
    const fetchCommitments = async () => {
      dispatch({ type: actions.getCommitmentsTracing });
      try {
        const { data } = await api.get(
          `/commitments/filter/management/?page=${state.page}`
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
        });
      }
    };
    fetchCommitments();
  }, [state.page]);

  // handle Change Pagination
  const handleChangePagination = (event, value) => {
    dispatch({ type: actions.setPage, payload: value });
  };

  //Functions to filter
  const getFilterCommitmentsManagement = () => {
    dispatch({ type: actions.getCommitmentsManagementFilter });
  };
  const getFilterCommitmentsManagementSuccess = (data) => {
    dispatch({
      type: actions.getCommitmentsManagementFilterSuccess,
      payload: data,
    });
  };
  const getFilterCommitmentsManagementError = (msg) => {
    dispatch({
      type: actions.getCommitmentsError,
      payload: msg,
    });
  };
  const handleSearchFilter = (field, value) => {
    dispatch({ type: actions.setSearchFilter, payload: { field, value } });
  };

  const renderManagementTable = () => {
    if (state.commitmentsError) return <Error />;
    if (
      state.commitments.length === 0 &&
      !state.commitmentsLoader &&
      !state.commitmentsError
    ) {
      return (
        <WithoutData
          title="¡Oh! no se han encontrado compromisos asignados"
          content="Espera a que un administrador te asigne un compromiso para empezar a trabajar 😉"
        />
      );
    }
    return (
      <>
        <CommitmentCardList
          commitments={state.commitments}
          btnTitle="Gestionar compromiso"
          btnUrlBase="/panel/traicing_commitment"
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
    <div>
      <h1>Compromisos asignados</h1>
      <FilterBar
        state={state}
        status={query}
        typeTable={"management"}
        getFilterCommitmentsManagement={getFilterCommitmentsManagement}
        getFilterCommitmentsManagementSuccess={
          getFilterCommitmentsManagementSuccess
        }
        getFilterCommitmentsManagementError={
          getFilterCommitmentsManagementError
        }
        handleSearchFilter={handleSearchFilter}
      />
      {state.commitmentsLoader ? <Spinner /> : renderManagementTable()}
    </div>
  );
};

export default Management;
