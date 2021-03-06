import React from "react";
import { Wrapper, Img, Txt } from "./styled";
import WithoutTasks from "../../../../assets/img/milestone.svg";

const WithoutMilestones = ({ title, content }) => {
  return (
    <Wrapper>
      <Img src={WithoutTasks} alt="without tasks" />
      <h2> {title} </h2>
      <Txt> {content} </Txt>
    </Wrapper>
  );
};

export default WithoutMilestones;
