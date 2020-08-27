import React from "react";
import { Wrapper, Img, Txt } from "./styled";
import ErrorImg from "../../../../assets/img/error.svg";

const Error = () => {
  return (
    <Wrapper>
      <Img src={ErrorImg} alt="error img" />
      <h1>¡Ups! ha ocurrido un problema</h1>
      <Txt>Verifica si tienes conexión a internet y vuelve a intentar</Txt>
    </Wrapper>
  );
};

export default Error;
