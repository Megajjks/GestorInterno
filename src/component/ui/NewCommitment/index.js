import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import {
  WrapperContainer,
  Title,
  Information,
  Url,
  Form,
  WrapperField,
  Field,
  Label,
  Input,
  InputRadio,
  LabelFile,
  WrapperInputRadio,
  Select,
  TextArea,
  Btn,
  TxtRequired,
} from "./styled";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { api } from "../../../helpers/api";

const NewCommitment = () => {
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
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
    question11: "",
    question12: "",
    sendEmails: false,
    agree: false,
  });

  const history = useHistory();

  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setError({
      ...error,
      status: false,
    });
  };

  const handleOnChange = (e) => {
    setCommitment({
      ...commitment,
      [e.target.name]: e.target.value,
    });
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const validateData = () => {
    if (
      commitment.firstName === "" ||
      commitment.lastName === "" ||
      commitment.organization === "" ||
      commitment.sector === "" ||
      commitment.city === "" ||
      commitment.state === "" ||
      commitment.position === "" ||
      commitment.email === "" ||
      !/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(
        commitment.email
      ) ||
      commitment.phone === "" ||
      commitment.logo === "" ||
      commitment.img === "" ||
      commitment.question1 === "" ||
      commitment.question2 === "" ||
      commitment.question3 === "" ||
      commitment.question4 === "" ||
      commitment.question5 === "" ||
      commitment.question6 === "" ||
      commitment.question7 === "" ||
      commitment.question8 === "" ||
      commitment.question9 === "" ||
      commitment.question10 === "" ||
      commitment.question11 === "" ||
      commitment.question12 === "" ||
      commitment.agree === false
    ) {
      setError({
        status: true,
        message: "¡Ups!, parace que tienes campos sin rellenar.",
      });
    } else {
      setError({
        status: false,
        message: "",
      });
      sendData();
    }
  };

  const sendData = async () => {
    try {
      const response = await api.post("/commitments", commitment);
      console.log("👉 Returned data:", response);
      setError({
        status: false,
        message: "",
      });
      //redirection when the request has been correct
      history.push("/success_commitment");
    } catch (e) {
      setError({
        status: true,
        message:
          "Vaya, estamos teniendo problemas de conexión al enviar tus datos, intenta de nuevo",
      });
      console.log(`😱 Axios request failed: ${e}`);
    }
  };

  return (
    <Fragment>
      <WrapperContainer>
        <Form>
          <Title>Estas a unos pasos de cambiar tu entorno</Title>
          <Information>
            ¡Estás un paso más cerca de contribuir a un México de
            #MillonesdeAgentesdeCambio! Con tu impacto y proyecciones a futuro
            puedes impulsar a más personas a cambiar su realidad.
          </Information>
          <h3>Datos generales</h3>
          <WrapperField>
            <Field>
              <Label>
                Nombre(s) <TxtRequired>*</TxtRequired>
              </Label>
              <Input
                type="text"
                name="firstName"
                value={commitment.firstName}
                onChange={handleOnChange}
              />
            </Field>
            <Field>
              <Label>
                Apellido(s) <TxtRequired>*</TxtRequired>
              </Label>
              <Input
                type="text"
                name="lastName"
                value={commitment.lastName}
                onChange={handleOnChange}
              />
            </Field>
            <Field>
              <Label>
                Organización <TxtRequired>*</TxtRequired>
              </Label>
              <Input
                type="text"
                name="organization"
                value={commitment.organization}
                onChange={handleOnChange}
              />
            </Field>
            <Field>
              <Label>
                Sector(s) <TxtRequired>*</TxtRequired>
              </Label>
              <Select
                name="sector"
                value={commitment.sector}
                onChange={handleOnChange}
              >
                <option value="">-- Seleccione --</option>
                <option value="Academia">Academia</option>
                <option value="Sector público">Sector público</option>
                <option value="Sector privado">Sector privado</option>
                <option value="Organización de la sociedad civil">
                  Organización de la sociedad civil
                </option>
                <option value="Ciudadanía">Ciudadanía</option>
              </Select>
            </Field>
            <Field>
              <Label>
                Ciudad <TxtRequired>*</TxtRequired>
              </Label>
              <Input
                type="text"
                name="city"
                value={commitment.city}
                onChange={handleOnChange}
              />
            </Field>
            <Field>
              <Label>
                Estado <TxtRequired>*</TxtRequired>
              </Label>
              <Select
                name="state"
                value={commitment.state}
                onChange={handleOnChange}
              >
                <option value="">-- Seleccione --</option>
                <option value="Aguascalientes">Aguascalientes</option>
                <option value="Baja California">Baja California</option>
                <option value="Baja California Sur">Baja California Sur</option>
                <option value="Campeche">Campeche</option>
                <option value="Chiapas">Chiapas</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Ciudad de México">Ciudad de México</option>
                <option value="Coahuila">Coahuila</option>
                <option value="Colima">Colima</option>
                <option value="Durango">Durango</option>
                <option value="Estado de México">Estado de México</option>
                <option value="Guanajuato">Guanajuato</option>
                <option value="Guerrero">Guerrero</option>
                <option value="Hidalgo">Hidalgo</option>
                <option value="Jalisco">Jalisco</option>
                <option value="Michoacán">Michoacán</option>
                <option value="Morelos">Morelos</option>
                <option value="Nayarit">Nayarit</option>
                <option value="Nuevo León">Nuevo León</option>
                <option value="Oaxaca">Oaxaca</option>
                <option value="Puebla">Puebla</option>
                <option value="Querétaro">Querétaro</option>
                <option value="Quintana Roo">Quintana Roo</option>
                <option value="San Luis Potosí">San Luis Potosí</option>
                <option value="Sinaloa">Sinaloa</option>
                <option value="Sonora">Sonora</option>
                <option value="Tabasco">Tabasco</option>
                <option value="Tamaulipas">Tamaulipas</option>
                <option value="Tlaxcala">Tlaxcala</option>
                <option value="Veracruz">Veracruz</option>
                <option value="Yucatán">Yucatán</option>
                <option value="Zacatecas">Zacatecas</option>
              </Select>
            </Field>
            <Field>
              <Label>
                Cargo <TxtRequired>*</TxtRequired>
              </Label>
              <Input
                type="text"
                name="position"
                value={commitment.position}
                onChange={handleOnChange}
              />
            </Field>
            <Field>
              <Label>
                Correo electronico <TxtRequired>*</TxtRequired>
              </Label>
              <Input
                type="email"
                name="email"
                value={commitment.email}
                onChange={handleOnChange}
              />
            </Field>
            <Field>
              <Label>
                Telefono <TxtRequired>*</TxtRequired>
              </Label>
              <Input
                type="text"
                name="phone"
                value={commitment.phone}
                onChange={handleOnChange}
              />
            </Field>
          </WrapperField>
          <Field>
            <Label>
              Breve descripción de tu proyecto/iniciativa/emprendimiento{" "}
              <TxtRequired>*</TxtRequired>
            </Label>
            <TextArea
              name="question1"
              value={commitment.question1}
              onChange={handleOnChange}
            />
          </Field>
          <Field>
            <Label>
              Redes sociales de tu proyecto/iniciativa/emprendimiento{" "}
              <TxtRequired>*</TxtRequired>
            </Label>
            <TextArea
              name="question2"
              value={commitment.question2}
              onChange={handleOnChange}
            />
          </Field>

          <Field>
            <Label style={{ width: "30em" }}>
              Logo <TxtRequired>*</TxtRequired>
            </Label>
            <input
              type="file"
              name="logo"
              accept="image/*"
              id="imglogo"
              onChange={handleOnChange}
              style={{ display: "none" }}
            />
            <LabelFile for="imglogo">
              {" "}
              {commitment.logo ? commitment.logo : "Selecciona una imagen"}{" "}
            </LabelFile>
          </Field>
          <Field>
            <Label style={{ width: "30em" }}>
              Adjunte una fotografía que refle tu impacto{" "}
              <TxtRequired>*</TxtRequired>
            </Label>
            <input
              type="file"
              name="img"
              accept="image/png, .jpeg, .jpg"
              id="imgimpacto"
              onChange={handleOnChange}
              style={{ display: "none" }}
            />
            <LabelFile for="imgimpacto">
              {" "}
              {commitment.img ? commitment.img : "Selecciona una imagen"}{" "}
            </LabelFile>
          </Field>

          <h3>Construye tu compromiso</h3>
          <Information>
            A continuación, queremos saber más sobre tu compromiso con este
            movimiento. Tu compromiso debe hacer referencia a una acción nueva o
            expandida, medible y específica que tú, tu institución o socios,
            estén tomando para apoyar la activación o el equipamiento de más
            agentes de cambio.
          </Information>
          <Information style={{ lineHeight: "3em" }}>
            <Input
              type="text"
              placeholder="La organización A,(junto a la B)"
              name="question3"
              value={commitment.question3}
              onChange={handleOnChange}
              style={{ textAlign: "center" }}
            />{" "}
            se compromete a impactar a{" "}
            <Input
              type="text"
              placeholder="# de agentes "
              name="question7"
              value={commitment.question7}
              onChange={handleOnChange}
              style={{ width: "130px", textAlign: "center" }}
            />{" "}
            con su programa, durante{" "}
            <Input
              type="text"
              placeholder="periodo de tiempo"
              name="question5"
              value={commitment.question5}
              onChange={handleOnChange}
              style={{ width: "150px", textAlign: "center" }}
            />{" "}
            para contribuir a la comunidad de Agentes de cambio, a través de{" "}
            <TextArea
              placeholder="¿cómo el impacto esperado contribuye a los demás actores?"
              name="question6"
              value={commitment.question6}
              onChange={handleOnChange}
              style={{ width: "100%", height: "40px", textAlign: "center" }}
            />
          </Information>
          <Field>
            <Label>
              ¿Qué acción se va a implementar? <TxtRequired>*</TxtRequired>
            </Label>
            <TextArea
              name="question4"
              value={commitment.question4}
              onChange={handleOnChange}
            />
          </Field>
          <Field>
            <Label>
              ¿De qué manera Ashoka y su red pueden ayudarte a escalar el
              impacto de tu compromiso? <TxtRequired>*</TxtRequired>
            </Label>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="question8"
                value="Vinculación con actores clave"
                checked={
                  commitment.question8 === "Vinculación con actores clave"
                }
                onChange={handleOnChange}
              />{" "}
              Vinculación con actores clave
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="question8"
                value="Herramientas y metodologías para impulsar la innovación social y la agencia de cambio"
                checked={
                  commitment.question8 ===
                  "Herramientas y metodologías para impulsar la innovación social y la agencia de cambio"
                }
                onChange={handleOnChange}
              />{" "}
              Herramientas y metodologías para impulsar la innovación social y
              la agencia de cambio
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="question8"
                value="Asesorías especializadas"
                checked={commitment.question8 === "Asesorías especializadas"}
                onChange={handleOnChange}
              />{" "}
              Asesorías especializadas
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="question8"
                value="Fondos para escalar la iniciativa"
                checked={
                  commitment.question8 === "Fondos para escalar la iniciativa"
                }
                onChange={handleOnChange}
              />{" "}
              Fondos para escalar la iniciativa
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="question8"
                value="Difusión y comunicación"
                checked={commitment.question8 === "Difusión y comunicación"}
                onChange={handleOnChange}
              />{" "}
              Difusión y comunicación
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="question8"
                value="Otro"
                checked={commitment.question8 === "Otro"}
                onChange={handleOnChange}
              />{" "}
              Otro
            </WrapperInputRadio>
          </Field>
          <Field>
            <Label>
              En caso de tener una necesidad distinta a estos, favor de
              especificarlo a continuación:
            </Label>
            <TextArea
              name="question9"
              value={commitment.question9}
              onChange={handleOnChange}
            />
          </Field>
          <Field>
            <Label>
              ¿Cómo te enteraste de #MillonesdeAgentesdeCambio?{" "}
              <TxtRequired>*</TxtRequired>
            </Label>
            <Select
              name="question10"
              style={{ width: "37em" }}
              value={commitment.question10}
              onChange={handleOnChange}
            >
              <option value="">-- Seleccione --</option>
              <option value="Ashoka Staff">Ashoka Staff</option>
              <option value="Aliados de Difusión">Aliados de Difusión</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Twitter">Twitter</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Sesión de Compromisos">
                Sesión de Compromisos
              </option>
              <option value="Conector Ashoka">Conector Ashoka</option>
              <option value="Embajador Ashoka">Embajador Ashoka</option>
              <option value="Sitio Web Ashoka">Sitio Web Ashoka</option>
              <option value="Otro">otro</option>
            </Select>
          </Field>
          <Field>
            <Label>
              En caso de colocar otro o si quieres especificar, favor de
              especificarlo a continuación
            </Label>
            <TextArea
              name="question11"
              value={commitment.question11}
              onChange={handleOnChange}
            />
          </Field>
          <Field>
            <Label>Comentario o Duda Adicional</Label>
            <TextArea
              name="question12"
              value={commitment.question12}
              onChange={handleOnChange}
            />
          </Field>

          <WrapperInputRadio>
            <InputRadio
              type="checkbox"
              name="sendEmails"
              checked={commitment.sendEmails}
              onChange={() =>
                setCommitment({
                  ...commitment,
                  sendEmails: !commitment.sendEmails,
                })
              }
            />{" "}
            Me gustaría recibir actualizaciones y noticias por correo
            electrónico sobre Ashoka.
          </WrapperInputRadio>
          <WrapperInputRadio>
            <InputRadio
              type="checkbox"
              name="agree"
              checked={commitment.agree}
              onChange={() =>
                setCommitment({ ...commitment, agree: !commitment.agree })
              }
            />{" "}
            Acepto que mi compromiso sea compartido públicamente y que mi nombre
            y dirección de correo electrónico sean compartidos con otras
            personas que se comprometan.
          </WrapperInputRadio>

          <Information>
            Al enviar este formulario, usted reconoce que sus datos personales
            se procesarán fuera del EEE tal como descrito en la{" "}
            <Url
              href="https://www.ashoka.org/es/privacy-policy"
              target="_blank"
            >
              Política de Privacidad
            </Url>
            .
          </Information>

          <Btn type="button" onClick={validateData}>
            Comprometerme
          </Btn>

          <Information>
            *Si tu compromiso es aprobado, la información que proporciones para
            los campos requeridos puede ser utilizada para compartir el
            compromiso públicamente. Por favor, no incluyas ninguna información
            privada o confidencial.
          </Information>
          <Information>
            Nota: Se pueden presentar múltiples compromisos por organización. El
            Líder para cada compromiso debe ser la persona que completa este
            formulario. El responsable del compromiso actuará como punto de
            contacto oficial de Ashoka en relación con este y deberá ser capaz
            de aprobar cualquier texto que se comparta públicamente sobre este
            compromiso.
          </Information>
        </Form>
      </WrapperContainer>
      <Snackbar
        open={error.status}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {error.message}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default NewCommitment;
