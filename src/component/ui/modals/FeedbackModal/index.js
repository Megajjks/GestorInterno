import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import api from "../../../../helpers/api";
import { ButtonAccept } from "./styled";

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

  const { titleFeedback, descriptionFeedback } = commitmentFeedback;

  const fetchUpdateState = async () => {
    const response = "";
    try {
      if (optionFeedback.option === "aceptar") {
        response = await api.put(
          `/commitments/${optionFeedback.idCommitment}/correcion`
        );
      } else {
        response = await api.put(
          `/commitments/${optionFeedback.idCommitment}/declinado`
        );
      }
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    closeModalFeedback();
  };

  return (
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
        <ButtonAccept onClick={fetchUpdateState}>Enviar</ButtonAccept>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModalFeedback} color="secondary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FeedbackModal;
