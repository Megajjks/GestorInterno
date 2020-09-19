export const initialState = {
  commitments: [],
  commitmentsFilter: [],
  commitmentsLoader: false,
  commitmentsError: null,
  exportData: false,
  exportDataMessage: null,
  showBtnSycn: null,
  syncCommitmentsLoader: false,
  syncCommitmentsError: null,
  reload: false,
  searchFilter: {
      agent: "",
      collaborator: "",
      state: "",
      sector: "",
      status: "",
      searchIn: "",
  }
};