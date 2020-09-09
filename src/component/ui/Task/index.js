import React from "react";
import {
  Wrapper,
  WrapperCheckTask,
  CheckTask,
  TaskData,
  WrapperPriority,
  CloseTask,
  TaskPriority,
  WrapperCollaborator,
  Collaborator,
  WrapperInfo,
  Icon,
  ImgProfile,
  TxtIcon,
  TitleTask,
  ImgEditTask,
  SectionEditTask,
  TxtDescriptionTask,
  WrapperEditTask,
  WrapperStatusTask,
  StatusTask,
} from "./styled";
import IconCompleteTask from "../../../assets/img/complete.svg";
import IconIncompleteTask from "../../../assets/img/incomplete.svg";
import IconCloseTask from "../../../assets/img/close.svg";
import IconClock from "../../../assets/img/clock.svg";
import IconEdit from "../../../assets/img/editar.svg";

function StatusTaskComplete({ status }) {
  if (status) {
    return (
      <WrapperStatusTask>
        <StatusTask>Completada</StatusTask>
      </WrapperStatusTask>
    );
  } else {
    return (
      <WrapperStatusTask style={{ backgroundColor: "#E73D3A" }}>
        <StatusTask style={{ color: "#FFFFFF" }}>Sin Completar</StatusTask>
      </WrapperStatusTask>
    );
  }
}

function Priority({ priority }) {
  if (priority === "high") {
    return <TaskPriority style={{ backgroundColor: "#E73D3A" }}></TaskPriority>;
  } else if (priority === "medium") {
    return <TaskPriority style={{ backgroundColor: "#F9C44A" }}></TaskPriority>;
  } else {
    return <TaskPriority></TaskPriority>;
  }
}

const Task = ({
  title,
  description,
  status,
  priority,
  date,
  user,
  isCollaborator,
}) => {
  return (
    <Wrapper isCollaborator={isCollaborator}>
      {isCollaborator && (
        <WrapperCheckTask>
          {status ? (
            <CheckTask src={IconCompleteTask} />
          ) : (
            <CheckTask src={IconIncompleteTask} />
          )}
        </WrapperCheckTask>
      )}
      <TaskData>
        <TitleTask>{title}</TitleTask>
        <WrapperInfo>
          <ImgProfile src={user.image} />
          <TxtIcon>{`${user.firstName} ${user.lastName}`}</TxtIcon>
        </WrapperInfo>
        <WrapperInfo>
          <Icon src={IconClock} />
          <TxtIcon>{date.substring(0, 10)}</TxtIcon>
        </WrapperInfo>
        <TxtDescriptionTask>{description}</TxtDescriptionTask>
      </TaskData>
      <WrapperPriority>
        {isCollaborator ? (
          <>
            <CloseTask src={IconCloseTask} />
            <Priority priority={priority} />
          </>
        ) : (
          <StatusTaskComplete status={status} />
        )}
      </WrapperPriority>
    </Wrapper>
  );
};

export default Task;
