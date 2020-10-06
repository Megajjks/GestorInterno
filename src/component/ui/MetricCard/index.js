import React from "react";
import {
  WrapperMetricCard,
  IconCard,
  WrapperContent,
  TxtCounter,
  TxtBody,
} from "./styled";
import IconClock from "../../../assets/img/commitmentaprove.svg";

const MetricCard = ({ metric }) => {
  return (
    <WrapperMetricCard>
      <IconCard src={IconClock} alt="icon" />
      <WrapperContent>
        <TxtCounter>{metric.total}</TxtCounter>
        <TxtBody>{metric.title}</TxtBody>
      </WrapperContent>
    </WrapperMetricCard>
  );
};

export default MetricCard;
