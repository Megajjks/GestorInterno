import React, { Fragment, useContext, useEffect } from "react";
import { CommitmentContext } from "../../context/CommitmentContext";
import { actions } from "../../context/CommitmentContext/actions";
import { useHistory } from "react-router-dom";
import TaskList from "../../ui/TaskList";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import WithoutTasks from "../../ui/alerts/WithoutTasks";
import { WrapperBody } from "./styled";
import api from "../../../helpers/api";

const Tasks = () => {
  const { state, dispatch } = useContext(CommitmentContext);
  const organization = useHistory().location.state.organization;
  const commitmentId = useHistory().location.state.id;

  //get Tasks
  useEffect(() => {
    const getTasks = async () => {
      dispatch({ type: actions.getTasksList });
      try {
        const { data } = await api.get(`/tasks/commitment/${commitmentId}`);
        dispatch({ type: actions.getTasksListSuccess, payload: data });
      } catch {
        dispatch({
          type: actions.getTasksListError,
          payload: "Ocurrión un error al momento de consultar las tareas",
        });
      }
    };
    getTasks();
  }, []);

  const renderTasks = () => {
    if (state.tasksError) {
      return <Error content={state.tasksError} />;
    }
    if (state.tasks.length === 0) {
      return (
        <WithoutTasks
          title="¡Oh! aun no se a levantando una tarea de seguimiento"
          content="Puedes levantar una nueva tarea si eres un colaborador de este compromiso dando click en el botón de Nueva tarea para empezar a dar seguimiento a este proyecto"
        />
      );
    }
    return <TaskList tasks={state.tasks} isCollaborator={false} />;
  };

  return (
    <Fragment>
      <h1>{`Tareas de seguimiento en ${organization}`} </h1>
      <WrapperBody>
        {state.tasksLoading ? <Spinner /> : renderTasks()}
      </WrapperBody>
    </Fragment>
  );
};

export default Tasks;
