import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Btn from "../../GeneralButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import api from "../../../../helpers/api";
import { rolName } from "../../../../helpers";
import Alert from "@material-ui/lab/Alert";

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
  const [isLoading, setIsLoading] = useState(false);
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
  const closeModal = () => {
    closeModalFeedback();
    setError({
      ...error,
      status: false,
      message: "",
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
    setIsLoading(true);
    try {
      let formdata = new FormData();
      let message = JSON.stringify({
        title: commitmentFeedback.titleFeedback,
        msg: commitmentFeedback.descriptionFeedback,
      });

      //Clear data error
      setError({
        status: false,
        message: "",
        typeMessage: "",
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
      setIsLoading(false);
      successData();
    } catch (e) {
      setIsLoading(false);
      console.log(e);
      closeModalFeedback();
    }
  };

  const successData = () => {
    closeModalFeedback();
    //Clear error
    setError({
      status: false,
      message: "",
      typeMessage: "",
    });
    //Go back
    history.push("/panel/pool");
  };

  return (
    <>
      <Dialog
        open={openModalFeedback}
        onClose={closeModal}
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
          {error.message && <Alert severity="error">{error.message}</Alert>}
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
        </DialogContent>
        <DialogActions>
          <Btn
            onClick={closeModal}
            title="Cancelar"
            type="secundary"
            size="30%"
          />
          <Btn
            onClick={validateFeedback}
            title="Enviar"
            size="40%"
            type="primary-loader"
            loader={isLoading}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FeedbackModal;
