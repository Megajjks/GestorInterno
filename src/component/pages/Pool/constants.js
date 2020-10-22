export const initialState = {
  commitments: [],
  commitmentsLoader: false,
  commitmentsError: null,
  exportData: false,
  exportDataMessage: null,
  showBtnSycn: null,
  syncCommitmentsLoader: false,
  syncCommitmentsError: null,
  reload: false,
  page: 1,
  pageLimit: 1,

  //Pool Filtro
  searchFilter: {
    agent: "",
    collaborator: "",
    userManagement: "",
    user: "",
    area: "",
    state: "",
    sector: "",
    status: "",
    rol: null,
    isActive: null,
  },
};
