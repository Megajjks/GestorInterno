import React, { Fragment, useReducer, useEffect } from "react";
import { WrapperHeader } from "./styled";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import UserTable from "../../ui/tables/UserTable";
import api from "../../../helpers/api";
import Btn from "../../ui/GeneralButton";
import AddIcon from "../../../assets/img/add.svg";

const Users = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //get users
  useEffect(() => {
    const getUsers = async () => {
      try {
        dispatch({ type: actions.getUsers });
        const { data } = await api.get("/users");
        dispatch({ type: actions.getUsersSuccess, payload: data });
      } catch {
        dispatch({
          type: actions.getUsersError,
          payload: "Ocurrio un problema al traer a los usuarios",
        });
      }
    };
    getUsers();
  }, [state.reload]);

  return (
    <Fragment>
      <WrapperHeader>
        <h1>Usuarios</h1>
        <Btn
          title="Agregar usuario"
          size="20%"
          type="primary-loader"
          ico={AddIcon}
        />
      </WrapperHeader>
      <UserTable users={state.users} />
      {state.usersLoader ? <Spinner /> : null}
      {state.msgError ? <Error /> : null}
    </Fragment>
  );
};

export default Users;
