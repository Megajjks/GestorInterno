export const initialState = {
  commitments: [],
  commitmentsFilter: [],
  commitmentsLoader: false,
  commitmentsError: null,
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
