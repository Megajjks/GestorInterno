import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { WrapperLogo, Logo } from "./styled";

const EditCommitmentModal = ({ handleClose, open, dataForm, questions }) => {
  const [commitment, setCommitment] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    sector: "",
    city: "",
    state: "",
    position: "",
    email: "",
    phone: "",
    logo: "",
    img: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: "",
    q12: "",
  });

  const handleOnChange = (e) => {
    /* setCommitment({
      ...commitment,
      [e.target.name]: e.target.value,
    }); */
  };
  const putCommitment = () => {
    /* update data of commitment */
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
          <Logo src={dataForm.img} alt="logo" />
          <input
            accept="image/png, .jpeg, .jpg"
            id="contained-button-file"
            style={{ display: "none" }}
            multiple
            type="file"
            name="logo"
            onChange={handleOnChange}
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
          value={dataForm.firstName}
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
          value={dataForm.lastName}
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
          value={dataForm.organization}
          onChange={handleOnChange}
          label="Organización"
          color="secondary"
          fullWidth
          margin="dense"
          style={{ marginTop: "10px", marginBottom: "30px" }}
        />
      
        <InputLabel id="sector-select-label">Sector</InputLabel>
        <Select
          labelId="sector-select-label"
          id="sector-select"
          name="sector"
          value={dataForm.sector}
          onChange={handleOnChange}
          fullWidth
        >
          <MenuItem value="">-- Seleccione --</MenuItem>
          <MenuItem value="academia">Academia</MenuItem>
          <MenuItem value="sector_publico">Sector público</MenuItem>
          <MenuItem value="sector_privado">Sector privado</MenuItem>
          <MenuItem value="org_soc_civ">
            Organización de la sociedad civil
          </MenuItem>
          <MenuItem value="ciudadania">Ciudadanía</MenuItem>
        </Select>
        
        <TextField
          type="text"
          name="city"
          value={dataForm.city}
          onChange={handleOnChange}
          label="Ciudad"
          color="secondary"
          fullWidth
          margin="dense"
          style={{ marginTop: "10px", marginBottom: "30px" }}
        />
        <InputLabel id="state-select-label">Estado</InputLabel>
        <Select
          labelId="state-select-label"
          id="state-select"
          name="state"
          value={dataForm.state}
          onChange={handleOnChange}
          fullWidth
        >
          <MenuItem value="">-- Seleccione --</MenuItem>
          <MenuItem value="aguascalientes">Aguascalientes</MenuItem>
          <MenuItem value="baja_california">Baja California</MenuItem>
          <MenuItem value="baja_california_cur">Baja California Sur</MenuItem>
          <MenuItem value="campeche">Campeche</MenuItem>
          <MenuItem value="chiapas">Chiapas</MenuItem>
          <MenuItem value="chihuahua">Chihuahua</MenuItem>
          <MenuItem value="cdmx">Ciudad de México</MenuItem>
          <MenuItem value="coahuila">Coahuila</MenuItem>
          <MenuItem value="colima">Colima</MenuItem>
          <MenuItem value="durango">Durango</MenuItem>
          <MenuItem value="estado_de_méxico">Estado de México</MenuItem>
          <MenuItem value="guanajuato">Guanajuato</MenuItem>
          <MenuItem value="guerrero">Guerrero</MenuItem>
          <MenuItem value="hidalgo">Hidalgo</MenuItem>
          <MenuItem value="jalisco">Jalisco</MenuItem>
          <MenuItem value="michoacán">Michoacán</MenuItem>
          <MenuItem value="morelos">Morelos</MenuItem>
          <MenuItem value="nayarit">Nayarit</MenuItem>
          <MenuItem value="nuevo León">Nuevo León</MenuItem>
          <MenuItem value="oaxaca">Oaxaca</MenuItem>
          <MenuItem value="puebla">Puebla</MenuItem>
          <MenuItem value="querétaro">Querétaro</MenuItem>
          <MenuItem value="quintana_roo">Quintana Roo</MenuItem>
          <MenuItem value="san_luis_potosí">San Luis Potosí</MenuItem>
          <MenuItem value="sinaloa">Sinaloa</MenuItem>
          <MenuItem value="sonora">Sonora</MenuItem>
          <MenuItem value="tabasco">Tabasco</MenuItem>
          <MenuItem value="tamaulipas">Tamaulipas</MenuItem>
          <MenuItem value="tlaxcala">Tlaxcala</MenuItem>
          <MenuItem value="veracruz">Veracruz</MenuItem>
          <MenuItem value="yucatán">Yucatán</MenuItem>
          <MenuItem value="zacatecas">Zacatecas</MenuItem>
        </Select>
        <TextField
          type="text"
          name="position"
          value={dataForm.position}
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
          value={dataForm.email}
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
          value={dataForm.phone}
          onChange={handleOnChange}
          label="Telefono"
          color="secondary"
          fullWidth
          margin="dense"
          style={{ marginTop: "10px" }}
        />
        <TextField
          type="text"
          name="question1"
          value={questions.map((question) => (
            question.questionId === 1 ? question.answer : null
          ))}
          onChange={handleOnChange}
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
          name="question2"
          value={questions.map((question) => (
            question.questionId === 2 ? question.answer : null
          ))}
          onChange={handleOnChange}
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
          name="question3"
          value={questions.map((question) => (
            question.questionId === 3 ? question.answer : null
          ))}
          onChange={handleOnChange}
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
          name="question7"
          value={questions.map((question) => (
            question.questionId === 7 ? question.answer : null
          ))}
          onChange={handleOnChange}
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
          name="question5"
          value={questions.map((question) => (
            question.questionId === 5 ? question.answer : null
          ))}
          onChange={handleOnChange}
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
          name="question6"
          value={questions.map((question) => (
            question.questionId === 6 ? question.answer : null
          ))}
          onChange={handleOnChange}
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
          name="question4"
          value={questions.map((question) => (
            question.questionId === 4 ? question.answer : null
          ))}
          onChange={handleOnChange}
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
          name="question8"
          value={questions.map((question) => (
            question.questionId === 8 ? question.answer : null
          ))}
          onChange={handleOnChange}
          fullWidth
        >
          <MenuItem value="">-- Seleccione --</MenuItem>
          <MenuItem value="1">Vinculación con actores clave</MenuItem>
          <MenuItem value="2">
            Herramientas y metodologías para impulsar la innovación social y la
            agencia de cambio
          </MenuItem>
          <MenuItem value="3">Asesorías especializadas</MenuItem>
          <MenuItem value="4">Fondos para escalar la iniciativa</MenuItem>
          <MenuItem value="5">Difusión y comunicación</MenuItem>
          <MenuItem value="6">Otro</MenuItem>
        </Select>
        <TextField
          type="text"
          name="question9"
          value={questions.map((question) => (
            question.questionId === 9 ? question.answer : null
          ))}
          onChange={handleOnChange}
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
          name="question10"
          value={questions.map((question) => (
            question.questionId === 10 ? question.answer : null
          ))}
          onChange={handleOnChange}
          fullWidth
        >
          <MenuItem value="">-- Seleccione --</MenuItem>
          <MenuItem value="ashoka_staff">Ashoka Staff</MenuItem>
          <MenuItem value="aliados_de_difusion">Aliados de Difusión</MenuItem>
          <MenuItem value="facebook">Facebook</MenuItem>
          <MenuItem value="instagram">Instagram</MenuItem>
          <MenuItem value="twitter">Twitter</MenuItem>
          <MenuItem value="linkedin">LinkedIn</MenuItem>
          <MenuItem value="Sesion_de_compromisos">
            Sesión de Compromisos
          </MenuItem>
          <MenuItem value="conector_ashoka">Conector Ashoka</MenuItem>
          <MenuItem value="embajador_ashoka">Embajador Ashoka</MenuItem>
          <MenuItem value="sitio_web">Sitio Web Ashoka</MenuItem>
          <MenuItem value="otro">otro</MenuItem>
        </Select>
        <TextField
          type="text"
          name="question11"
          value={questions.map((question) => (
            question.questionId === 11 ? question.answer : null
          ))}
          onChange={handleOnChange}
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
          value={questions.map((question) => (
            question.questionId === 12 ? question.answer : null
          ))}
          onChange={handleOnChange}
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
        <Button onClick={handleClose} variant="outlined">
          Cancelar
        </Button>
        <Button onClick={putCommitment} variant="contained" color="secondary">
          Actualizar compromiso
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditCommitmentModal;
