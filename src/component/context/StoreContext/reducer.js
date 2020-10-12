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
        users: action.payload.users,
        page: action.payload.page,
        pageLimit: action.payload.pageLimit,
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
        msgErrorModal: null,
      };
    case actions.showModalEditUser:
      return {
        ...state,
        user: action.payload.user,
        showModal: action.payload.isShow,
        isEditModal: true,
      };
    case actions.closeModalEditUser:
      return {
        ...state,
        showModal: false,
        user: {},
        msgErrorModal: null,
      };
    case actions.updateUser:
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.field]: action.payload.value,
        },
      };
    case actions.addUser:
      return {
        ...state,
        userModalLoader: true,
        msgErrorModal: null,
      };
    case actions.addUserSuccess:
      return {
        ...state,
        user: {
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phone: "",
          image: "",
          roleId: "",
        },
        userModalLoader: false,
        showModal: false,
        reload: action.payload,
      };
    case actions.addUserError:
      return {
        ...state,
        userModalLoader: false,
        msgErrorModal: action.payload,
      };
    case actions.saveUpdateUser:
      return {
        ...state,
        userModalLoader: true,
        msgErrorModal: action.payload,
      };
    case actions.saveUpdateUserSuccess:
      return {
        ...state,
        user: {
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phone: "",
          image: "",
          roleId: "",
        },
        showModal: false,
        userModalLoader: false,
        reload: action.payload,
      };
    case actions.saveUpdateUserError:
      return {
        ...state,
        showModal: false,
        userModalLoader: false,
        msgErrorModal: action.payload,
      };
    case actions.removeUser:
      return {
        ...state,
        user: action.payload,
      };
    case actions.removeUserSuccess:
      return {
        ...state,
        reload: action.payload,
      };
    case actions.removeUserError:
      return {
        ...state,
        msgError: action.payload,
      };
    case actions.setPage:
      return {
        ...state,
        page: action.payload,
      };
    //Filter cases
    case actions.setSearchFilter:
      return {
        ...state,
        searchFilter: {
          ...state.searchFilter,
          [action.payload.field]: action.payload.value,
        },
      };
      case actions.clearSearchFilter:
        return {
          ...state,
          searchFilter: {
            ...state.searchFilter,
            agent: action.payload.reset,
            collaborator: action.payload.reset,
            userManagement: action.payload.reset,
            user: action.payload.reset,
            area: action.payload.reset,
            state: action.payload.reset,
            sector: action.payload.reset,
            status: action.payload.reset,
            rol: 0,
            isActive: action.payload.reset,
          },
        };
    default:
      return state;
  }
};
