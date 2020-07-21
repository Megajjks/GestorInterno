import React from "react";
import {
  ButtonPrimary,
  ButtonSecundary,
  ButtonWarning,
  Title,
  Ico,
  CircleStatus,
} from "./styled";

const GeneralButton = ({ title, type, ico, color, onClick }) => {
  switch (type) {
    case "secundary":
      return (
        <ButtonSecundary onClick={onClick}>
          {ico ? <Ico src={ico} alt={`${title} ico`} /> : null}
          <Title>{title}</Title>
        </ButtonSecundary>
      );
    case "warning":
      return (
        <ButtonWarning onClick={onClick}>
          {ico ? <Ico src={ico} alt={`${title} ico`} /> : null}
          <Title>{title}</Title>
        </ButtonWarning>
      );
    case "status":
      return (
        <ButtonSecundary onClick={onClick}>
          <CircleStatus color={color}> </CircleStatus>
          <Title>{title}</Title>
        </ButtonSecundary>
      );
    default:
      return (
        <ButtonPrimary onClick={onClick}>
          {ico ? <Ico src={ico} alt={`${title} ico`} /> : null}
          <Title>{title}</Title>
        </ButtonPrimary>
      );
  }
};

export default GeneralButton;
