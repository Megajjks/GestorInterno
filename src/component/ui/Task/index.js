import React from 'react';
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
  WrapperExpiration,
  Icon,
  TxtIcon,
  TitleTask,
  TxtDescriptionTask
} from "./styled";
import IconCompleteTask from "../../../assets/img/complete.svg";
import IconIncompleteTask from "../../../assets/img/incomplete.svg";
import IconCloseTask from "../../../assets/img/close.svg";
import IconClock from "../../../assets/img/clock.svg";

const Task = ({ title, description, status, priority , date, collaborator}) => {

    return (  
        <Wrapper>
            <WrapperCheckTask>
                <CheckTask src={IconIncompleteTask}/> 
            </WrapperCheckTask>
            <TaskData> 
                <WrapperCollaborator>
                    <Collaborator>{collaborator}</Collaborator>
                </WrapperCollaborator>
                <WrapperExpiration>
                    <Icon src={IconClock}/>
                    <TxtIcon>{date}</TxtIcon>
                </WrapperExpiration>
                <TitleTask>{title}</TitleTask>
                <TxtDescriptionTask>{description}</TxtDescriptionTask>
            </TaskData>
            <WrapperPriority>
                <CloseTask src={IconCloseTask}/>
                <TaskPriority></TaskPriority>
            </WrapperPriority>
        </Wrapper>
    );
}

export default Task;