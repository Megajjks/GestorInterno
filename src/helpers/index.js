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
    case "primer_contacto":
    case "Primer Contacto":
      return {
        value: "Primer Contacto",
        background: "#B04480",
        color: "#FFFFFF",
        tag: "primer_contacto",
      };
    case "articulando":
      return {
        value: "Articulando",
        background: "#FF4F13",
        color: "#FFFFFF",
        tag: "articulando",
      };
    case "cumplido":
      return {
        value: "Cumplido",
        background: "#4DAD38",
        color: "#FFFFFF",
        tag: "cumplido",
      };
    case "archivado":
      return {
        value: "Archivado",
        background: "#707070",
        color: "#FFFFFF",
        tag: "archivado",
      };
    case "correccion":
    case "En corrección":
    case "En correccion":
      return {
        value: "En corrección",
        background: "#FFE110",
        color: "#000000",
        tag: "correccion",
      };
    case "declinado":
    case "rechazado":
      return {
        value: "Rechazado",
        background: "#C0392B",
        color: "#FFFFFF",
        tag: "declinado",
      };
    case "falla":
    case "falla al sincronizar":
      return {
        value: "falla al sincronizar",
        background: "#C0392B",
        color: "#FFFFFF",
        tag: "falla",
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

export const states = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chihuahua",
  "Chiapas",
  "Ciudad de México",
  "Coahuila",
  "Colima",
  "Durango",
  "Estado de México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
];

export const sector = [
  "Academia",
  "Sector público",
  "Sector privado",
  "Organización de la sociedad civil",
  "Ciudadanía",
];

export const commitmentImpact = [
  "Vinculación con actores clave",
  "Herramientas y metodologías para impulsar la innovación social y la agencia de cambio",
  "Asesorías especializadas",
  "Fondos para escalar la iniciativa",
  "Difusión y comunicación",
  "Otro",
];

export const socialNetworks = [
  "Ashoka Staff",
  "Aliados de Difusión",
  "Facebook",
  "Instagram",
  "Twitter",
  "LinkedIn",
  "Sesión de Compromisos",
  "Conector Ashoka",
  "Embajador Ashoka",
  "Sitio Web Ashoka",
  "Otro",
];

export const area = [
  "Comunicaciones",
  "Niñez y Juventud",
  "Ecosistemas Sociales",
  "Alianzas Estratégicas",
  "Finanzas",
  "Venture y Fellowship",
];

export const isActiveUser = [
  { value: true, tag: "Activo" },
  { value: false, tag: "Deshabilitado" },
];

export const roles = [
  { value: 4, tag: "Super Admin" },
  { value: 1, tag: "Admin" },
  { value: 5, tag: "Asistente" },
  { value: 2, tag: "Colaborador" },
  { value: 3, tag: "Agente" },
];

//This function return the name of rol take in localStorage
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

//This function return the name of rol by parameter
export const rolNameUser = (rol) => {
  switch (rol) {
    case 1:
      return {
        value: "Admin",
        tag: "admin",
        background: "#E64A19",
        color: "#FFFFFF",
      };
    case 2:
      return {
        value: "Colaborador",
        tag: "collaborator",
        background: "#01579b",
        color: "#FFFFFF",
      };
    case 3:
      return {
        value: "Agente",
        tag: "agent",
        background: "#00796B",
        color: "#FFFFFF",
      };
    case 4:
      return {
        value: "Super Admin",
        tag: "superAdmin",
        background: "#0D0D0D",
        color: "#FFFFFF",
      };
    case 5:
      return {
        value: "Asistente",
        tag: "assistant",
        background: "#FFA000",
        color: "#212121",
      };
    default:
      return {
        value: "sin rol",
        tag: "notRol",
        background: "#D32F2F",
        color: "#FFFFFF",
      };
  }
};

//This function return if the userId is match with list of collaborators
export const matchUser = (listCollaborators) => {
  let userId = localStorage.getItem("login_data")
    ? JSON.parse(localStorage.getItem("login_data")).userId
    : null;
  if (userId === null) return 0;
  try {
    const isMatch = listCollaborators.some(function (collaborator) {
      if (collaborator.id === userId) return true;
    });
    console.log(isMatch);
    return isMatch;
  } catch (e) {
    console.log(e);
  }
};

//This function return if there are unsynchronized commitments
export const existSync = (commitments) => {
  return commitments.some(function (commitment) {
    if (commitment.status === "falla") return true;
  });
};

//This funcition change the string of status
export const changeStatus = (status) => {
  if (status === "true") {
    return "false";
  } else {
    return "true";
  }
};
