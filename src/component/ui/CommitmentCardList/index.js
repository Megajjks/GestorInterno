import React from "react";
import { Wraper } from "./styled";
import CommitmentCard from "../CommitmentCard";

const CommitmentCardList = ({ commitments }) => {
  return (
    <Wraper>
      {commitments.map((commitment) => (
        <CommitmentCard key={commitment.id} data={commitment} />
      ))}
    </Wraper>
  );
};

export default CommitmentCardList;
