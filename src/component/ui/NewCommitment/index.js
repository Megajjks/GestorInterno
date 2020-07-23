import React, { useState, Fragment } from "react";
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
import axios from "axios";

const NewCommitment = () => {
  const [commitment, setCommitment] = useState({
    first_name: "",
    last_name: "",
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
    send_emails: false,
    agree: false,
  });

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
      commitment.first_name === "" ||
      commitment.last_name === "" ||
      commitment.organization === "" ||
      commitment.sector === "" ||
      commitment.city === "" ||
      commitment.state === "" ||
      commitment.position === "" ||
      commitment.email === "" ||
      !(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(commitment.email)) ||
      commitment.phone === "" ||
      commitment.logo === "" ||
      commitment.img === "" ||
      commitment.q1 === "" ||
      commitment.q2 === "" ||
      commitment.q3 === "" ||
      commitment.q4 === "" ||
      commitment.q5 === "" ||
      commitment.q6 === "" ||
      commitment.q7 === "" ||
      commitment.q8 === "" ||
      commitment.q9 === "" ||
      commitment.q10 === "" ||
      commitment.q11 === "" ||
      commitment.q12 === "" ||
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
      //const response = await axios.post('http://localhost:5000/commitment',{commitment})
      const response = await axios.post(
        "http://localhost:5000/commitment",
        commitment
      );
      console.log("👉 Returned data:", response);
      setError({
        status: false,
        message: "",
      });
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
                name="first_name"
                value={commitment.first_name}
                onChange={handleOnChange}
              />
            </Field>
            <Field>
              <Label>
                Apellido(s) <TxtRequired>*</TxtRequired>
              </Label>
              <Input
                type="text"
                name="last_name"
                value={commitment.last_name}
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
                <option value="academia">Academia</option>
                <option value="sector_publico">Sector público</option>
                <option value="sector_privado">Sector privado</option>
                <option value="org_soc_civ">
                  Organización de la sociedad civil
                </option>
                <option value="ciudadania">Ciudadanía</option>
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
                <option value="aguascalientes">Aguascalientes</option>
                <option value="baja_california">Baja California</option>
                <option value="baja_california_cur">Baja California Sur</option>
                <option value="campeche">Campeche</option>
                <option value="chiapas">Chiapas</option>
                <option value="chihuahua">Chihuahua</option>
                <option value="cdmx">Ciudad de México</option>
                <option value="coahuila">Coahuila</option>
                <option value="colima">Colima</option>
                <option value="durango">Durango</option>
                <option value="estado_de_méxico">Estado de México</option>
                <option value="guanajuato">Guanajuato</option>
                <option value="guerrero">Guerrero</option>
                <option value="hidalgo">Hidalgo</option>
                <option value="jalisco">Jalisco</option>
                <option value="michoacán">Michoacán</option>
                <option value="morelos">Morelos</option>
                <option value="nayarit">Nayarit</option>
                <option value="nuevo León">Nuevo León</option>
                <option value="oaxaca">Oaxaca</option>
                <option value="puebla">Puebla</option>
                <option value="querétaro">Querétaro</option>
                <option value="quintana_roo">Quintana Roo</option>
                <option value="san_luis_potosí">San Luis Potosí</option>
                <option value="sinaloa">Sinaloa</option>
                <option value="sonora">Sonora</option>
                <option value="tabasco">Tabasco</option>
                <option value="tamaulipas">Tamaulipas</option>
                <option value="tlaxcala">Tlaxcala</option>
                <option value="veracruz">Veracruz</option>
                <option value="yucatán">Yucatán</option>
                <option value="zacatecas">Zacatecas</option>
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
              name="q1"
              value={commitment.q1}
              onChange={handleOnChange}
            />
          </Field>
          <Field>
            <Label>
              Redes sociales de tu proyecto/iniciativa/emprendimiento{" "}
              <TxtRequired>*</TxtRequired>
            </Label>
            <TextArea
              name="q2"
              value={commitment.q2}
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
              name="q3"
              value={commitment.q3}
              onChange={handleOnChange}
              style={{ textAlign: "center" }}
            />{" "}
            se compromete a impactar a{" "}
            <Input
              type="text"
              placeholder="# de agentes "
              name="q7"
              value={commitment.q7}
              onChange={handleOnChange}
              style={{ width: "130px", textAlign: "center" }}
            />{" "}
            con su programa, durante{" "}
            <Input
              type="text"
              placeholder="periodo de tiempo"
              name="q5"
              value={commitment.q5}
              onChange={handleOnChange}
              style={{ width: "150px", textAlign: "center" }}
            />{" "}
            para contribuir a la comunidad de Agentes de cambio, a través de{" "}
            <TextArea
              placeholder="¿cómo el impacto esperado contribuye a los demás actores?"
              name="q6"
              value={commitment.q6}
              onChange={handleOnChange}
              style={{ width: "100%", height: "40px", textAlign: "center" }}
            />
          </Information>
          <Field>
            <Label>
              ¿Qué acción se va a implementar? <TxtRequired>*</TxtRequired>
            </Label>
            <TextArea
              name="q4"
              value={commitment.q4}
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
                name="q8"
                value="1"
                checked={commitment.q8 === "1"}
                onChange={handleOnChange}
              />{" "}
              Vinculación con actores clave
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="q8"
                value="2"
                checked={commitment.q8 === "2"}
                onChange={handleOnChange}
              />{" "}
              Herramientas y metodologías para impulsar la innovación social y
              la agencia de cambio
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="q8"
                value="3"
                checked={commitment.q8 === "3"}
                onChange={handleOnChange}
              />{" "}
              Asesorías especializadas
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="q8"
                value="4"
                checked={commitment.q8 === "4"}
                onChange={handleOnChange}
              />{" "}
              Fondos para escalar la iniciativa
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="q8"
                value="5"
                checked={commitment.q8 === "5"}
                onChange={handleOnChange}
              />{" "}
              Difusión y comunicación
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="q8"
                value="6"
                checked={commitment.q8 === "6"}
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
              name="q9"
              value={commitment.q9}
              onChange={handleOnChange}
            />
          </Field>
          <Field>
            <Label>
              ¿Cómo te enteraste de #MillonesdeAgentesdeCambio?{" "}
              <TxtRequired>*</TxtRequired>
            </Label>
            <Select
              name="q10"
              style={{ width: "37em" }}
              value={commitment.q10}
              onChange={handleOnChange}
            >
              <option value="">-- Seleccione --</option>
              <option value="ashoka_staff">Ashoka Staff</option>
              <option value="aliados_de_difusion">Aliados de Difusión</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="linkedin">LinkedIn</option>
              <option value="Sesion_de_compromisos">
                Sesión de Compromisos
              </option>
              <option value="conector_ashoka">Conector Ashoka</option>
              <option value="embajador_ashoka">Embajador Ashoka</option>
              <option value="sitio_web">Sitio Web Ashoka</option>
              <option value="otro">otro</option>
            </Select>
          </Field>
          <Field>
            <Label>
              En caso de colocar otro o si quieres especificar, favor de
              especificarlo a continuación
            </Label>
            <TextArea
              name="q11"
              value={commitment.q11}
              onChange={handleOnChange}
            />
          </Field>
          <Field>
            <Label>Comentario o Duda Adicional</Label>
            <TextArea
              name="q12"
              value={commitment.q12}
              onChange={handleOnChange}
            />
          </Field>

          <WrapperInputRadio>
            <InputRadio
              type="checkbox"
              name="send_emails"
              checked={commitment.send_emails}
              onChange={() =>
                setCommitment({
                  ...commitment,
                  send_emails: !commitment.send_emails,
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
