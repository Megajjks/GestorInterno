import React, { Fragment, useState } from "react";
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
import AlertModal from "../modals/AlertModal";
import IconCompleteTask from "../../../assets/img/complete.svg";
import IconIncompleteTask from "../../../assets/img/incomplete.svg";
import IconCloseTask from "../../../assets/img/close.svg";
import IconClock from "../../../assets/img/clock.svg";
import IconEdit from "../../../assets/img/editar.svg";
import AvatarIco from "../../../assets/img/usercard.svg";

function StatusTaskComplete({ status }) {
  return status === "true" ? (
    <WrapperStatusTask>
      <StatusTask>Completada</StatusTask>
    </WrapperStatusTask>
  ) : (
    <WrapperStatusTask style={{ backgroundColor: "#E73D3A" }}>
      <StatusTask style={{ color: "#FFFFFF" }}>Sin Completar</StatusTask>
    </WrapperStatusTask>
  );
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
  task,
  isCollaborator,
  changeStatusTask,
  prepareRemoveTask,
  removeTask,
  editTask,
}) => {
  const [showModalAlert, setShowModalAlert] = useState(false);

  const showAlert = () => {
    prepareRemoveTask();
    setShowModalAlert(!showModalAlert);
  };
  const closeAlert = () => {
    setShowModalAlert(!showModalAlert);
  };

  return (
    <Fragment>
      <Wrapper isCollaborator={isCollaborator}>
        {isCollaborator && (
          <WrapperCheckTask>
            {task.status === "true" ? (
              <CheckTask src={IconCompleteTask} onClick={changeStatusTask} />
            ) : (
              <CheckTask src={IconIncompleteTask} onClick={changeStatusTask} />
            )}
          </WrapperCheckTask>
        )}
        <TaskData>
          <SectionEditTask>
            <TitleTask>
              {task.title}{" "}
              {isCollaborator && (
                <ImgEditTask src={IconEdit} alt="edit" onClick={editTask} />
              )}
            </TitleTask>
          </SectionEditTask>
          <WrapperInfo>
            <ImgProfile
              src={
                task.user.image
                  ? `https://api.ashoka.hackademy.mx/${task.user.image}`
                  : AvatarIco
              }
            />
            <TxtIcon>{`${task.user.firstName} ${task.user.lastName}`}</TxtIcon>
          </WrapperInfo>
          <WrapperInfo>
            <Icon src={IconClock} />
            <TxtIcon>{task.date.substring(0, 10)}</TxtIcon>
          </WrapperInfo>
          <TxtDescriptionTask>{task.description}</TxtDescriptionTask>
        </TaskData>
        <WrapperPriority>
          {isCollaborator ? (
            <>
              <CloseTask src={IconCloseTask} onClick={() => showAlert()} />
              <Priority priority={task.priority} />
            </>
          ) : (
            <StatusTaskComplete status={task.status} />
          )}
        </WrapperPriority>
      </Wrapper>
      <AlertModal
        title="¿Estas seguro?"
        message="Estas seguro de eliminar la tarea"
        open={showModalAlert}
        handleClose={closeAlert}
        callback={removeTask}
      />
    </Fragment>
  );
};

export default Task;
