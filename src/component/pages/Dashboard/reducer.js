import { actions } from "./actions";
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.getUser:
      return {
        ...state,
        userLoader: true,
        userError: null,
      };
    case actions.getUserSuccess:
      return {
        ...state,
        user: action.payload,
        userLoader: false,
      };
    case actions.getUserError:
      return {
        ...state,
        userLoader: false,
        userError: action.payload,
      };
    default:
      return state;
  }
};
