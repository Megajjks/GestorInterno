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
    case actions.getDashboardData:
      return {
        ...state,
        DataDasboardLoader: true,
        DataDasboardError: null,
      };
    case actions.getDashboardDataSuccess:
      return {
        ...state,
        metrics: action.payload.metrics,
        commitmentsCurrentsPool: action.payload.currentPool,
        commitmentsCurrentsTracing: action.payload.currentTracing,
        commitmentsCurrentsManagement: action.payload.currentManagement,
        DataDasboardLoader: false,
      };
    case actions.getDashboardDataError:
      return {
        ...state,
        DataDasboardError: action.payload,
        DataDasboardLoader: false,
      };
    default:
      return state;
  }
};
