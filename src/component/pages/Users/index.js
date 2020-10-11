import React, { Fragment, useContext, useEffect } from "react";
import { WrapperHeader } from "./styled";
import { StoreContext } from "../../context/StoreContext";
import { actions } from "../../context/StoreContext/actions";
import UserModal from "../../ui/modals/UserModal";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import Pagination from "../../ui/Pagination";
import UserTable from "../../ui/tables/UserTable";
import api from "../../../helpers/api";
import Btn from "../../ui/GeneralButton";
import AddIcon from "../../../assets/img/add.svg";
import FilterBar from "../../ui/FilterBar";

const Users = () => {
  const { state, dispatch } = useContext(StoreContext);

  //Functions to send in FilterBar
  const getFilterUsers = () => {
    dispatch({ type: actions.getUsers });
  };

  const getFilterUsersSuccess = (data) => {
    dispatch({
      type: actions.getUsersSuccess,
      payload: {
        users: data.items,
        page: data.page,
        pageLimit: data.limitPage,
      },
    });
  };
  const getFilterUsersError = (msg) => {
    dispatch({
      type: actions.getUsersError,
      payload: msg,
    });
  };

  //get users
  useEffect(() => {
    const getUsers = async () => {
      try {
        getFilterUsers();
        const { data } = await api.get(`/users?page=${state.page}`);
        getFilterUsersSuccess(data);
      } catch {
        getFilterUsersError("Ocurrio un problema al traer a los usuarios");
      }
    };
    getUsers();
  }, [state.reload, state.page]);

  //functions to open, close to modal add user
  const showModalAddUser = () => {
    dispatch({ type: actions.showModalAddUser, payload: !state.showModal });
  };

  //functions to open, close to modal edit user
  const showModalEditUser = (user) => {
    console.log(user);
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

  // handle Change Pagination
  const handleChangePagination = (event, value) => {
    dispatch({ type: actions.setPage, payload: value });
  };

  const renderUserTable = () => {
    if (state.msgError) return <Error />;
    return (
      <>
        <UserTable
          users={state.users}
          showModalEditUser={showModalEditUser}
          removeUser={removeUser}
          prepareRemoveUser={prepareRemoveUser}
        />
        <Pagination
          count={state.pageLimit}
          page={state.page}
          callBack={handleChangePagination}
        />
      </>
    );
  };

  //Functions to filter
  const handleSearchFilter = (field, value) => {
    dispatch({ type: actions.setSearchFilter, payload: { field, value } });
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
      <WrapperHeader>
        <FilterBar
          state={state}
          typeTable={"user"}
          getFilterUsers={getFilterUsers}
          getFilterUsersSuccess={getFilterUsersSuccess}
          getFilterUsersError={getFilterUsersError}
          handleSearchFilter={handleSearchFilter}
        />
      </WrapperHeader>
      <UserModal
        closeModalUser={showModalAddUser}
        closeModalClean={closeModalUser}
      />
      {state.usersLoader ? <Spinner /> : renderUserTable()}
    </Fragment>
  );
};

export default Users;
