import React from "react";
import { WrapperMetricCards } from "./styled";
import MetricCard from "../MetricCard";

const MetricCardList = ({ metrics }) => {
  return (
    <WrapperMetricCards>
      {metrics.map((metric, idx) => (
        <MetricCard metric={metric} key={idx} />
      ))}
    </WrapperMetricCards>
  );
};

export default MetricCardList;
