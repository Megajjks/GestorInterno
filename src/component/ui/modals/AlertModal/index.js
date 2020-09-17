import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const AlertModal = ({ title, message, handleClose, open, callback }) => {
  const handleButtonAcept = (status) => {
    callback();
    handleClose(status);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)} color="primary">
          cancelar
        </Button>
        <Button onClick={() => handleButtonAcept(false)} color="primary">
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertModal;
