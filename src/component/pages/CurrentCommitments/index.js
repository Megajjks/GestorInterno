import React, { useEffect, useReducer } from "react";
import NavbarPublic from "../../ui/landingPage/Navbar";
import FooterPublic from "../../ui/landingPage/Footer";
import CommitmentCardList from "../../ui/CommitmentCardList";
import FilterBar from "../../ui/FilterBar";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import Pagination from "../../ui/Pagination";
import WithoutData from "../../ui/alerts/WithoutData";
import api from "../../../helpers/api";
import { initialState } from "./constants";
import { actions } from "./actions";
import { reducer } from "./reducer";
import { WrapperCommitment, Title, WrapperList, WrapperFilter } from "./styled";

const CurrentCommitments = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const query = ["primer_contacto", "articulando", "cumplido"];

  useEffect(() => {
    //getCommitments
    const getCommitments = async () => {
      getFilterCommitmentsPublic();
      try {
        const { data } = await api.get(`/public/?page=${state.page}`);
        getFilterCommitmentsPublicSuccess(data);
        dispatch({
          type: actions.clearSearchFilter,
          payload: { reset: "" },
        });
      } catch (e) {
        getFilterCommitmentsPublicError(
          "Oh ha ocurrido un problema al cargar los compromisos"
        );
      }
    };
    getCommitments();
  }, [state.page]);

  //Function to filter
  const handleSearchFilter = (field, value) => {
    dispatch({ type: actions.setSearchFilter, payload: { field, value } });
  };

  //Functions to send in FilterBar
  const getFilterCommitmentsPublic = () => {
    dispatch({ type: actions.getCommitments });
  };
  const getFilterCommitmentsPublicSuccess = (data) => {
    dispatch({
      type: actions.getCommitmentsSuccess,
      payload: {
        commitments: data.items,
        page: data.page,
        pageLimit: data.limitPage,
      },
    });
  };
  const getFilterCommitmentsPublicError = (msg) => {
    dispatch({
      type: actions.getCommitmentsError,
      payload: msg,
    });
  };

  // handle Change Pagination
  const handleChangePagination = (event, value) => {
    dispatch({ type: actions.setPage, payload: value });
  };

  const renderCommitments = () => {
    if (
      state.commitments.length === 0 &&
      !state.commitmentsLoader &&
      !state.commitmentsError
    )
      return (
        <WithoutData
          title="No se han encontrado compromisos"
          content="Introduce una nueva busqueda o espera a que nuestro super equipo revele los compromisos actuales que Ashoka esta apoyando conforme a tu busqueda 😉"
        />
      );
    if (state.commitmentsError) return <Error />;
    return (
      <WrapperList>
        <CommitmentCardList commitments={state.commitments} />
        <Pagination
          count={state.pageLimit}
          page={state.page}
          callBack={handleChangePagination}
        />
      </WrapperList>
    );
  };

  return (
    <>
      <NavbarPublic />
      <WrapperCommitment>
        <Title>Compromisos Actuales</Title>
        <WrapperFilter>
          <FilterBar
            state={state}
            status={query}
            typeTable={"public"}
            handleSearchFilter={handleSearchFilter}
            getFilterCommitmentsPublic={getFilterCommitmentsPublic}
            getFilterCommitmentsPublicSuccess={
              getFilterCommitmentsPublicSuccess
            }
            getFilterCommitmentsPublicError={getFilterCommitmentsPublicError}
          />
        </WrapperFilter>
        {state.commitmentsLoader ? <Spinner /> : renderCommitments()}
      </WrapperCommitment>
      <FooterPublic />
    </>
  );
};

export default CurrentCommitments;
