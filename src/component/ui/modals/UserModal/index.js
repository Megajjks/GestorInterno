import React, { useContext, useState } from "react";
import { StoreContext } from "../../../context/StoreContext";
import { actions } from "../../../context/StoreContext/actions";
import Btn from "../../GeneralButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { WrapperLogo, Logo } from "./styled";
import { roles } from "../../../../helpers";
import api from "../../../../helpers/api";

const UserModal = ({ closeModalUser, closeModalClean }) => {
  const { state, dispatch } = useContext(StoreContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleupdateUser = (field, value) => {
    dispatch({ type: actions.updateUser, payload: { field, value } });
  };

  //Add new User
  const addUser = async () => {
    dispatch({ type: actions.addUser });
    try {
      const response = await api.post("/users", state.user);
      dispatch({ type: actions.addUserSuccess, payload: !state.reload });
    } catch {
      dispatch({
        type: actions.addUserError,
        payload: "Ocurrió un problema al registrar un nuevo usuario",
      });
    }
  };

  //Edit user
  const saveUser = async () => {
    dispatch({ type: actions.saveUpdateUser });
    try {
      const response = await api.put(`/users/${state.user.id}`, state.user);
      dispatch({ type: actions.saveUpdateUserSuccess, payload: !state.reload });
    } catch {
      dispatch({
        type: actions.saveUpdateUserError,
        payload: "Ocurrió un problema al actualizar un usuario",
      });
    }
  };

  return (
    <Dialog
      open={state.showModal}
      onClose={state.isEditModal ? closeModalClean : closeModalUser}
      fullWidth={true}
      maxWidth="sm"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" style={{ textAlign: "left" }}>
        {state.isEditModal ? "Editar Usuario" : "Agregar Usuario"}
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
            onChange={(e) => handleupdateUser(e.target.name, e.target.value)}
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
          onChange={(e) => handleupdateUser(e.target.name, e.target.value)}
        />
        <TextField
          type="text"
          label="Apellido(s)"
          color="secondary"
          fullWidth
          margin="dense"
          name="lastName"
          value={state.user.lastName}
          onChange={(e) => handleupdateUser(e.target.name, e.target.value)}
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
          onChange={(e) => handleupdateUser(e.target.name, e.target.value)}
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
          onChange={(e) => handleupdateUser(e.target.name, e.target.value)}
        />
        <TextField
          type={showPassword ? "text" : "password"}
          label="Contraseña"
          color="secondary"
          placeholder="Restablece la contraseña introduciendo una nueva contraseña"
          fullWidth
          value={state.user.password}
          margin="dense"
          name="password"
          onChange={(e) => handleupdateUser(e.target.name, e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="text"
          label="Telefono"
          color="secondary"
          fullWidth
          margin="dense"
          name="phone"
          value={state.user.phone}
          onChange={(e) => handleupdateUser(e.target.name, e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Btn
          onClick={closeModalClean}
          title="Cancelar"
          type="secundary"
          size="30%"
        />
        {state.isEditModal ? (
          <Btn onClick={saveUser} title="Guardar cambios" size="40%" />
        ) : (
          <Btn onClick={addUser} title="Agregar usuario" size="40%" />
        )}
      </DialogActions>
    </Dialog>
  );
};

export default UserModal;
