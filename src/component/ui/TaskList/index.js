import React, { useState } from "react";
import axios from "axios";
import Task from "../Task";

const TaskList = () => {

    const [tasks, setTasks] = useState([])

    const TASKS_URL = "https://run.mocky.io/v3/a32789cd-ecc6-4a2f-993d-3d849415f946";

    const getTasks = async () => {
        const response = await axios.get(TASKS_URL)
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
                    collaborator={task.user.firstName + " " + task.user.lastName}
                    role={task.user.role}
                ></Task>
            ))}
        </>
    );
}
 
export default TaskList;