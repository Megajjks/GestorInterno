import { actions } from "./actions";
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.getCommitments:
      return {
        ...state,
        commitmentsLoader: true,
        showBtnSycn: false,
        commitmentsError: null,
      };
    case actions.getCommitmentsSuccess:
      return {
        ...state,
        commitments: action.payload.commitments,
        showBtnSycn: action.payload.existSync,
        page: action.payload.page,
        pageLimit: action.payload.pageLimit,
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
    case actions.sync:
      return {
        ...state,
        syncCommitmentsLoader: true,
        syncCommitmentsError: null,
      };
    case actions.syncSucess:
      return {
        ...state,
        showBtnSycn: false,
        syncCommitmentsLoader: false,
        reload: action.payload,
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
