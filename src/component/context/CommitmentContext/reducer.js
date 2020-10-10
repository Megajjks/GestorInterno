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
    case actions.getTasksList:
      return {
        ...state,
        tasksLoading: true,
        tasksError: null,
      };
    case actions.getTasksListSuccess:
      return {
        ...state,
        tasks: action.payload.tasks,
        page: action.payload.page,
        pageLimit: action.payload.pageLimit,
        tasksLoading: false,
      };
    case actions.getTasksListError:
      return {
        ...state,
        tasksLoading: false,
        tasksError: action.payload,
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
        showModalTask: false,
        newTaskLoading: false,
        reloadTasks: action.payload,
      };
    case actions.addTaskError:
      return {
        ...state,
        showModalTask: true,
        newTaskLoading: false,
        newTaskError: action.payload,
      };
    case actions.updateTaskSuccess:
      return {
        ...state,
        newTask: {
          title: "",
          description: "",
          date: "",
        },
        reloadTasks: action.payload,
        msgError: null,
        showModalTask: false,
      };
    case actions.updateTaskError:
      return {
        ...state,
        msgError: action.payload,
        showModalTask: false,
      };
    case actions.removeTask:
      return {
        ...state,
        newTask: action.payload,
      };
    case actions.removeTaskSuccess:
      return {
        ...state,
        reloadTasks: action.payload,
        msgError: null,
        newTask: {
          title: "",
          description: "",
          date: "",
        },
      };
    case actions.removeTaskError:
      return {
        ...state,
        msgError: action.payload,
        newTask: {
          title: "",
          description: "",
          date: "",
        },
      };
    case actions.showModalAddTask:
      return {
        ...state,
        showModalTask: action.payload,
        isEditModalTask: false,
        newTaskError: null,
      };
    case actions.showModalEditTask:
      return {
        ...state,
        newTask: action.payload.task,
        showModalTask: action.payload.isShow,
        isEditModalTask: true,
      };
    case actions.closeModalEditTask:
      return {
        ...state,
        newTask: {
          title: "",
          description: "",
          date: "",
        },
        showModalTask: action.payload.isShow,
      };
    case actions.getMilestones:
      return {
        ...state,
        milestonesLoading: true,
        milestonesError: null,
      };
    case actions.getMilestonesSuccess:
      return {
        ...state,
        milestonesLoading: false,
        milestones: action.payload.milestones,
        page: action.payload.page,
        pageLimit: action.payload.pageLimit,
      };
    case actions.getMilestonesError:
      return {
        ...state,
        milestonesLoading: false,
        milestonesError: action.payload,
      };
    case actions.updateFieldMilestone:
      return {
        ...state,
        milestone: {
          ...state.milestone,
          [action.payload.field]: action.payload.value,
        },
      };
    case actions.addMilestone:
      return {
        ...state,
        milestoneLoading: true,
        milestonesError: null,
      };
    case actions.addMilestoneSuccess:
      return {
        ...state,
        milestone: {
          title: "",
          description: "",
          date: "",
        },
        showModalMilestone: false,
        milestonesLoading: false,
        reloadMilestones: action.payload,
      };
    case actions.addMilestoneError:
      return {
        ...state,
        showModalMilestone: true,
        milestonesLoading: false,
        milestonesError: action.payload,
      };
    case actions.updateMilestoneSuccess:
      return {
        ...state,
        milestone: {
          title: "",
          description: "",
          date: "",
        },
        reloadMilestones: action.payload,
        msgError: null,
        showModalMilestone: false,
      };
    case actions.updateMilestoneError:
      return {
        ...state,
        msgError: action.payload,
        showModalMilestone: false,
      };
    case actions.showModalAddMilestone:
      return {
        ...state,
        showModalMilestone: action.payload,
        isEditModalMilestone: false,
        milestonesError: null,
      };
    case actions.showModalEditMilestone:
      return {
        ...state,
        milestone: action.payload.milestone,
        showModalMilestone: action.payload.isShow,
        isEditModalMilestone: true,
      };
    case actions.closeModalEditMilestone:
      return {
        ...state,
        milestone: {
          title: "",
          description: "",
          date: "",
        },
        showModalMilestone: action.payload,
      };
    case actions.removeMilestone:
      return {
        ...state,
        milestone: action.payload,
      };
    case actions.removeMilestoneSuccess:
      return {
        ...state,
        reloadMilestones: action.payload,
        milestonesError: null,
        milestone: {
          title: "",
          description: "",
          date: "",
        },
      };
    case actions.removeMilestoneError:
      return {
        ...state,
        milestonesError: action.payload,
        milestone: {
          title: "",
          description: "",
          date: "",
        },
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
