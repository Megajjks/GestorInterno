import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.getUser:
      return {
        ...state,
        userLoading: true,
        userError: null,
      };
    case actions.getUserSuccess:
      return {
        ...state,
        user: action.payload,
        userLoading: false,
      };
    case actions.getUserError:
      return {
        ...state,
        user: {},
        userLoading: false,
        userError: action.payload,
      };
    case actions.listOptions:
      return {
        ...state,
        dropdownUser: action.payload,
      };
    default:
      return state;
  }
};
