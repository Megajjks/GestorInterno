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
          organization: action.payload.reset,
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
    default:
      return state;
  }
};
