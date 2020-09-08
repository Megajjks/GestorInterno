import { actions } from "./actions";
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.getCommitments:
      return {
        ...state,
        commitmentsLoader: true,
        commitmentsError: null,
      };
    case actions.getCommitmentsSuccess:
      return {
        ...state,
        commitments: action.payload,
        commitmentsLoader: false,
      };
    case actions.getCommitmentsError:
      return {
        ...state,
        commitmentsLoader: false,
        commitmentsError: action.payload,
      };
    case actions.filterCommitments:
      return {
        ...state,
        commitmentsFilter: action.payload,
      };
    case actions.exportData:
      return {
        ...state,
        exportData: true,
        exportDataMessage: null,
      };
    case actions.exportDataSuccess:
      return {
        ...state,
        exportData: false,
      };
    case actions.exportDataError:
      return {
        ...state,
        exportData: false,
        exportDataMessage: action.payload,
      };
    default:
      return state;
  }
};
