export const initialState = {
  commitment: { collaborators: [] },
  commitmentLoading: false,
  commitmentError: null,
  updateStatus: false,
  errorUpdateStatus: null,
  listColaborators: [],
  loadingColaborators: false,
  errorColaborators: null,
  likelyCollaborator: [],
  loadinglikelyCollaborator: false,
  errorlikelyCollaborator: null,
  reload: false,
  dropdownStatus: null,
  wrapperAddCollaborator: false,
  loadingDeletedCollaborator: false,
  errorDeletedCollaborator: null,
  newTask: {
    title: "",
    description: "",
    date: "",
  },
  newTaskLoading: false,
  newTaskError: null,
};