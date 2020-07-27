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
  ImgEditTask,
  SectionEditTask,
  TxtDescriptionTask,
  WrapperEditTask,
  WrapperStatusTask,
  StatusTask
} from "./styled";
import IconCompleteTask from "../../../assets/img/complete.svg";
import IconIncompleteTask from "../../../assets/img/incomplete.svg";
import IconCloseTask from "../../../assets/img/close.svg";
import IconClock from "../../../assets/img/clock.svg";
import IconEdit from "../../../assets/img/editar.svg";

function StatusTaskComplete(props) {
    const statusTaskComplete = props.statusTaskComplete;
    if (statusTaskComplete) {
        return (
            <WrapperStatusTask>
                <StatusTask>Completada</StatusTask>
            </WrapperStatusTask>
        )
    } else {
        return (
            <WrapperStatusTask style={{ backgroundColor: "#E73D3A" }}>
                <StatusTask style={{ color: "#FFFFFF" }} >Sin Completar</StatusTask>
            </WrapperStatusTask>
        )
    }
} 

function Priority(props) {
    const priorityLevel = props.priorityLevel;
    if (priorityLevel === "high") {
      return <TaskPriority style={{ backgroundColor: "#E73D3A" }}></TaskPriority>
    } else if(priorityLevel === "medium") {
        return <TaskPriority style={{ backgroundColor: "#F9C44A" }}></TaskPriority>
    } else {
        return <TaskPriority></TaskPriority>
    }
}

const Task = ({ title, description, status, priority , date, collaborator, role}) => {

    return (  
        <>
            { role === "collaborator" ? 
                <Wrapper>
                    <WrapperCheckTask>
                    { status ? <CheckTask src={IconCompleteTask}/> : 
                        <CheckTask src={IconIncompleteTask}/> }
                    </WrapperCheckTask>
                    <TaskData> 
                        <SectionEditTask>
                            <WrapperCollaborator>
                                <Collaborator>{collaborator}</Collaborator>
                            </WrapperCollaborator>
                            <WrapperEditTask>
                                <ImgEditTask src={IconEdit}/>
                            </WrapperEditTask>
                        </SectionEditTask>
                        <WrapperExpiration>
                            <Icon src={IconClock}/>
                            <TxtIcon>{date}</TxtIcon>
                        </WrapperExpiration>
                        <TitleTask>{title}</TitleTask>
                        <TxtDescriptionTask>{description}</TxtDescriptionTask>
                    </TaskData>
                    <WrapperPriority>
                        <CloseTask src={IconCloseTask}/>
                        <Priority priorityLevel={priority} />
                    </WrapperPriority>
                </Wrapper> :
                <Wrapper style={{ paddingLeft: "10px" }} >
                    <TaskData> 
                        <SectionEditTask>
                            <WrapperCollaborator>
                                <Collaborator>{collaborator}</Collaborator>
                            </WrapperCollaborator> 
                        </SectionEditTask>
                        <WrapperExpiration>
                            <Icon src={IconClock}/>
                            <TxtIcon>{date}</TxtIcon>
                        </WrapperExpiration>
                        <TitleTask>{title}</TitleTask>
                        <TxtDescriptionTask>{description}</TxtDescriptionTask>
                    </TaskData>
                    <WrapperPriority>
                        <StatusTaskComplete statusTaskComplete={status} />
                    </WrapperPriority>
                </Wrapper>
            }
        </>
    );
}

export default Task;