import React, { Fragment } from "react";
import Task from "../Task";

const TaskList = ({ tasks }) => {
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
          collaborator={task.collaborator}
          role={task.role}
        ></Task>
      ))}
    </Fragment>
  );
};

export default TaskList;
