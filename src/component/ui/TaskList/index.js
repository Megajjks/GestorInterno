import React, { Fragment } from "react";
import Task from "../Task";

const TaskList = ({ tasks, isCollaborator }) => {
  return (
    <Fragment>
      {tasks.map((task, idx) => (
        <Task
          key={idx}
          title={task.title}
          description={task.description}
          status={task.status}
          priority={task.priority}
          date={task.date}
          user={task.user}
          isCollaborator={isCollaborator}
        ></Task>
      ))}
    </Fragment>
  );
};

export default TaskList;
