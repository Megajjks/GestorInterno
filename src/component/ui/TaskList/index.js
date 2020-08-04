import React, { useState } from "react";
import Task from "../Task";
import api from "../../../helpers/api"

const TaskList = () => {

    const [tasks, setTasks] = useState([])

    const getCommitmentId = () => {
        const URLactual = window.location;
        const commitment = URLactual.pathname;
        const res = commitment.split("/");
        const id = res[2];
        return id;
      }

    const getTasks = async () => {
        const response = await api.get(`/tasks?idCommitment=${getCommitmentId()}`)
        setTasks(response.data)
    }

    getTasks()

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
}
 
export default TaskList;