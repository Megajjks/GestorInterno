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

  //functions to open, close to modal add user
  const showModalAddUser = () => {
    dispatch({ type: actions.showModalAddUser, payload: !state.showModal });
  };

  //functions to open, close to modal edit user
  const showModalEditUser = (user) => {
    dispatch({
      type: actions.showModalEditUser,
      payload: { isShow: !state.showModal, user: { ...user, password: "" } },
    });
  };

  //functions to close to modal add user and clean the modal.
  const closeModalUser = () => {
    dispatch({ type: actions.closeModalEditUser });
  };

  //function to update a user to remove
  const prepareRemoveUser = (user) =>
    dispatch({ type: actions.removeUser, payload: user });

  //function to remove user
  const removeUser = async () => {
    const newUser = { ...state.user, isActive: false };
    //const newUser = user;
    try {
      const response = await api.put(`/users/${state.user.id}`, newUser);
      dispatch({ type: actions.removeUserSuccess, payload: !state.reload });
    } catch {
      dispatch({
        type: actions.removeUserError,
        payload: "Ocurrió un problema al eliminar al usuario",
      });
    }
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
      <UserTable
        users={state.users}
        showModalEditUser={showModalEditUser}
        removeUser={removeUser}
        prepareRemoveUser={prepareRemoveUser}
      />
      <UserModal
        closeModalUser={showModalAddUser}
        closeModalClean={closeModalUser}
      />
      {state.usersLoader ? <Spinner /> : null}
      {state.msgError ? <Error /> : null}
    </Fragment>
  );
};

export default Users;
