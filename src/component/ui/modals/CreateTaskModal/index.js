import React, { useContext, Fragment } from "react";
import { CommitmentContext } from "../../../context/CommitmentContext";
import { actions } from "../../../context/CommitmentContext/actions";

import Button from "../../GeneralButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styled";
import api from "../../../../helpers/api";

const CreateTaskModal = ({ openNewTask, closeModalNewTask, isEdit }) => {
  const { state, dispatch } = useContext(CommitmentContext);
  const id = JSON.parse(localStorage.getItem("login_data")).userId;
  const classes = useStyles();

  const handleupdateTask = (field, value) => {
    dispatch({ type: actions.updateFieldAddTask, payload: { field, value } });
  };

  const addTask = (e) => {
    e.preventDefault();
    if (
      state.newTask.title.trim() === "" ||
      state.newTask.description.trim() === "" ||
      state.newTask.date === ""
    ) {
      dispatch({
        type: actions.addTaskError,
        payload: "¡Ops!, no tan rapido, has olvidado rellenar unos campos",
      });
      return;
    }
    try {
      dispatch({ type: actions.addTask });
      const fetchTask = async () => {
        const response = await api.post("/tasks", {
          title: state.newTask.title,
          description: state.newTask.description,
          status: true,
          priority: "low",
          date: state.newTask.date,
          collaboratorId: id,
        });
        dispatch({ type: actions.addTaskSuccess, payload: !state.reloadTasks });
      };
      fetchTask();
    } catch (e) {
      dispatch({ type: actions.addTaskError, payload: "Ocurrió un error" });
    }
  };

  //save data after edit the task
  const saveTask = async () => {
    //request to save change of task
    try {
      const response = await api.put(
        `/tasks/${state.newTask.id}`,
        state.newTask
      );
      dispatch({
        type: actions.updateTaskSuccess,
        payload: !state.reloadTasks,
      });
    } catch {
      dispatch({
        type: actions.updateTaskError,
        payload: "Ocurrió un error al momento de actulizar la tarea",
      });
    }
  };

  //close task and clean data when modal is edit Task
  const closeModalEditTask = () => {
    dispatch({ type: actions.closeModalEditTask, payload: false });
  };

  return (
    <Fragment>
      <Dialog
        open={openNewTask}
        onClose={isEdit ? closeModalEditTask : closeModalNewTask}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ textAlign: "left" }}>
          {"Crear Tarea"}
        </DialogTitle>
        <DialogContent>
          <form>
            <TextField
              type="text"
              label="Título"
              color="secondary"
              fullWidth
              margin="dense"
              name="title"
              onChange={(e) => handleupdateTask(e.target.name, e.target.value)}
              value={state.newTask.title}
            />
            <TextField
              type="text"
              label="Descripción"
              multiline
              rowsMax={10}
              color="secondary"
              style={{ marginTop: "10px" }}
              fullWidth
              margin="dense"
              name="description"
              onChange={(e) => handleupdateTask(e.target.name, e.target.value)}
              value={state.newTask.description}
            />
            <TextField
              id="date"
              label="Fecha"
              type="date"
              color="secondary"
              defaultValue="aaaa-mm-dd"
              name="date"
              onChange={(e) => handleupdateTask(e.target.name, e.target.value)}
              value={state.newTask.date}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ marginLeft: "0", marginTop: "20px" }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            title="Cancelar"
            onClick={isEdit ? closeModalEditTask : closeModalNewTask}
            type="secundary"
            size="30%"
          />
          {isEdit ? (
            <Button title="Guardar Tarea" onClick={saveTask} size="40%" />
          ) : (
            <Button title="Agregar Tarea" onClick={addTask} size="40%" />
          )}
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default CreateTaskModal;
