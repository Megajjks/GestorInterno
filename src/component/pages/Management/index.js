import React, { useEffect, useContext } from "react";
import { CommitmentContext } from "../../context/CommitmentContext";
import { actions } from "../../context/CommitmentContext/actions";
import CommitmentCardList from "../../ui/CommitmentCardList";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import WithoutData from "../../ui/alerts/WithoutData";
import api from "../../../helpers/api";
import FilterBar from "../../ui/FilterBar";

const Management = () => {
  const { state, dispatch } = useContext(CommitmentContext);
  const query = [
    "primer_contacto",
    "articulando",
  ]

  useEffect(() => {
    const fetchCommitments = async () => {
      dispatch({ type: actions.getCommitmentsTracing });
      try {
        const { data } = await api.get("/commitments/filter/management");
        //filter commitments with status
        dispatch({
          type: actions.getCommitmentsSuccessTracing,
          payload: data,
        });
        dispatch({
          type: actions.clearSearchFilter,
          payload: { reset: "" }
        })
      } catch (e) {
        dispatch({
          type: actions.getCommitmentsError,
        });
      }
    };
    fetchCommitments();
  }, [state.reload]);

  const renderCommitments = () => {
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
      <CommitmentCardList
        commitments={state.commitments}
        btnTitle="Gestionar compromiso"
        btnUrlBase="/panel/traicing_commitment"
      />
    );
  };

  return (
    <div>
      <h1>Compromisos asignados</h1>
      <FilterBar status={query} typeTable={"management"}/>
      {renderCommitments()}
      {state.commitmentsLoader ? <Spinner /> : null}
      {state.commitmentsError ? <Error /> : null}
    </div>
  );
};

export default Management;
