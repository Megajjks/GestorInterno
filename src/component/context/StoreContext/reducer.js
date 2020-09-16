import { actions } from "./actions";
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.getUsers:
      return {
        ...state,
        usersLoader: true,
        msgError: null,
      };
    case actions.getUsersSuccess:
      return {
        ...state,
        users: action.payload,
        usersLoader: false,
      };
    case actions.getUsersError:
      return {
        ...state,
        usersLoader: false,
        msgError: action.payload,
      };
    case actions.showModalAddUser:
      return {
        ...state,
        showModal: action.payload,
        isEditModal: false,
      };
    case actions.showModalEditUser:
      return {
        ...state,
        showModal: action.payload,
        isEditModal: true,
      };
    case actions.closeModalEditUser:
      return {
        ...state,
        showModal: false,
        user: {},
      };
    default:
      return state;
  }
};
