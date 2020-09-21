import React from "react";
import { WrapperAlert, TxtBody, AcentWord } from "./styled";

const AlertInformation = ({ preRol }) => {
  const preRolTxt = (rol) => {
    switch (rol) {
      case "validando":
        return "aceptar";
      case "correcion":
        return "aceptar con correcciónes";
      case "declinado":
        return "rechazar";
      default:
        return "sin info";
    }
  };

  return (
    <WrapperAlert>
      <TxtBody>
        Este compromiso fue pre-validado por un asistente el cual ha decidido{" "}
        <AcentWord>{`${preRolTxt(preRol)} el compromiso`} </AcentWord> , sin
        embargo falta la verificación de un administrador para dar por valido la
        decisión
      </TxtBody>
    </WrapperAlert>
  );
};

export default AlertInformation;
