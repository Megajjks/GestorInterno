/* Generic functions that can be reused for extra behavior */

/* This function return a color based on a status */
export const colorStatus = (status) => {
  switch (status) {
    case "por validar":
      return "#0038BA";
    case "en proceso":
      return "#FF4F13";
    case "cumplido":
      return "#4DAD38";
    case "oculto":
      return "#707070";
    case "en correcion":
      return "#FFE110";
    case "rechazado":
      return "#C0392B";
    default:
      return "";
  }
};
