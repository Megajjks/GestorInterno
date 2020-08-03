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
import Btn from "../GeneralButton";
import { dataStatus } from "../../../helpers/index";

const status = {
  validando: {
    value: "Por validar",
    background: "#0038BA",
    color: "#FFFFFF",
  },
  prevalidado: {
    value: "Pre validado",
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

const CommitmentCard = ({ data, btnTitle, onClick }) => {
  let brief = `${data.q1.slice(0, 200)}...`;
  let infoStatus = dataStatus(data.status);
  return (
    <div style={{ display: "flex", justifyContent: "space-beetwen" }}>
      <Wrapper>
        <Logo src={data.logo} />
        <TxtPrimary> {data.organization} </TxtPrimary>
        <Badge style={{ alignSelf: "flex-start", padding: ".5rem 0" }}>
          <SvgImg src={User} />
          <Txtlight> {`${data.firstName}  ${data.lastName}`} </Txtlight>
        </Badge>
        <TxtSecundary> {brief} </TxtSecundary>
        <Badge style={{ width: "100%", padding: ".5rem 0" }}>
          <Badge style={{ alignSelf: "flex-start", padding: ".5rem 0" }}>
            <SvgImg src={Map} />
            <Txtlight> {data.city} </Txtlight>
          </Badge>
          <Status status={infoStatus}> {infoStatus.value} </Status>
        </Badge>
        {btnTitle ? (
          <Btn title={btnTitle} type="secundary" onClick={onClick} />
        ) : null}
      </Wrapper>
    </div>
  );
};

export default CommitmentCard;
