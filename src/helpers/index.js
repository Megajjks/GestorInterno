/* Generic functions that can be reused for extra behavior */

/* This function return a color based on a status */
export const dataStatus = (status) => {
  switch (status) {
    case "validando":
      return {
        value: "Por validar",
        background: "#0038BA",
        color: "#FFFFFF",
      };
    case "prevalidado":
      return {
        value: "Pre validado",
        background: "#0038BA",
        color: "#FFFFFF",
      };
    case "proceso":
      return {
        value: "En proceso",
        background: "#FF4F13",
        color: "#FFFFFF",
      };
    case "cumplido":
      return {
        value: "Cumplido",
        background: "#4DAD38",
        color: "#FFFFFF",
      };
    case "oculto":
      return {
        value: "Oculto",
        background: "#707070",
        color: "#FFFFFF",
      };
    case "correcion":
      return {
        value: "En corrección",
        background: "#FFE110",
        color: "#000000",
      };
    case "declinado":
      return {
        value: "Rechazado",
        background: "#C0392B",
        color: "#FFFFFF",
      };
    default:
      return {
        value: "Por validar",
        background: "#0038BA",
        color: "#FFFFFF",
      };
  }
};

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
