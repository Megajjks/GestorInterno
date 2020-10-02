import React, { useReducer, useEffect, Fragment } from "react";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import api from "../../../helpers/api";

const Dashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const id = JSON.parse(localStorage.getItem("login_data")).userId;

  useEffect(() => {
    //get data user
    const getUser = async () => {
      dispatch({ type: actions.getUser });
      try {
        const { data } = await api.get(`/users/${id}`);
        dispatch({ type: actions.getUserSuccess, payload: data });
      } catch {
        dispatch({
          type: actions.getUserError,
          payload: "Ocurrió un problema al cargar los datos del usuario",
        });
      }
    };
    getUser();
  }, []);

  const renderView = () => {
    if (state.userError) return <Error />;

    return (
      <Fragment>
        <h1>{`Bienvenido ${state.user.firstName} ${state.user.lastName}`} </h1>
      </Fragment>
    );
  };

  return <Fragment>{state.userLoader ? <Spinner /> : renderView()}</Fragment>;
};

export default Dashboard;
