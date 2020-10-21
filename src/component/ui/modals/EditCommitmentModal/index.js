import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Btn from "../../GeneralButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { WrapperLogo, Logo } from "./styled";
import api from "../../../../helpers/api";

import {
  states,
  sector,
  commitmentImpact,
  socialNetworks,
  area,
} from "../../../../helpers";

const EditCommitmentModal = ({ handleClose, open, dataForm }) => {
  const [data, setData] = useState(dataForm);
  const [imgFile, setImgFile] = useState({ name: null });
  const [isLoader, setIsLoader] = useState(false);
  const history = useHistory();
  const [dataUpdate, setDataUpdate] = useState(null);

  useEffect(() => {
    setData(dataForm);
  }, [dataForm]);

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setDataUpdate({
      ...dataUpdate,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnChangeImg = (e) => {
    setImgFile(e.target.files[0]);
    setData({
      ...data,
      [e.target.name]: e.target.files[0].name,
    });
    setDataUpdate({
      ...dataUpdate,
      [e.target.name]: e.target.files[0].name,
    });
  };

  const contestar = (e) => {
    let { name, value } = e.target;

    let newAnswers = data.answers;
    newAnswers.splice(name, 1, { answer: value });
    setData({
      ...data,
      answers: newAnswers,
    });
  };

  const putCommitment = async () => {
    setIsLoader(true);
    try {
      //estructuring the formdata
      let formdata = new FormData();
      //We make sure the image is not lost
      if (imgFile.name !== null) {
        formdata.append("img", imgFile);
      }

      formdata.append("firstName", data.firstName);
      formdata.append("lastName", data.lastName);
      formdata.append("organization", data.organization);
      formdata.append("area", data.area);
      formdata.append("categoryId", data.categoryId);
      formdata.append("city", data.city);
      formdata.append("description", data.description);
      formdata.append("email", data.email);
      formdata.append("phone", data.phone);
      formdata.append("position", data.position);
      formdata.append("sector", data.sector);
      formdata.append("state", data.state);

      const response = await api.put(`/commitments/${data.id}`, formdata);
      setIsLoader(false);
      window.location.reload();
    } catch (e) {
      setIsLoader(false);
      console.log(`Request failed: ${e}`);
    }
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="sm"
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">Editar compromiso</DialogTitle>
      <DialogContent>
        <WrapperLogo>
          <Logo
            src={`https://api.ashoka.hackademy.mx/${dataForm.img}`}
            alt="img"
          />
          <input
            accept="image/png, .jpeg, .jpg"
            id="contained-button-file"
            style={{ display: "none" }}
            multiple
            type="file"
            name="img"
            onChange={handleOnChangeImg}
          />
          <label htmlFor="contained-button-file">
            <Button variant="outlined" component="span">
              Actulizar logo
            </Button>
          </label>
        </WrapperLogo>
        <TextField
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleOnChange}
          label="Nombre(s)"
          color="secondary"
          fullWidth
          margin="dense"
          style={{ marginTop: "10px" }}
        />
        <TextField
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleOnChange}
          label="Apellido(s)"
          color="secondary"
          fullWidth
          margin="dense"
          style={{ marginTop: "10px" }}
        />
        <TextField
          type="text"
          name="organization"
          value={data.organization}
          onChange={handleOnChange}
          label="Organización"
          color="secondary"
          fullWidth
          margin="dense"
          style={{ marginTop: "10px", marginBottom: "15px" }}
        />

        <InputLabel id="sector-select-label">Sector</InputLabel>
        <Select
          labelId="sector-select-label"
          id="sector-select"
          name="sector"
          value={data.sector}
          onChange={handleOnChange}
          fullWidth
        >
          <MenuItem value="">-- Seleccione --</MenuItem>
          {sector.map((item, idx) => {
            return (
              <MenuItem value={item} key={idx}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
        <InputLabel style={{ marginTop: "15px" }} id="sector-select-label">
          Área
        </InputLabel>
        <Select
          labelId="area-select-label"
          id="area-select"
          name="area"
          value={data.area}
          onChange={handleOnChange}
          fullWidth
        >
          <MenuItem value="">-- Seleccione --</MenuItem>
          {area.map((item, idx) => {
            return (
              <MenuItem value={item} key={idx}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
        <TextField
          type="text"
          name="city"
          value={data.city}
          onChange={handleOnChange}
          label="Ciudad"
          color="secondary"
          fullWidth
          margin="dense"
          style={{ marginTop: "10px", marginBottom: "15px" }}
        />
        <InputLabel id="state-select-label">Estado</InputLabel>
        <Select
          labelId="state-select-label"
          id="state-select"
          name="state"
          value={data.state}
          onChange={handleOnChange}
          fullWidth
        >
          <MenuItem value="">--Seleccione--</MenuItem>
          {states.map((item, idx) => {
            return (
              <MenuItem value={item} key={idx}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
        <TextField
          type="text"
          name="position"
          value={data.position}
          onChange={handleOnChange}
          label="Posición"
          color="secondary"
          fullWidth
          margin="dense"
          style={{ marginTop: "10px" }}
        />
        <TextField
          type="text"
          name="email"
          value={data.email}
          onChange={handleOnChange}
          label="Correo electronico"
          color="secondary"
          fullWidth
          margin="dense"
          style={{ marginTop: "10px" }}
        />
        <TextField
          type="text"
          name="phone"
          value={data.phone}
          onChange={handleOnChange}
          label="Telefono"
          color="secondary"
          fullWidth
          margin="dense"
          style={{ marginTop: "10px" }}
        />
        <TextField
          type="text"
          name={0}
          value={data.answers ? data.answers[0].answer : ""}
          onChange={contestar}
          label="Breve descripción de tu proyecto/iniciativa/emprendimiento"
          color="secondary"
          fullWidth
          multiline
          rowsMax={5}
          margin="dense"
          style={{ marginTop: "10px" }}
        />
        <TextField
          type="text"
          name={1}
          value={data.answers ? data.answers[1].answer : ""}
          onChange={contestar}
          label="Redes sociales de tu proyecto/iniciativa/emprendimiento"
          color="secondary"
          fullWidth
          multiline
          rowsMax={5}
          margin="dense"
          style={{ marginTop: "10px" }}
        />
        <TextField
          type="text"
          name={2}
          value={data.answers ? data.answers[2].answer : ""}
          onChange={contestar}
          label="¿Qué organizaciones o personas se comprometen?"
          color="secondary"
          fullWidth
          multiline
          rowsMax={5}
          margin="dense"
          style={{ marginTop: "10px" }}
        />
        <TextField
          type="text"
          name={6}
          value={data.answers ? data.answers[6].answer : ""}
          onChange={contestar}
          label="¿Cuántos Agentes de Cambio impactarás con este compromiso?"
          color="secondary"
          fullWidth
          multiline
          rowsMax={5}
          margin="dense"
          style={{ marginTop: "10px" }}
        />
        <TextField
          type="text"
          name={4}
          value={data.answers ? data.answers[4].answer : ""}
          onChange={contestar}
          label="¿En qué periodo de tiempo se va a realizar el compromiso?"
          color="secondary"
          fullWidth
          multiline
          rowsMax={5}
          margin="dense"
          style={{ marginTop: "10px" }}
        />
        <TextField
          type="text"
          name={5}
          value={data.answers ? data.answers[5].answer : ""}
          onChange={contestar}
          label="¿cómo el impacto esperado contribuye a los demás actores?"
          color="secondary"
          fullWidth
          multiline
          rowsMax={5}
          margin="dense"
          style={{ marginTop: "10px" }}
        />
        <TextField
          type="text"
          name={3}
          value={data.answers ? data.answers[3].answer : ""}
          onChange={contestar}
          label="¿Qué acción se va a implementar?"
          color="secondary"
          fullWidth
          multiline
          rowsMax={5}
          margin="dense"
          style={{ marginTop: "10px", marginBottom: "30px" }}
        />
        <InputLabel id="q8-select-label">
          ¿De qué manera Ashoka y su red pueden ayudarte a escalar el impacto de
          tu compromiso?
        </InputLabel>
        <Select
          labelId="q8-select-label"
          id="q8-select"
          name={7}
          value={data.answers ? data.answers[7].answer : ""}
          onChange={contestar}
          fullWidth
        >
          <MenuItem value="">-- Seleccione --</MenuItem>
          {commitmentImpact.map((item, idx) => {
            return (
              <MenuItem value={item} key={idx}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
        <TextField
          type="text"
          name={8}
          value={data.answers ? data.answers[8].answer : ""}
          onChange={contestar}
          label="En caso de tener una necesidad distinta a estos, favor de
              especificarlo a continuación:"
          color="secondary"
          fullWidth
          multiline
          rowsMax={5}
          margin="dense"
          style={{ marginTop: "10px", marginBottom: "30px" }}
        />
        <InputLabel id="q10-select-label">
          ¿Cómo te enteraste de #MillonesdeAgentesdeCambio?
        </InputLabel>
        <Select
          labelId="q10-select-label"
          id="q10-select"
          name={9}
          value={data.answers ? data.answers[9].answer : ""}
          onChange={contestar}
          fullWidth
        >
          <MenuItem value="">-- Seleccione --</MenuItem>
          {socialNetworks.map((item, idx) => {
            return (
              <MenuItem value={item} key={idx}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
        <TextField
          type="text"
          name={10}
          value={data.answers ? data.answers[10].answer : ""}
          onChange={contestar}
          label="En caso de colocar otro o si quieres especificar, favor de
              especificarlo a continuación"
          color="secondary"
          fullWidth
          multiline
          rowsMax={5}
          margin="dense"
          style={{ marginTop: "10px" }}
        />
        <TextField
          type="text"
          name="question12"
          name={11}
          value={data.answers ? data.answers[11].answer : ""}
          onChange={contestar}
          label="Comentario o Duda Adicional"
          color="secondary"
          fullWidth
          multiline
          rowsMax={5}
          margin="dense"
          style={{ marginTop: "10px" }}
        />
      </DialogContent>
      <DialogActions>
        <Btn
          onClick={handleClose}
          title="Cancelar"
          type="secundary"
          size="30%"
        />
        <Btn
          onClick={putCommitment}
          title="Actualizar datos"
          size="40%"
          type="primary-loader"
          loader={isLoader}
        />
      </DialogActions>
    </Dialog>
  );
};

export default EditCommitmentModal;
