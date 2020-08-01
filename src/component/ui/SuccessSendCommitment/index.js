import React from "react";
import { Wrapper, WrapperBtn, Img, Title, Content } from "./styled";
import Ico from "../../../assets/img/email.svg";
import Btn from "../GeneralButton";

const SuccessSendCommitment = () => {
  const goHome = () => {
    window.location.href = "https://millonesdeagentesdecambio.org/";
  };

  return (
    <Wrapper>
      <Img src={Ico} alt="success-send-commitment" />
      <Title>Su compromiso ha sido enviado con exito</Title>
      <Content>
        En unos días recibiras un correo para saber si tu compromiso fue
        aprovado
      </Content>
      <WrapperBtn>
        <Btn title="Regresar al home" onClick={goHome} />
      </WrapperBtn>
    </Wrapper>
  );
};

export default SuccessSendCommitment;
