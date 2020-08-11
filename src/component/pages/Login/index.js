import React, { useState, useReducer } from "react";
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

import { reducer } from "./reducer";
import { initialState } from "./constants";
import { actions } from "./actions";

const GenericLogin = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const submitData = async (e) => {
    e.preventDefault();
    dispatch({ type: actions.fetchLogin });
    try {
      const { data } = await api.post(`/login`, state.user);
      if (!data.accessToken) {
        dispatch({
          type: actions.fetchLoginError,
          payload: "Crendenciales inválidas",
        });
      } else {
        dispatch({ type: actions.fetchLoginSuccess });
        const loginData = {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          firstName: data.first_name,
          role: data.role,
        };
        localStorage.clear();
        localStorage.setItem("login_data", JSON.stringify(loginData));
        history.push("/dashboard");
      }
    } catch (error) {
      dispatch({
        type: actions.fetchLoginError,
        payload: "Crendenciales inválidas",
      });
    }

    /*   try {
      if (email.trim() === "" || password === "") {
        handleClickOpen();
        return;
      }
      const response = await api.post(`/login`, state.user);
      console.log(response);
      if (!response.data.accessToken) {
        handleClickOpen();
        return;
      } else {
        //save in localStorage
        const loginData = {
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
          firstName: response.data.first_name,
          role: response.data.role,
        };
        localStorage.setItem("login_data", JSON.stringify(loginData));
        history.push("/dashboard");
      }
    } catch (error) {
      return console.log("Credentials are not valid");
    }*/
  };

  const handleClose = () => {
    dispatch({ type: actions.toggleModal });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    dispatch({ type: actions.setUser, name, payload: value });
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
            onChange={handleChange}
            value={state.user.email}
            style={{ marginTop: "10px" }}
          />
          <TextField
            type="password"
            name="password"
            label="CONTRASEÑA"
            fullWidth
            color="secondary"
            onChange={handleChange}
            value={state.user.password}
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
          open={state.open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {state.loginError
                ? state.loginError
                : "Los campos que has ingresado no son correctos, por favorverificalos y vuelve a intentarlo."}
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
