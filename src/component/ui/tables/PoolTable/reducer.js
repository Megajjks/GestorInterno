import { actions } from "./actions";
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.getCommitments:
      return {
        ...state,
        commitmentsLoader: true,
        commitmentsError: null,
      };
    case actions.getCommtimentsSuccess:
      return {
        ...state,
        commitments: action.payload,
        commitmentsLoader: false,
      };
    case actions.getCommtimentsError:
      return {
        ...state,
        commitmentsLoader: false,
        commitmentsError: action.payload,
      };
    case actions.filterCommtiments:
      return {
        ...state,
        commitmentsFilter: action.payload,
      };
    default:
      return state;
  }
};
