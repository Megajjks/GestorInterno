import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Wrapper,
  Img,
  WrapperForm,
  Form,
  Title,
  BtnExtra,
  SignIn,
} from "./styled";
import GeneralButton from "../../ui/GeneralButton";
import TextField from "@material-ui/core/TextField";
import LoginImg from "../../../assets/img/imageLogin.jpg";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import api from "../../../helpers/api";

const GenericLogin = () => {
  const history = useHistory();
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const LOGIN_URL = "http://localhost:5000/login";

  const submitData = async (e) => {
    e.preventDefault();
    try {
      if (email.trim() === "" || password === "") {
        handleClickOpen();
        return;
      }
      const response = await api.get(`/users?email=${email}`);
      console.log(response);
      if (response.data.length === 0) {
        handleClickOpen();
        return;
      }
      if (response.data.role === "admin") {
        history.push("/dasboard_admin");
      } else {
        history.push("/dasboard");
      }
      const loginData = {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        first_name: response.data.first_name,
        role: response.data.role,
      };
      localStorage.setItem("login_data", JSON.stringify(loginData));
    } catch (error) {
      return console.log("Credentials are not valid");
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <Img src={LoginImg} />
      <WrapperForm>
        <BtnExtra>Regresar</BtnExtra>
        <Form onSubmit={submitData}>
          <Title>BIENVENIDO DE NUEVO</Title>
          <TextField
            type="email"
            name="email"
            label="EMAIL"
            color="secondary"
            fullWidth
            onChange={(e) => updateEmail(e.target.value)}
            value={email}
            style={{ marginTop: "10px" }}
          />
          <TextField
            type="password"
            name="password"
            label="CONTRASEÑA"
            fullWidth
            color="secondary"
            onChange={(e) => updatePassword(e.target.value)}
            value={password}
            style={{ marginTop: "10px", marginBottom: "20px" }}
          />
          <GeneralButton title="Login" />
        </Form>
        <SignIn>
          ¿Aun no tienes una cuenta?,{" "}
          <BtnExtra style={{ padding: "0" }}>Registrate</BtnExtra>
        </SignIn>
      </WrapperForm>
      <>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Los campos que has ingresado no son correctos, por favor
              verificalos y vuelve a intentarlo.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </Wrapper>
  );
};

export default GenericLogin;
