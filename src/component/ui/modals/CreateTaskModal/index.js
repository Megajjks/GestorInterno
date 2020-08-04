import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { ButtonCreateTask, useStyles } from "./styled";
import api from "../../../../helpers/api"

const CreateTaskModal = ({ openNewTask, closeModalNewTask }) => {
  const classes = useStyles();
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
  });
  const [error, setError] = useState(false);

  const updateState = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const { title, description, date } = task;

  const getCommitmentId = () => {
    const URLactual = window.location;
    const commitment = URLactual.pathname;
    const res = commitment.split("/");
    const id = res[2];
    return id;
  }

  const submitTask = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "" || date === "") {
      setError(true);
      return;
    }
    setError(false);
    setTask({
      ...task,
      "idCommitment": getCommitmentId()
    })
    try {
      const fetchTask = async () => {
        const response = await api.post("/tasks", {
          title: title,
          description: description,
          status: true,
          priority: "low",
          date: date
        })
      }
      fetchTask()
    } catch(e) {
      console.log(e)
    }
    setTask({
      title: "",
      description: "",
      date: "",
    });
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
              onChange={updateState}
              value={title}
            />
            <TextField
              type="text"
              label="Descripción"
              color="secondary"
              style={{ marginTop: "10px" }}
              fullWidth
              margin="dense"
              name="description"
              onChange={updateState}
              value={description}
            />
            <TextField
              id="date"
              label="Birthday"
              type="date"
              color="secondary"
              defaultValue="aaaa-mm-dd"
              name="date"
              onChange={updateState}
              value={date}
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
