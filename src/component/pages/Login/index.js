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
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
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
  const [showPassword, setShowPassword] = useState(false);

  const submitData = async (e) => {
    e.preventDefault();
    dispatch({ type: actions.fetchLogin });
    try {
      //when the server response is a 200
      const { data } = await api.post(`/login`, state.user);
      dispatch({ type: actions.fetchLoginSuccess });
      const loginData = {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        firstName: data.firstName,
        userId: data.userId,
        role: data.role,
      };
      localStorage.clear();
      localStorage.setItem("login_data", JSON.stringify(loginData));
      history.push(`/panel/dashboard`);
    } catch (error) {
      //when the server response is different than a 200
      dispatch({
        type: actions.fetchLoginError,
        payload: "Crendenciales inválidas",
      });
    }
  };

  const handleClose = () => {
    dispatch({ type: actions.toggleModal });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    dispatch({ type: actions.setUser, name, payload: value });
  };

  //redirecto to landingPage
  const goHome = () => {
    window.location.href = "https://millonesdeagentesdecambio.org/";
  };

  return (
    <Wrapper>
      <Img src={LoginImg} />
      <WrapperForm>
        <BtnExtra onClick={goHome}>Regresar</BtnExtra>
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
            type={showPassword ? "text" : "password"}
            name="password"
            label="CONTRASEÑA"
            fullWidth
            color="secondary"
            onChange={handleChange}
            value={state.user.password}
            style={{ marginTop: "10px", marginBottom: "20px" }}
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
          <GeneralButton
            title="Login"
            type="primary-loader"
            loader={state.loginLoading}
          />
        </Form>
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
