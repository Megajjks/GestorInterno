import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import api from "../../../../helpers/api";
import { rolName } from "../../../../helpers";
import { ButtonAccept } from "./styled";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const FeedbackModal = ({
  openModalFeedback,
  closeModalFeedback,
  optionFeedback,
  commitment,
}) => {
  const [commitmentFeedback, setCommitmentFeedback] = useState({
    titleFeedback: "",
    descriptionFeedback: "",
  });
  const [error, setError] = useState({
    status: false,
    message: "",
    typeMessage: "",
  });
  const { titleFeedback, descriptionFeedback } = commitmentFeedback;
  const history = useHistory();

  //Handle change of form
  const updateCommitmentFeedback = (e) => {
    setCommitmentFeedback({
      ...commitmentFeedback,
      [e.target.name]: e.target.value,
    });
  };

  //Close the modal
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError({
      ...error,
      status: false,
      typeMessage: "",
    });
  };

  //function that validates that a fields is not empty
  const validateFeedback = (e) => {
    e.preventDefault();
    if (
      commitmentFeedback.titleFeedback === "" ||
      commitmentFeedback.descriptionFeedback === ""
    ) {
      setError({
        status: true,
        message: "¡Ups!, parace que tienes campos sin rellenar.",
        typeMessage: "error",
      });
    } else {
      setError({
        status: false,
        message: "",
        typeMessage: "",
      });
      fetchUpdateState();
    }
  };

  //function to update the status
  const fetchUpdateState = async () => {
    try {
      let formdata = new FormData();
      let message = JSON.stringify({
        title: commitmentFeedback.titleFeedback,
        msg: commitmentFeedback.descriptionFeedback,
      });

      if (optionFeedback === "aceptar") {
        if (rolName() === "assistant") {
          //estructuring the formdata
          formdata.append("status", "prevalidado");
          formdata.append("feedback", "correccion");
          formdata.append("message", message);
          const response = await api.put(
            `/commitments/${commitment.id}`,
            formdata
          );
        } else {
          //estructuring the formdata
          formdata.append("status", "correccion");
          formdata.append("message", message);
          const response = await api.put(
            `/commitments/${commitment.id}`,
            formdata
          );
        }
      } else {
        if (rolName() === "assistant") {
          //estructuring the formdata
          formdata.append("status", "prevalidado");
          formdata.append("feedback", "declinado");
          formdata.append("message", message);
          const response = await api.put(
            `/commitments/${commitment.id}`,
            formdata
          );
        } else {
          //estructuring the formdata
          formdata.append("status", "declinado");
          formdata.append(
            "message",
            JSON.stringify({
              title: null,
              msg: null,
            })
          );
          const response = await api.put(
            `/commitments/${commitment.id}`,
            formdata
          );
        }
      }
      successData();
    } catch (e) {
      console.log(e);
      closeModalFeedback();
    }
  };

  function AlertError(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const successData = () => {
    closeModalFeedback();
    history.push("/panel/pool");
  };

  return (
    <>
      <Dialog
        open={openModalFeedback}
        onClose={closeModalFeedback}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Respuesta para Compromiso"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Escribe aquí el titulo del mensaje que se enviará
          </DialogContentText>
          <TextField
            type="text"
            name="titleFeedback"
            label="Titulo de Mensaje"
            color="secondary"
            fullWidth
            margin="dense"
            onChange={updateCommitmentFeedback}
            value={titleFeedback}
            style={{ marginTop: "10px" }}
          />
          <TextField
            type="text"
            name="descriptionFeedback"
            label="Descripción de Mensaje"
            color="secondary"
            fullWidth
            margin="dense"
            onChange={updateCommitmentFeedback}
            value={descriptionFeedback}
            style={{ marginTop: "10px" }}
          />
          <ButtonAccept onClick={validateFeedback}>Enviar</ButtonAccept>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModalFeedback} color="secondary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={error.status}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <AlertError onClose={handleClose} severity={error.typeMessage}>
          {error.message}
        </AlertError>
      </Snackbar>
    </>
  );
};

export default FeedbackModal;
