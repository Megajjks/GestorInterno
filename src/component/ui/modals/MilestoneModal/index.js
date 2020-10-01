import React, { useContext, Fragment } from "react";
import { useHistory } from "react-router-dom";
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

const MilestoneModal = (isEdit) => {
  const { state, dispatch } = useContext(CommitmentContext);
  const history = useHistory();
  const classes = useStyles();

  //handle to change any input of modal
  const handleUpdateMilestone = (field, value) => {
    dispatch({ type: actions.updateFieldMilestone, payload: { field, value } });
  };

  //add new milestone
  const addMilestone = async (e) => {
    e.preventDefault();
    //validate if field is empty
    if (
      state.milestone.title.trim() === "" ||
      state.milestone.description.trim() === "" ||
      state.milestone.date === ""
    ) {
      dispatch({
        type: actions.addMilestoneError,
        payload: "¡Ops!, no tan rapido, has olvidado rellenar unos campos",
      });
      return;
    }
    //request to send a new milestone
    try {
      const response = await api.post("/milestones", {
        ...state.milestone,
        commitmentId: history.location.state.id,
      });
      dispatch({
        type: actions.addMilestoneSuccess,
        payload: !state.reloadMilestones,
      });
    } catch {
      dispatch({
        type: actions.addMilestoneError,
        payload: "Ocurrió un error al momento de agregar un logro",
      });
    }
  };

  //save data after edit the milestone
  const saveMilestone = async () => {
    try {
      const response = await api.put(
        `/milestone/${state.milestone.id}`,
        state.milestone
      );
      dispatch({
        type: actions.updateMilestoneSuccess,
        payload: !state.reloadMilestones,
      });
    } catch {
      dispatch({
        type: actions.updateMilestoneError,
        payload: "Ocurrió un error al momento de actualizar un logro",
      });
    }
  };

  //close milestone and clean data when modal is edit milestone
  const closeModalCleanMilestone = () => {
    dispatch({ type: actions.closeModalEditMilestone, payload: false });
  };
  //close milestone keep data
  const closeModalMilestone = () => {
    dispatch({
      type: actions.showModalAddMilestone,
      payload: !state.showModalMilestone,
    });
  };

  return (
    <Fragment>
      <Dialog
        open={state.showModalMilestone}
        onClose={
          state.isEditModalMilestone
            ? closeModalCleanMilestone
            : closeModalMilestone
        }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ textAlign: "left" }}>
          {state.isEditModalMilestone ? "Editar logro" : "Crear logro"}
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
              onChange={(e) =>
                handleUpdateMilestone(e.target.name, e.target.value)
              }
              value={state.milestone.title}
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
              onChange={(e) =>
                handleUpdateMilestone(e.target.name, e.target.value)
              }
              value={state.milestone.description}
            />
            <TextField
              id="date"
              label="Fecha"
              type="date"
              color="secondary"
              defaultValue="aaaa-mm-dd"
              name="date"
              onChange={(e) =>
                handleUpdateMilestone(e.target.name, e.target.value)
              }
              value={state.milestone.date}
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
            onClick={closeModalCleanMilestone}
            type="secundary"
            size="30%"
          />
          {state.isEditModalMilestone ? (
            <Button title="Guardar Logro" onClick={saveMilestone} size="40%" />
          ) : (
            <Button title="Agregar Logro" onClick={addMilestone} size="40%" />
          )}
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default MilestoneModal;
