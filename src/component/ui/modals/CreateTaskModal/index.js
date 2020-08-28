import React, { useContext } from "react";
import { CommitmentContext } from "../../../context/CommitmentContext";
import { actions } from "../../../context/CommitmentContext/actions";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { ButtonCreateTask, useStyles } from "./styled";
import { api } from "../../../../helpers/api";

const CreateTaskModal = ({ openNewTask, closeModalNewTask }) => {
  const { state, dispatch } = useContext(CommitmentContext);
  const id = JSON.parse(localStorage.getItem("login_data")).userId;
  const classes = useStyles();

  const handleupdateTask = (field, value) => {
    dispatch({ type: actions.updateFieldAddTask, payload: { field, value } });
  };

  const submitTask = (e) => {
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
        dispatch({ type: actions.addTaskSuccess, payload: !state.reload });
      };
      fetchTask();
    } catch (e) {
      dispatch({ type: actions.addTaskError, payload: "Ocurrió un error" });
    }
    closeModalNewTask();
  };

  return (
    <>
      <Dialog
        open={openNewTask}
        onClose={closeModalNewTask}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
          {"Crear Tarea"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={submitTask}>
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
            <ButtonCreateTask type="submit">Agregar Tarea</ButtonCreateTask>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModalNewTask} color="secondary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateTaskModal;
