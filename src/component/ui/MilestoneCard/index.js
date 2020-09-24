import React from "react";
import {
  Wrapper,
  WrapperInfo,
  Section,
  TitleMilestone,
  DescriptionMilestone,
  TxtIcon,
  Icon,
  ImgEdit,
  ImgProfile,
  RemoveTask,
} from "./styled";

import IconEdit from "../../../assets/img/editar.svg";
import IconRemove from "../../../assets/img/close.svg";
import IconClock from "../../../assets/img/clock.svg";

const MilestoneCard = ({ milestone, isCollaborator, showModalMilestone }) => {
  return (
    <Wrapper>
      {isCollaborator && <RemoveTask src={IconRemove} alt="remove milestone" />}
      <Section>
        <TitleMilestone> {milestone.title} </TitleMilestone>
        {isCollaborator && (
          <ImgEdit
            src={IconEdit}
            alt="edit milestone"
            onClick={() => showModalMilestone(milestone)}
          />
        )}
      </Section>
      <WrapperInfo>
        <ImgProfile
          src="https://api.ashoka.hackademy.mx/public/img-1599784167033.jpg"
          alt="profile"
        />
        <TxtIcon>{milestone.organization}</TxtIcon>
      </WrapperInfo>
      <WrapperInfo>
        <Icon src={IconClock} alt="date Milestone" />
        <TxtIcon>{milestone.date}</TxtIcon>
      </WrapperInfo>
      <DescriptionMilestone>{milestone.description}</DescriptionMilestone>
    </Wrapper>
  );
};

export default MilestoneCard;
