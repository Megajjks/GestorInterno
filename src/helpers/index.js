/* Generic functions that can be reused for extra behavior */

/* This function return a dataStatus based on a status */
export const dataStatus = (status) => {
  switch (status) {
    case "validando":
    case "por validar":
      return {
        value: "Por validar",
        background: "#0038BA",
        color: "#FFFFFF",
        tag: "validando",
      };
    case "prevalidado":
    case "Pre validado":
      return {
        value: "Pre validado",
        background: "#0038BA",
        color: "#FFFFFF",
        tag: "prevalidado",
      };
    case "proceso":
    case "En proceso":
      return {
        value: "En proceso",
        background: "#FF4F13",
        color: "#FFFFFF",
        tag: "proceso",
      };
    case "cumplido":
      return {
        value: "Cumplido",
        background: "#4DAD38",
        color: "#FFFFFF",
        tag: "cumplido",
      };
    case "oculto":
      return {
        value: "Oculto",
        background: "#707070",
        color: "#FFFFFF",
        tag: "oculto",
      };
    case "correcion":
    case "En corrección":
    case "En correccion":
      return {
        value: "En corrección",
        background: "#FFE110",
        color: "#000000",
        tag: "correcion",
      };
    case "declinado":
    case "rechazado":
      return {
        value: "Rechazado",
        background: "#C0392B",
        color: "#FFFFFF",
        tag: "declinado",
      };
    default:
      return {
        value: "Por validar",
        background: "#0038BA",
        color: "#FFFFFF",
        tag: "validando",
      };
  }
};

//function that filters a commitment by one or more types of status
export const filterWithStatus = (data, query) => {
  const filteredData = data.filter((item) => {
    for (let key in query) {
      if (item.status === undefined) {
        return false;
      } else if (query[key].includes(item.status)) {
        return true;
      }
    }
    return false;
  });
  return filteredData;
};

//function that filters an users by one or more types of rol
export const filterWithRol = (data, query) => {
  const filteredData = data.filter((item) => {
    for (let key in query) {
      if (item.roleId === undefined) {
        return false;
      } else if (query[key].includes(item.roleId)) {
        return true;
      }
    }
    return false;
  });
  return filteredData;
};

//function that filters a commitment by Id collaborator
export const filterWithIdCollaboratorAndStatus = (
  commitments,
  idCollaborator,
  status
) => {
  const commitmensFilter = filterWithStatus(commitments, status);
  const filterData = commitmensFilter.filter(({ collaborators }) => {
    return collaborators.some(({ id }) => id === idCollaborator);
  });
  return filterData;
};

//This function return the name of rol
export const rolName = () => {
  let rol = localStorage.getItem("login_data")
    ? JSON.parse(localStorage.getItem("login_data")).role
    : null;
  switch (rol) {
    case 1:
      return "admin";
    case 2:
      return "collaborator";
    case 3:
      return "agent";
    case 4:
      return "superAdmin";
    case 5:
      return "assistant";
    default:
      return "notUser";
  }
};
