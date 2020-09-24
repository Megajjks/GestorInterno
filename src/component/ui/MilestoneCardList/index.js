import React, { Fragment, useContext } from "react";
import { CommitmentContext } from "../../context/CommitmentContext";
import { actions } from "../../context/CommitmentContext/actions";
import MilestoneCard from "../MilestoneCard";
import api from "../../../helpers/api";

const MilestoneCardList = ({
  milestones,
  isCollaborator,
  showModalMilestone,
}) => {
  const { state, dispatch } = useContext(CommitmentContext);

  return (
    <Fragment>
      {milestones.map((milestone, idx) => (
        <MilestoneCard
          key={idx}
          milestone={milestone}
          isCollaborator={isCollaborator}
          showModalMilestone={showModalMilestone}
        />
      ))}
    </Fragment>
  );
};

export default MilestoneCardList;
