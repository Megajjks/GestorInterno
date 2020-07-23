import React from "react";
import { Wraper } from "./styled";
import CommitmentCard from "../CommitmentCard";

const CommitmentCardList = ({ commitments, btnTitle, btnUrlBase }) => {
  return (
    <Wraper>
      {commitments.map((commitment) => (
        <CommitmentCard
          key={commitment.id}
          data={commitment}
          btnTitle={btnTitle}
          btnUrlBase={btnUrlBase}
        />
      ))}
    </Wraper>
  );
};

export default CommitmentCardList;
