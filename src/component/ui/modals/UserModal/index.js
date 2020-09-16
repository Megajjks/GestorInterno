import React, { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";
import { actions } from "../../../context/StoreContext/actions";
import Btn from "../../GeneralButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { WrapperLogo, Logo } from "./styled";
import { roles } from "../../../../helpers";
import api from "../../../../helpers/api";

const UserModal = ({ closeModalUser }) => {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <Dialog
      open={state.showModal}
      onClose={closeModalUser}
      fullWidth={true}
      maxWidth="sm"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" style={{ textAlign: "left" }}>
        {"Crear Tarea"}
      </DialogTitle>
      <DialogContent style={{ margin: "0 1em" }}>
        <WrapperLogo>
          <Logo src={state.user.image} alt="avatar" />
          <input
            accept="image/png, .jpeg, .jpg"
            id="contained-button-file"
            style={{ display: "none" }}
            multiple
            type="file"
            name="image"
          />
          <label htmlFor="contained-button-file">
            <Button variant="outlined" component="span">
              Actulizar logo
            </Button>
          </label>
        </WrapperLogo>
        <TextField
          type="text"
          label="Nombre(s)"
          color="secondary"
          fullWidth
          margin="dense"
          name="firstName"
          value={state.user.firstName}
        />
        <TextField
          type="text"
          label="Apellido(s)"
          color="secondary"
          fullWidth
          margin="dense"
          name="lastName"
          value={state.user.lastName}
          style={{ marginBottom: "1.5em" }}
        />
        <InputLabel id="select-rol">Rol</InputLabel>
        <Select
          labelId="select-rol"
          id="select"
          value={state.user.roleId}
          fullWidth
          color="secondary"
          margin="dense"
          name="roleId"
        >
          {roles.map((rol, idx) => {
            return (
              <MenuItem value={rol.value} key={idx}>
                {rol.tag}
              </MenuItem>
            );
          })}
        </Select>
        <TextField
          type="email"
          label="Email"
          color="secondary"
          fullWidth
          margin="dense"
          name="email"
          value={state.user.email}
        />
        <TextField
          type="text"
          label="Contraseña"
          color="secondary"
          fullWidth
          margin="dense"
          name="password"
          value={state.user.password}
        />
        <TextField
          type="text"
          label="Telefono"
          color="secondary"
          fullWidth
          margin="dense"
          name="phone"
          value={state.user.phone}
        />
      </DialogContent>
      <DialogActions>
        <Btn
          onClick={closeModalUser}
          title="Cerrar"
          type="secundary"
          size="30%"
        />
        <Btn title="Agregar usuario" size="40%" />
      </DialogActions>
    </Dialog>
  );
};

export default UserModal;
