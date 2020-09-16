import React, { Fragment, useContext, useEffect } from "react";
import { WrapperHeader } from "./styled";
import { StoreContext } from "../../context/StoreContext";
import { actions } from "../../context/StoreContext/actions";
import UserModal from "../../ui/modals/UserModal";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import UserTable from "../../ui/tables/UserTable";
import api from "../../../helpers/api";
import Btn from "../../ui/GeneralButton";
import AddIcon from "../../../assets/img/add.svg";

const Users = () => {
  const { state, dispatch } = useContext(StoreContext);

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

  //Behaviors modals
  //functions to open, close to modal add user
  const showModalAddUser = () => {
    dispatch({ type: actions.showModalAddUser, payload: !state.showModal });
  };
  // //functions to open, close to modal edit user
  const showModalEditUser = () => {
    dispatch({ type: actions.showModalEditUser, payload: !state.showModal });
  };
  //functions to close to modal add user and clean the modal.
  const closeModalEditUser = () => {
    dispatch({ type: actions.closeModalEditUser });
  };

  return (
    <Fragment>
      <WrapperHeader>
        <h1>Usuarios</h1>
        <Btn
          title="Agregar usuario"
          size="20%"
          type="primary-loader"
          ico={AddIcon}
          onClick={showModalAddUser}
        />
      </WrapperHeader>
      <UserTable users={state.users} />
      <UserModal closeModalUser={showModalAddUser} />
      {state.usersLoader ? <Spinner /> : null}
      {state.msgError ? <Error /> : null}
    </Fragment>
  );
};

export default Users;
