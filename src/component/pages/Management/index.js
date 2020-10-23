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

  //Functions to send in FilterBar
  const getFilterCommitmentsManagement = () => {
    dispatch({ type: actions.getCommitments });
  };
  const getFilterCommitmentsManagementSuccess = (data) => {
    dispatch({
      type: actions.getCommitmentsSuccess,
      payload: {
        commitments: data.items,
        page: data.page,
        pageLimit: data.limitPage,
      },
    });
  };
  const getFilterCommitmentsManagementError = () => {
    dispatch({
      type: actions.getCommitmentsError,
    });
  };

  //get commitments in Management
  useEffect(() => {
    const fetchCommitments = async () => {
      getFilterCommitmentsManagement();
      try {
        const { data } = await api.get(
          `/commitments/filter/management/?page=${state.page}`
        );
        getFilterCommitmentsManagementSuccess(data);
        dispatch({
          type: actions.clearSearchFilter,
          payload: { reset: "" },
        });
      } catch (e) {
        getFilterCommitmentsManagementError();
      }
    };
    fetchCommitments();
  }, [state.page]);

  // handle Change Pagination
  const handleChangePagination = (event, value) => {
    dispatch({ type: actions.setPage, payload: value });
  };

  //Function to filter
  const handleSearchFilter = (field, value) => {
    dispatch({ type: actions.setSearchFilter, payload: { field, value } });
  };

  const renderManagementTable = () => {
    if (state.commitmentsError) return <Error />;
    if (
      !state.commitmentsLoader &&
      !state.commitmentsError &&
      state.commitments.length === 0
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
