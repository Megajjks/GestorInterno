import React, { useState } from "react";
import Task from "../Task";
import api from "../../../helpers/api";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const getCommitmentId = () => {
    const URLactual = window.location;
    const commitment = URLactual.pathname;
    const res = commitment.split("/");
    const id = res[2];
    return id;
  };

  const getTasks = async () => {
    /* const response = await api.get(`https://5f22f3000e9f660016d88abe.mockapi.io/api/v1/tasks?idCommitment=${getCommitmentId()}`);
    setTasks(response.data); */
  };

  getTasks();

  return (
    <>
      {tasks.map((task) => (
        <Task
          title={task.title}
          description={task.description}
          status={task.status}
          priority={task.priority}
          date={task.date}
          collaborator={task.collaborator}
          role={task.role}
        ></Task>
      ))}
    </>
  );
};

export default TaskList;
