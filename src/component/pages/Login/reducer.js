import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.setUser:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.payload,
        },
      };
    case actions.fetchLogin:
      return {
        ...state,
        loginLoading: true,
        loginError: null,
      };
    case actions.fetchLoginSuccess:
      return {
        ...state,
        loginLoading: false,
        loginError: null,
      };
    case actions.fetchLoginError:
      return {
        ...state,
        loginLoading: false,
        loginError: action.payload,
      };
    default:
      return state;
  }
};
