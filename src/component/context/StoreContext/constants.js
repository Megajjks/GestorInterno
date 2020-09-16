export const initialState = {
  users: [],
  usersLoader: false,
  msgError: null,
  reload: false,
  showModal: false,
  isEditModal: false,
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    image: "",
    roleId: "",
  },
};
