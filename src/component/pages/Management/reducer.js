import { actions } from "./actions";
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.getCommitments:
      return {
        ...state,
        commitmentsLoader: true,
        commitmentsError: false,
      };
    case actions.getCommitmentsSuccess:
      return {
        ...state,
        commitments: action.payload.commitments,
        page: action.payload.page,
        pageLimit: action.payload.pageLimit,
        commitmentsLoader: false,
      };
    case actions.getCommitmentsError:
      return {
        ...state,
        commitmentsLoader: false,
        commitmentsError: true,
      };
    case actions.filterCommitments:
      return {
        ...state,
        commitmentsFilter: action.payload,
      };
    case actions.setPage:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
