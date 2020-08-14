import React from "react";
import { Wrapper, Img, Txt } from "./styled";
import WithoutImg from "../../../../assets/img/without.svg";

const WithoutData = ({ title, content }) => {
  return (
    <Wrapper>
      <Img src={WithoutImg} alt="error img" />
      <h1> {title} </h1>
      <Txt> {content} </Txt>
    </Wrapper>
  );
};

export default WithoutData;
