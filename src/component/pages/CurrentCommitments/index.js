import React, { useEffect, useReducer } from "react";
import NavbarPublic from "../../ui/landingPage/Navbar";
import FooterPublic from "../../ui/landingPage/Footer";
import CommitmentCardList from "../../ui/CommitmentCardList";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import Pagination from "../../ui/Pagination";
import WithoutData from "../../ui/alerts/WithoutData";
import api from "../../../helpers/api";
import { initialState } from "./constants";
import { actions } from "./actions";
import { reducer } from "./reducer";
import { WrapperCommitment, Title, WrapperList } from "./styled";

const CurrentCommitments = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    //getCommitments
    const getCommitments = async () => {
      dispatch({ type: actions.getCommitments });
      try {
        const { data } = await api.get(`/commitments/?page=${state.page}`);
        dispatch({
          type: actions.getCommitmentsSuccess,
          payload: {
            commitments: data.items,
            page: data.page,
            pageLimit: data.limitPage,
          },
        });
      } catch {
        dispatch({
          type: actions.getCommitmentsError,
          payload: "Oh ha ocurrido un problema al cargar los compromisos",
        });
      }
    };
    getCommitments();
  }, [state.page]);

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
          title="Sin compromisos por el momento"
          content="Espera a que nuestro super equipo revele los compromisos actuales que Ashoka esta apoyando 😉"
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
        {state.commitmentsLoader ? <Spinner /> : renderCommitments()}
      </WrapperCommitment>
      <FooterPublic />
    </>
  );
};

export default CurrentCommitments;
