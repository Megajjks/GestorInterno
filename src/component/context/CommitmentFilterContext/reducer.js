import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    //Pool Table
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
    case actions.syncError:
      return {
        ...state,
        showBtnSycn: true,
        syncCommitmentsLoader: false,
        syncCommitmentsError: action.payload,
      };
    case actions.setSearchFilter:
      return {
        ...state,
        searchFilter: {
          ...state.searchFilter,
          [action.payload.field]: action.payload.value,
          searchIn: action.payload.field
        },
      };
    //Tracing Table
    case actions.getCommitmentsTracing:
      return {
        ...state,
        commitmentsLoader: true,
        commitmentsError: null,
      };
    case actions.getCommitmentsSuccessTracing:
      return {
        ...state,
        commitments: action.payload,
        commitmentsLoader: false,
      };
    default:
      return state;
  }
};