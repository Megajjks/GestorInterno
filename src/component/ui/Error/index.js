import React from "react";
import { Wrapper, Img, txt } from "./styled";
import ErrorImg from "../../../assets/img/error.svg";

const Error = () => {
  return (
    <Wrapper>
      <Img src={ErrorImg} alt="error img" />
      <h1>¡Ups! ha ocurrido un problema</h1>
      <txt>Verifica si tienes conexión a internet y vuelve a intentar</txt>
    </Wrapper>
  );
};

export default Error;
