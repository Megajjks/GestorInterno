import React from "react";
import { useHistory } from "react-router-dom";
import { Wraper } from "./styled";
import CommitmentCard from "../CommitmentCard";

const CommitmentCardList = ({ commitments, btnTitle, btnUrlBase }) => {
  const history = useHistory();
  const handleClick = (item) => {
    history.push({
      pathname: `${btnUrlBase}/${item.id}`,
      state: item,
    });
  };

  return (
    <Wraper>
      {commitments.map((commitment) => (
        <CommitmentCard
          key={commitment.id}
          data={commitment}
          btnTitle={btnTitle}
          onClick={() => handleClick(commitment)}
        />
      ))}
    </Wraper>
  );
};

export default CommitmentCardList;
