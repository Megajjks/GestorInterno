import React, { useState, Fragment, useEffect, useContext } from "react";
import { CommitmentContext } from "../../context/CommitmentContext";
import { actions } from "../../context/CommitmentContext/actions";
import { useHistory } from "react-router-dom";
import Button from "../GeneralButton";
import TaskList from "../TaskList";
import CollaboratorCardList from "../CollaboratorCardList";
import Spinner from "../Spinner";
import Error from "../alerts/Error";
import WithoutTasks from "../alerts/WithoutTasks";
import {
  dataStatus,
  filterWithRol,
  rolName,
  matchUser,
} from "../../../helpers";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";

import AddIco from "../../../assets/img/add.svg";
import TaskIco from "../../../assets/img/gestion.svg";
import EyeIco from "../../../assets/img/eye.svg";
import StatusIco from "../../../assets/img/point.svg";
import ModalCreateTask from "../modals/CreateTaskModal";
import {
  Wrapper,
  WrapperTask,
  WrapperOpc,
  WrapperColaborators,
  BtnAddColaborator,
  BtnGroup,
  BtnSecundary,
  Options,
  MenuItems,
  CircleStatus,
} from "./styled";
import api from "../../../helpers/api";

const TracingCommitmentDetails = (props) => {
  const { state, dispatch } = useContext(CommitmentContext);
  const history = useHistory();
  const [openCreateTask, setOpenCreateTask] = useState(false);

  //HTTP REQUEST FUNCTION

  //get commitment and data to show
  useEffect(() => {
    const getCommitment = async () => {
      dispatch({ type: actions.getCommitment });
      try {
        const url = `/commitments/${history.location.state}`;
        const { data } = await api.get(url);
        dispatch({ type: actions.getCommitmentSuccess, payload: data });
      } catch (e) {
        dispatch({
          type: actions.getCommitmentError,
          payload: "Ocurrió un error en la petición",
        });
      }
    };

    const getListCollaborator = async () => {
      dispatch({ type: actions.getCollaboratorsList });
      try {
        const url = `/missingCollaborators/${history.location.state}`;
        const { data } = await api.get(url);
        dispatch({
          type: actions.getCollaboratorsListSuccess,
          payload: data,
        });
      } catch (e) {
        dispatch({
          type: actions.getCollaboratorsListError,
          payload: "Ocurrio un error",
        });
      }
    };
    getCommitment();
    getListCollaborator();
  }, [state.reload]);

  //get tasks
  useEffect(() => {
    const getTasks = async () => {
      dispatch({ type: actions.getTasksList });
      try {
        const { data } = await api.get("/tasks");
        dispatch({ type: actions.getTasksListSuccess, payload: data });
      } catch {
        dispatch({
          type: actions.getTasksListError,
          payload:
            "ha ocurrido un problema al buscar las tareas de seguimiento. Verifica si tienes conexión a internet y vuelve a intentar",
        });
      }
    };
    getTasks();
  }, [state.reload, state.reloadTasks]);

  //post to add colaborador in commitment
  const addCollaborator = () => {
    //function to add colaborator
    const postColaborator = async (id) => {
      let data = { userId: id, commitmentId: state.commitment.id };
      try {
        const response = await api.post("/collaborators/add", data);
      } catch (e) {
        console.log(e);
      }
    };
    //if list is avoid
    if (state.likelyCollaborator.length === 0) {
      handleWrapperAddColaborator();
      return;
    }
    //adding collaborator one by one
    Promise.all(
      state.likelyCollaborator.map(
        async (collaborator) => await postColaborator(collaborator.id)
      )
    )
      .then(() =>
        dispatch({
          type: actions.saveColaborators,
          payload: !state.reload,
        })
      )
      .catch(() =>
        dispatch({
          type: actions.errorColaborators,
          payload: "Ocurrio un error",
        })
      );
  };

  //put to commitment
  const changeStatus = async (status) => {
    //Put request that change the status of commitment
    dispatch({ type: actions.updateStatusCommitment });
    try {
      const url = `/commitments/${state.commitment.id}/${status}`;
      const response = await api.put(url);
      dispatch({
        type: actions.updateStatusCommitmentSuccess,
        payload: !state.reload,
      });
    } catch (e) {
      dispatch({
        type: actions.updateStatusCommitmentError,
        payload: "Ocurrio un error",
      });
    }
  };

  //functions add collaborator
  const handleWrapperAddColaborator = () => {
    dispatch({
      type: actions.wrapperAddCollaboratorOnOff,
      payload: !state.wrapperAddCollaborator,
    });
  };

  //Behavior of tasks

  //functions to open, close
  const showModalAddTask = () => {
    dispatch({ type: actions.showModalAddTask, payload: !state.showModalTask });
  };

  //functions to add task
  const addTask = () => {
    showModalAddTask();
  };

  //function to show details
  const showDetailCommitment = () => {
    history.push({
      pathname: `/panel/commitment_report/${state.commitment.id}`,
      state: { id: state.commitment.id, isDetail: true },
    });
  };

  //function to view and edit status
  const handleDropdownStatus = (event) => {
    dispatch({
      type: actions.dropDownStatusOpen,
      payload: event.currentTarget,
    });
  };

  const handleCloseDropdownStatus = () => {
    dispatch({ type: actions.dropDownStatusClose });
  };

  const handleNewColaborator = (item) => {
    dispatch({ type: actions.setColaborator, payload: item });
  };

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
    return (
      <TaskList
        tasks={state.tasks}
        isCollaborator={matchUser(state.commitment.collaborators)}
      />
    );
  };

  const renderView = () => {
    return (
      <Fragment>
        <h1> {state.commitment.organization} </h1>
        <Wrapper>
          <WrapperTask>
            {state.tasksLoading ? <Spinner /> : renderTasks()}
          </WrapperTask>
          <WrapperOpc>
            <Options>
              {/*this button (add task) will be hidden if  user_id not is not assigned how collaborator of commitment*/}
              {matchUser(state.commitment.collaborators) ? (
                <Button title="Nueva tarea" ico={TaskIco} onClick={addTask} />
              ) : null}

              <Button
                title="Detalles"
                type="secundary"
                ico={EyeIco}
                onClick={showDetailCommitment}
              />
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                title={dataStatus(state.commitment.status).value}
                type="status"
                color={dataStatus(state.commitment.status).background}
                ico={StatusIco}
                onClick={handleDropdownStatus}
              />
              <Menu
                id="simple-menu"
                anchorEl={state.dropdownStatus}
                keepMounted
                open={Boolean(state.dropdownStatus)}
                onClose={handleCloseDropdownStatus}
              >
                <MenuItems onClick={() => changeStatus("primer_contacto")}>
                  <CircleStatus
                    color={dataStatus("primer_contacto").background}
                  />
                  Primer Contacto
                </MenuItems>
                <MenuItems onClick={() => changeStatus("articulando")}>
                  <CircleStatus color={dataStatus("articulando").background} />
                  Articulando
                </MenuItems>
                <MenuItems onClick={() => changeStatus("cumplido")}>
                  <CircleStatus color={dataStatus("cumplido").background} />
                  Cumplido
                </MenuItems>
                {rolName() === "collaborator" ? null : (
                  <span>
                    <MenuItems onClick={() => changeStatus("validando")}>
                      <CircleStatus
                        color={dataStatus("validando").background}
                      />
                      Por validar
                    </MenuItems>
                    <MenuItems onClick={() => changeStatus("archivado")}>
                      <CircleStatus
                        color={dataStatus("archivado").background}
                      />
                      Archivado
                    </MenuItems>
                    <MenuItems onClick={() => changeStatus("correcion")}>
                      <CircleStatus
                        color={dataStatus("correcion").background}
                      />
                      En correcion
                    </MenuItems>
                    <MenuItems onClick={() => changeStatus("declinado")}>
                      <CircleStatus
                        color={dataStatus("declinado").background}
                      />
                      Rechazado
                    </MenuItems>
                  </span>
                )}
              </Menu>
            </Options>
            <WrapperColaborators>
              <CollaboratorCardList
                collaborators={state.commitment.collaborators}
              />
              {state.wrapperAddCollaborator ? (
                <WrapperColaborators>
                  <Autocomplete
                    onChange={(event, newValue) =>
                      handleNewColaborator(newValue)
                    }
                    style={{ width: "15em" }}
                    multiple
                    id="tags-standard"
                    options={state.listColaborators}
                    getOptionLabel={(option) =>
                      `${option.firstName} ${option.lastName}`
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        color="secondary"
                        label="Agregue colaboradores"
                      />
                    )}
                  />
                  <BtnGroup>
                    <BtnSecundary onClick={handleWrapperAddColaborator}>
                      Cancelar
                    </BtnSecundary>
                    <BtnSecundary primary onClick={addCollaborator}>
                      Guardar
                    </BtnSecundary>
                  </BtnGroup>
                </WrapperColaborators>
              ) : rolName() === "collaborator" ? null : (
                <BtnAddColaborator onClick={handleWrapperAddColaborator}>
                  <img src={AddIco} alt="add-ico" style={{ width: "18px" }} />
                  <BtnSecundary primary>Agregar colaborador</BtnSecundary>
                </BtnAddColaborator>
              )}
            </WrapperColaborators>
          </WrapperOpc>
        </Wrapper>
      </Fragment>
    );
  };

  const renderError = () => {
    return state.commitmentError ? <Error /> : renderView();
  };

  return (
    <Fragment>
      {state.commitmentLoading ? <Spinner /> : renderError()}
      <ModalCreateTask
        openNewTask={state.showModalTask}
        closeModalNewTask={showModalAddTask}
        isEdit={state.isEditModalTask}
      />
    </Fragment>
  );
};

export default TracingCommitmentDetails;
