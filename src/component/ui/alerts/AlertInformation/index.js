import React from "react";
import {
  WrapperAlert,
  TxtBody,
  AcentWord,
  TitleAlert,
  MsgText,
} from "./styled";

const AlertInformation = ({ type, preRol, title, msg }) => {
  const preRolTxt = (rol) => {
    switch (rol) {
      case "validando":
        return "aceptar";
      case "correccion":
        return "aceptar con correcciónes";
      case "declinado":
        return "rechazar";
      default:
        return "sin info";
    }
  };

  const renderAlert = () => {
    switch (type) {
      case "message":
        return (
          <WrapperAlert color="#4b636e" type={type}>
            <TitleAlert> {title} </TitleAlert>
            <MsgText> {msg} </MsgText>
          </WrapperAlert>
        );
      default:
        return (
          <WrapperAlert color="#fbc02d" type={type}>
            <TxtBody>
              Este compromiso fue pre-validado por un asistente el cual ha
              decidido{" "}
              <AcentWord>{`${preRolTxt(preRol)} el compromiso`} </AcentWord> ,
              sin embargo falta la verificación de un administrador para dar por
              valido la decisión
            </TxtBody>
          </WrapperAlert>
        );
    }
  };

  return renderAlert();
};

export default AlertInformation;
