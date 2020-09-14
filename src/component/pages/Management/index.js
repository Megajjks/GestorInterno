import React, { useState, useEffect, useReducer } from "react";
import CommitmentCardList from "../../ui/CommitmentCardList";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import WithoutData from "../../ui/alerts/WithoutData";
import { SearchBar } from "./styled";
import api from "../../../helpers/api";
import { filterWithIdCollaboratorAndStatus } from "../../../helpers";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";

const Management = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchString, setSearchString] = useState("");
  const userId = JSON.parse(localStorage.getItem("login_data")).userId;

  useEffect(() => {
    const fetchCommitments = async () => {
      dispatch({ type: actions.getCommitments });
      try {
        const { data } = await api.get("/commitments/filter/management/");
        //const response = await api.get("/commitments/filter/management/");
        dispatch({
          type: actions.getCommitmentsSuccess,
          payload: data,
        });
      } catch (e) {
        dispatch({
          type: actions.getCommitmentsError,
        });
      }
    };
    fetchCommitments();
  }, []);

  useEffect(() => {
    if (!searchString) {
      return;
    }
    const busqueda = state.commitments.filter((item) => {
      const payload = searchString.toLowerCase();
      const organization = item.organization.toLowerCase();
      const location = item.city.toLowerCase();
      const status = item.status.toLowerCase();
      const agent = `${item.firstName.toLowerCase()}  ${item.lastName.toLowerCase()}`;

      if (searchString === "") {
        return dispatch({
          type: actions.filterCommitments,
          payload: state.commitments,
        });
      } else if (
        organization.includes(payload) ||
        location.includes(payload) ||
        status.includes(payload) ||
        agent.includes(payload)
      ) {
        return item;
      }
    });
    dispatch({ type: actions.filterCommitments, payload: busqueda });
  }, [searchString]);
  const search = (e) => {
    const { value } = e.target;
    setSearchString(value);
  };

  const renderCommitments = () => {
    if (
      state.commitments.length === 0 &&
      !state.commitmentsLoader &&
      !state.commitmentsError
    ) {
      return (
        <WithoutData
          title="¡Oh! aun no tienes compromisos asignados"
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
      <SearchBar value={searchString} onChange={search} />
      {renderCommitments()}
      {state.commitmentsLoader ? <Spinner /> : null}
      {state.commitmentsError ? <Error /> : null}
    </div>
  );
};

export default Management;
