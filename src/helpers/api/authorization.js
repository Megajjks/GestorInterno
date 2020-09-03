export const isAuthorization = () => {
  return localStorage.getItem("login_data") ? true : false;
};
