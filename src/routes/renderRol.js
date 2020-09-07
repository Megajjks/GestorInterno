import superAdmin from "./roles/superAdminRol";
import admin from "./roles/adminRol";
import assistant from "./roles/assistantRol";
import collaborator from "./roles/collaboratorRol";
import agent from "./roles/agentRol";

export const renderRol = () => {
  let rol = localStorage.getItem("login_data")
    ? JSON.parse(localStorage.getItem("login_data")).role
    : null;
  switch (rol) {
    case 1:
      return admin;
    case 2:
      return collaborator;
    case 3:
      return agent;
    case 4:
      return superAdmin;
    case 5:
      return assistant;
    default:
      //change when not user are defined
      return agent;
  }
};
