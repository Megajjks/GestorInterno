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
    case actions.getCommitmentsPool:
      return {
        ...state,
        commitmentsCurrentsPoolLoader: true,
        commitmentsCurrentsPoolError: null,
      };
    case actions.getCommitmentsPoolSuccess:
      return {
        ...state,
        commitmentsCurrentsPool: action.payload,
        commitmentsCurrentsPoolLoader: false,
      };
    case actions.getCommitmentsPoolError:
      return {
        ...state,
        commitmentsCurrentsPoolError: action.payload,
        commitmentsCurrentsPoolLoader: false,
      };
    case actions.getCommitmentsTracing:
      return {
        ...state,
        commitmentsCurrentsTracingLoader: true,
        commitmentsCurrentsTracingError: null,
      };
    case actions.getCommitmentsTracingSuccess:
      return {
        ...state,
        commitmentsCurrentsTracing: action.payload,
        commitmentsCurrentsTracingLoader: false,
      };
    case actions.getCommitmentsTracingError:
      return {
        ...state,
        commitmentsCurrentsTracingError: action.payload,
        commitmentsCurrentsTracingLoader: false,
      };
    case actions.getCommitmentsManagement:
      return {
        ...state,
        commitmentsCurrentsManagementLoader: true,
        commitmentsCurrentsManagementError: null,
      };
    case actions.getCommitmentsManagementSuccess:
      return {
        ...state,
        commitmentsCurrentsManagement: action.payload,
        commitmentsCurrentsManagementLoader: false,
      };
    case actions.getCommitmentsManagementError:
      return {
        ...state,
        commitmentsCurrentsManagementError: action.payload,
        commitmentsCurrentsManagementLoader: false,
      };
    default:
      return state;
  }
};
