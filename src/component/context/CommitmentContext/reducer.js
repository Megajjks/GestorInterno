import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.getCommitment:
      return {
        ...state,
        commitmentLoading: true,
        commitmentError: null,
      };
    case actions.getCommitmentSuccess:
      return {
        ...state,
        commitmentLoading: false,
        commitmentError: null,
        commitment: action.payload,
      };
    case actions.getCommitmentError:
      return {
        ...state,
        commitmentLoading: false,
        commitmentError: action.payload,
        commitment: [],
      };
    case actions.getCollaboratorsList:
      return {
        ...state,
        loadingColaborators: true,
        errorColaborators: null,
      };
    case actions.getCollaboratorsListSuccess:
      return {
        ...state,
        loadingColaborators: false,
        errorColaborators: null,
        listColaborators: action.payload,
      };
    case actions.getCollaboratorsListError:
      return {
        ...state,
        loadingColaborators: false,
        errorColaborators: action.payload,
        listColaborators: [],
      };
    case actions.setColaborator:
      return {
        ...state,
        likelyCollaborator: action.payload,
      };
    case actions.saveColaborators:
      return {
        ...state,
        loadinglikelyCollaborator: false,
        errorlikelyCollaborator: null,
        reload: action.payload,
        likelyCollaborator: [],
        wrapperAddCollaborator: false,
      };
    case actions.errorColaborators:
      return {
        ...state,
        loadinglikelyCollaborator: false,
        errorlikelyCollaborator: action.payload,
        likelyCollaborator: [],
        wrapperAddCollaborator: false,
      };
    case actions.updateStatusCommitment:
      return {
        ...state,
        updateStatus: true,
        errorUpdateStatus: null,
      };
    case actions.updateStatusCommitmentSuccess:
      return {
        ...state,
        updateStatus: false,
        dropdownStatus: null,
        reload: action.payload,
      };
    case actions.updateStatusCommitmentError:
      return {
        ...state,
        updateStatus: false,
        dropdownStatus: null,
        errorUpdateStatus: action.payload,
      };
    case actions.dropDownStatusOpen:
      return {
        ...state,
        dropdownStatus: action.payload,
      };
    case actions.dropDownStatusClose:
      return {
        ...state,
        dropdownStatus: null,
      };
    case actions.wrapperAddCollaboratorOnOff:
      return {
        ...state,
        wrapperAddCollaborator: action.payload,
      };
    case actions.deletedCollaborator:
      return {
        ...state,
        loadingDeletedCollaborator: true,
        errorDeletedCollaborator: null,
      };
    case actions.deletedCollaboratorSuccess:
      return {
        ...state,
        loadingDeletedCollaborator: false,
        reload: action.payload,
      };
    case actions.deletedCollaboratorError:
      return {
        ...state,
        loadingDeletedCollaborator: false,
        errorDeletedCollaborator: action.payload,
      };
    case actions.updateFieldAddTask:
      return {
        ...state,
        newTask: {
          ...state.newTask,
          [action.payload.field]: action.payload.value,
        },
      };
    case actions.addTask:
      return {
        ...state,
        newTaskLoading: true,
        newTaskError: null,
      };
    case actions.addTaskSuccess:
      return {
        ...state,
        newTask: {
          title: "",
          description: "",
          date: "",
        },
        newTaskLoading: false,
        reload: action.payload,
      };
    case actions.addTaskError:
      return {
        ...state,
        newTaskLoading: false,
        newTaskError: action.payload,
      };
    //Pool Filtro
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
          [action.payload.field]: action.payload.value
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
          isActive: action.payload.reset
        }
      }
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
