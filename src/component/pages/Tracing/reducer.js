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
        commitments: action.payload.commitments,
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
          rol: action.payload.reset,
          isActive: action.payload.reset,
        },
      };
    case actions.getCommitmentsTracingFilter:
      return {
        ...state,
        commitmentsLoader: true,
        commitmentsError: null,
      };
    case actions.getCommitmentsTracingFilterSuccess:
      return {
        ...state,
        commitments: action.payload,
        commitmentsLoader: false,
      };
    default:
      return state;
  }
};
