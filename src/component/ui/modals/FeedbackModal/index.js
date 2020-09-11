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
import { ButtonAccept } from "./styled";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const FeedbackModal = ({
  openModalFeedback,
  closeModalFeedback,
  optionFeedback,
}) => {
  const [commitmentFeedback, setCommitmentFeedback] = useState({
    titleFeedback: "",
    descriptionFeedback: "",
  });
  const updateCommitmentFeedback = (e) => {
    setCommitmentFeedback({
      ...commitmentFeedback,
      [e.target.name]: e.target.value,
    });
  };
  const history = useHistory();
  const [error, setError] = useState({
    status: false,
    message: "",
    typeMessage: ""
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError({
      ...error,
      status: false,
      typeMessage: ""
    });
  };
  const { titleFeedback, descriptionFeedback } = commitmentFeedback;

  function AlertError(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const successData = () => {
    closeModalFeedback();
    history.push("/panel/pool");
  }

  const fetchUpdateFeedback = async idCommitment => {
    try {
      let response = "";
      response = await api.put(
        `/commitmentsupdate/${idCommitment}`, {
          feedback: descriptionFeedback
        }
      );
      console.log(response);
      setError({
        status: true,
        message:
          "¡Excelente!, Su petición ha sido enviada exitosamente.", 
        typeMessage: "success"
      });
      setTimeout(successData, 3000);
    } catch (e) {
      setError({
        status: true,
        message:
          "Vaya, estamos teniendo problemas de conexión al enviar tus datos, intenta de nuevo", 
        typeMessage: "error"
      });
      console.log(e);
    }
  }

  const fetchUpdateState = async () => {
    try {
      let response = "";
      const idCommitment = history.location.state.id;
      if (optionFeedback === "aceptar") {
        response = await api.put(
          `/commitments/${idCommitment}/correcion`
        );
      } else {
        response = await api.put(
          `/commitments/${idCommitment}/declinado`
        );
      }
      console.log(response);
      if (response.status === 200) {
        fetchUpdateFeedback(idCommitment);
      } 
    } catch (e) {
      console.log(e);
    }
  };

  const validateFeedback = e => {
    e.preventDefault(); 
    if (
      commitmentFeedback.titleFeedback === "" ||
      commitmentFeedback.descriptionFeedback === ""
    ) {
      setError({
        status: true,
        message: "¡Ups!, parace que tienes campos sin rellenar.",
        typeMessage: "error"
      });
    } else {
      setError({
        status: false,
        message: "",
        typeMessage: ""
      });
      fetchUpdateState()
    }
  }

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
