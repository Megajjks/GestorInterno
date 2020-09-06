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

export const states = [
  'Aguascalientes',
  'Baja California',
  'Baja California Sur',
  'Campeche',
  'Chihuahua',
  'Chiapas',
  'Ciudad de México',
  'Coahuila',
  'Colima',
  'Durango',
  'Estado de México',
  'Guanajuato',
  'Guerrero',
  'Hidalgo',
  'Jalisco',
  'Michoacán',
  'Morelos',
  'Nayarit',
  'Nuevo León',
  'Oaxaca',
  'Puebla',
  'Querétaro',
  'Quintana Roo',
  'San Luis Potosí',
  'Sinaloa',
  'Sonora',
  'Tabasco',
  'Tamaulipas',
  'Tlaxcala',
  'Veracruz',
  'Yucatán',
  'Zacatecas'
]

export const sector = [
  'Academia',
  'Sector público',
  'Sector privado',
  'Organización de la sociedad civil',
  'Ciudadanía'
]

export const commitmentImpact = [
  'Vinculación con actores clave',
  'Herramientas y metodologías para impulsar la innovación social y la agencia de cambio',
  'Asesorías especializadas',
  'Fondos para escalar la iniciativa',
  'Difusión y comunicación',
  'Otro'
]

export const socialNetworks = [
  'Ashoka Staff',
  'Aliados de Difusión',
  'Facebook',
  'Instagram',
  'Twitter',
  'LinkedIn',
  'Sesión de Compromisos',
  'Conector Ashoka',
  'Embajador Ashoka',
  'Sitio Web Ashoka',
  'Otro'
]