import React, { Fragment, useState } from "react";
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
import AlertModal from "../modals/AlertModal";
import IconEdit from "../../../assets/img/editar.svg";
import IconRemove from "../../../assets/img/close.svg";
import IconClock from "../../../assets/img/clock.svg";

const MilestoneCard = ({
  milestone,
  isCollaborator,
  showModalMilestone,
  prepareRemoveMilestone,
  removeMilestone,
}) => {
  const [showModalAlert, setShowModalAlert] = useState(false);

  const showAlert = () => {
    prepareRemoveMilestone();
    setShowModalAlert(true);
  };

  const closeAlert = () => setShowModalAlert(false);

  return (
    <Fragment>
      <Wrapper>
        {isCollaborator && (
          <RemoveTask
            src={IconRemove}
            alt="remove milestone"
            onClick={showAlert}
          />
        )}
        <Section>
          <TitleMilestone>
            {" "}
            {milestone.title}
            {isCollaborator && (
              <ImgEdit
                src={IconEdit}
                alt="edit milestone"
                onClick={() => showModalMilestone(milestone)}
              />
            )}
          </TitleMilestone>
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
      <AlertModal
        title="¿Estas seguro?"
        message="Estas seguro de eliminar este logro"
        open={showModalAlert}
        handleClose={closeAlert}
        callback={removeMilestone}
      />
    </Fragment>
  );
};

export default MilestoneCard;
