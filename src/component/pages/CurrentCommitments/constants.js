export const initialState = {
  commitments: [],
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
    organization: "",
    rol: null,
    isActive: null,
  },
};
