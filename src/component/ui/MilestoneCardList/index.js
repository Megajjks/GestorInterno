import React, { Fragment, useContext } from "react";
import MilestoneCard from "../MilestoneCard";

const MilestoneCardList = ({
  milestones,
  isCollaborator,
  showModalMilestone,
  prepareRemoveMilestone,
  removeMilestone,
}) => {
  return (
    <Fragment>
      {milestones.map((milestone, idx) => (
        <MilestoneCard
          key={idx}
          milestone={milestone}
          isCollaborator={isCollaborator}
          showModalMilestone={showModalMilestone}
          prepareRemoveMilestone={() => prepareRemoveMilestone(milestone)}
          removeMilestone={removeMilestone}
        />
      ))}
    </Fragment>
  );
};

export default MilestoneCardList;
