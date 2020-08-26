export const initialState = {
  id: JSON.parse(localStorage.getItem("login_data")).userId,
  user: {},
  userLoading: false,
  userError: null,
  dropdownUser: null,
};
