import axios from "axios";

export const api = axios.create({
  //baseURL: "http://ec2-18-207-233-79.compute-1.amazonaws.com:5050/api",
  baseURL: "https://api.ashoka.hackademy.mx/api/",
});

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("login_data")
      ? JSON.parse(localStorage.getItem("login_data")).accessToken
      : null;
    config.headers = { ...config.headers, Authorization: token };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
