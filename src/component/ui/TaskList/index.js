import React, { Fragment, useContext } from "react";
import Task from "../Task";
import { CommitmentContext } from "../../context/CommitmentContext";
import { actions } from "../../context/CommitmentContext/actions";
import { changeStatus } from "../../../helpers";
import api from "../../../helpers/api";

const TaskList = ({ tasks, isCollaborator }) => {
  const { state, dispatch } = useContext(CommitmentContext);

  //function to change the status a task
  const changeStatusTask = async (task) => {
    console.log(`estoy en la task ${task.id}`);
    //request to change the status a task
    try {
      const response = await api.put(`/tasks/${task.id}`, {
        ...task,
        status: changeStatus(task.status),
      });
      dispatch({
        type: actions.updateTaskSuccess,
        payload: !state.reloadTasks,
      });
    } catch {
      dispatch({
        type: actions.updateTaskError,
        payload:
          "Ocurrio algo inesperado al momento de cambiar el status, intentalo de nuevo",
      });
    }
  };

  //function to deleted a task
  const removeTask = (id) => {
    console.log(`estoy eleminando la task ${id}`);
    //request to remove a task
  };

  //function to edit a task
  const editTask = (task) => {
    dispatch({
      type: actions.showModalEditTask,
      payload: { task: task, isShow: !state.showModalTask },
    });
  };

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
          changeStatusTask={() => changeStatusTask(task)}
          removeTask={() => removeTask(task.id)}
          editTask={() => editTask(task)}
        ></Task>
      ))}
    </Fragment>
  );
};

export default TaskList;
