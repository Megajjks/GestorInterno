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
    default:
      return state;
  }
};
