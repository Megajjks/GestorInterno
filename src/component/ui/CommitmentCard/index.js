import React from "react";
import {
  Wrapper,
  Logo,
  Badge,
  SvgImg,
  Status,
  TxtPrimary,
  TxtSecundary,
  Txtlight,
} from "./styled";
import User from "../../../assets/img/usercard.svg";
import Map from "../../../assets/img/mapcard.svg";

const status = {
  validando: {
    value: "Por validar",
    background: "#0038BA",
    color: "#FFFFFF",
  },
  proceso: {
    value: "En proceso",
    background: "#FF4F13",
    color: "#FFFFFF",
  },
  cumplido: {
    value: "Cumplido",
    background: "#4DAD38",
    color: "#FFFFFF",
  },
  oculto: {
    value: "Oculto",
    background: "#707070",
    color: "#FFFFFF",
  },
  correcion: {
    value: "En corrección",
    background: "#FFE110",
    color: "#000000",
  },
  declinado: {
    value: "Rechazado",
    background: "#C0392B",
    color: "#FFFFFF",
  },
};

const CommitmentCard = ({ data }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-beetwen" }}>
      <Wrapper>
        <Logo src={data.logo} />
        <TxtPrimary> {data.title} </TxtPrimary>
        <Badge style={{ alignSelf: "flex-start", padding: ".5rem 0" }}>
          <SvgImg src={User} />
          <Txtlight> {data.organization} </Txtlight>
        </Badge>
        <TxtSecundary> {data.brief} </TxtSecundary>
        <Badge style={{ width: "100%", padding: ".5rem 0" }}>
          <Badge style={{ alignSelf: "flex-start", padding: ".5rem 0" }}>
            <SvgImg src={Map} />
            <Txtlight> {data.location} </Txtlight>
          </Badge>
          <Status status={status[data.status]}>
            {" "}
            {status[data.status].value}{" "}
          </Status>
        </Badge>
      </Wrapper>
    </div>
  );
};

export default CommitmentCard;
