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
  WrapperTextInput,
  WrapperTextArea,
  SpanText,
  WrapperTextSuggestion,
  WrapperSuggestion,
  WrapperSpan1,
  WrapperSpan2,
  WrapperSpan3,
  WrapperSpan4,
  WrapperSpan5,
} from "./styled";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import BtnSend from "../GeneralButton";
import api from "../../../helpers/api";
import {
  states,
  sector,
  commitmentImpact,
  socialNetworks,
} from "../../../helpers/index";

const addStyle = (id1, id2, id3, id4, id5) => {
  document.getElementById(`${id1}`).style.display = "block";
  document.getElementById(`${id2}`).style.display = "none";
  document.getElementById(`${id3}`).style.display = "none";
  document.getElementById(`${id4}`).style.display = "none";
  document.getElementById(`${id5}`).style.display = "none";
};

const removeStyle = (id1, id2, id3, id4, id5) => {
  document.getElementById(`${id1}`).style.display = "none";
  document.getElementById(`${id2}`).style.display = "none";
  document.getElementById(`${id3}`).style.display = "none";
  document.getElementById(`${id4}`).style.display = "none";
  document.getElementById(`${id5}`).style.display = "none";
};

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
    categoryId: 0,
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question8: null,
    question7: "",
    question9: "",
    question10: "",
    question11: "",
    question12: "",
    sendEmails: false,
  });

  const aqui = false;

  const [question8Add, setQuestion8Add] = useState({
    "8-1": false,
    "8-2": false,
    "8-3": false,
    "8-4": false,
    "8-5": false,
    "8-6": false,
  });

  const handleOnChangeQuestion8 = (e) => {
    setQuestion8Add({
      ...question8Add,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();

  const [isLoader, setIsLoader] = useState(false);
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

  const [images, setImages] = useState({
    logo: null,
    logoName: "",
    img: null,
    imgName: "",
  });

  const onChangeHandlerLogo = (e) => {
    console.log(e.target.files[0]);
    setImages({
      ...images,
      [e.target.name]: e.target.files[0],
      logoName: e.target.files[0].name,
    });
  };

  const onChangeHandlerImg = (e) => {
    console.log(e.target.files[0]);
    setImages({
      ...images,
      [e.target.name]: e.target.files[0],
      imgName: e.target.files[0].name,
    });
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const validateData = (e) => {
    e.preventDefault();
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
      commitment.question1 === "" ||
      commitment.question2 === "" ||
      commitment.question3 === "" ||
      commitment.question4 === "" ||
      commitment.question5 === "" ||
      commitment.question6 === "" ||
      commitment.question7 === "" ||
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
    setIsLoader(true);
    try {
      let formdata = new FormData();
      setCommitment({
        ...commitment,
        question8: question8Add,
      });
      formdata.append("firstName", commitment.firstName);
      formdata.append("lastName", commitment.lastName);
      formdata.append("organization", commitment.organization);
      formdata.append("sector", commitment.sector);
      formdata.append("city", commitment.city);
      formdata.append("state", commitment.state);
      formdata.append("position", commitment.position);
      formdata.append("phone", commitment.phone);
      formdata.append("email", commitment.email);
      formdata.append("categoryId", 0);
      formdata.append("img", images.img, images.imgName);
      formdata.append("logo", images.logo, images.logoName);
      formdata.append("question1", commitment.question1);
      formdata.append("question2", commitment.question2);
      formdata.append("question3", commitment.question3);
      formdata.append("question4", commitment.question4);
      formdata.append("question5", commitment.question5);
      formdata.append("question6", commitment.question6);
      formdata.append("question7", commitment.question7);
      formdata.append("question8", commitment.question8);
      formdata.append("question9", commitment.question9);
      formdata.append("question10", commitment.question10);
      formdata.append("question11", commitment.question11);
      formdata.append("question12", commitment.question12);
      formdata.append("sendEmails", commitment.sendEmails);
      const response = await api.post("/commitments", formdata);
      console.log("👉 Returned data:", response);
      setIsLoader(false);
      setError({
        status: false,
        message: "",
      });
      //redirection when the request has been correct
      history.push("/success_commitment");
    } catch (e) {
      setIsLoader(false);
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
                onFocus={() => {
                  removeStyle(
                    "suggestion1",
                    "suggestion2",
                    "suggestion3",
                    "suggestion4",
                    "suggestion5"
                  );
                }}
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
                onFocus={() => {
                  removeStyle(
                    "suggestion1",
                    "suggestion2",
                    "suggestion3",
                    "suggestion4",
                    "suggestion5"
                  );
                }}
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
                onFocus={() => {
                  removeStyle(
                    "suggestion1",
                    "suggestion2",
                    "suggestion3",
                    "suggestion4",
                    "suggestion5"
                  );
                }}
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
                onFocus={() => {
                  removeStyle(
                    "suggestion1",
                    "suggestion2",
                    "suggestion3",
                    "suggestion4",
                    "suggestion5"
                  );
                }}
              >
                <option value="">-- Seleccione --</option>
                {sector.map((item, idx) => {
                  return (
                    <option value={item} key={idx}>
                      {item}
                    </option>
                  );
                })}
              </Select>
            </Field>
            <Field>
              <Label>
                Ciudad <TxtRequired>*</TxtRequired>
              </Label>
              <Input
                type="text"
                name="city"
                onFocus={() => {
                  removeStyle(
                    "suggestion1",
                    "suggestion2",
                    "suggestion3",
                    "suggestion4",
                    "suggestion5"
                  );
                }}
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
                onFocus={() => {
                  removeStyle(
                    "suggestion1",
                    "suggestion2",
                    "suggestion3",
                    "suggestion4",
                    "suggestion5"
                  );
                }}
                value={commitment.state}
                onChange={handleOnChange}
              >
                <option value="">-- Seleccione --</option>
                {states.map((item, idx) => {
                  return (
                    <option value={item} key={idx}>
                      {item}
                    </option>
                  );
                })}
              </Select>
            </Field>
            <Field>
              <Label>
                Cargo <TxtRequired>*</TxtRequired>
              </Label>
              <Input
                type="text"
                name="position"
                onFocus={() => {
                  removeStyle(
                    "suggestion1",
                    "suggestion2",
                    "suggestion3",
                    "suggestion4",
                    "suggestion5"
                  );
                }}
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
                onFocus={() => {
                  removeStyle(
                    "suggestion1",
                    "suggestion2",
                    "suggestion3",
                    "suggestion4",
                    "suggestion5"
                  );
                }}
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
                onFocus={() => {
                  removeStyle(
                    "suggestion1",
                    "suggestion2",
                    "suggestion3",
                    "suggestion4",
                    "suggestion5"
                  );
                }}
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
              onFocus={() => {
                removeStyle(
                  "suggestion1",
                  "suggestion2",
                  "suggestion3",
                  "suggestion4",
                  "suggestion5"
                );
              }}
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
              onFocus={() => {
                removeStyle(
                  "suggestion1",
                  "suggestion2",
                  "suggestion3",
                  "suggestion4",
                  "suggestion5"
                );
              }}
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
              id="imglogo"
              onChange={onChangeHandlerLogo}
              style={{ display: "none" }}
            />
            <LabelFile for="imglogo">
              {" "}
              {images.logoName ? images.logoName : "Selecciona una imagen"}{" "}
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
              onChange={onChangeHandlerImg}
              style={{ display: "none" }}
            />
            <LabelFile for="imgimpacto">
              {" "}
              {images.imgName ? images.imgName : "Selecciona una imagen"}{" "}
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
          <WrapperSuggestion>
            <WrapperTextInput>
              <Input
                type="text"
                placeholder="La organización A,(junto a la B)"
                name="question3"
                onFocus={() => {
                  addStyle(
                    "suggestion1",
                    "suggestion2",
                    "suggestion3",
                    "suggestion4",
                    "suggestion5"
                  );
                }}
                value={commitment.question3}
                onChange={handleOnChange}
              />{" "}
              se compromete a impactar a{" "}
              <Input
                type="text"
                placeholder="# de agentes "
                name="question7"
                onFocus={() => {
                  addStyle(
                    "suggestion2",
                    "suggestion1",
                    "suggestion3",
                    "suggestion4",
                    "suggestion5"
                  );
                }}
                value={commitment.question7}
                onChange={handleOnChange}
                style={{ width: "130px" }}
              />{" "}
              con su programa, durante{" "}
            </WrapperTextInput>
            <WrapperTextSuggestion>
              <WrapperSpan1 style={{ marginRight: "10px" }} id="suggestion1">
                <SpanText>
                  {
                    "(Ejemplo: Ashoka México, Centroamérica y el Caribe, CEMEX y el Tecnológico de Monterrey)"
                  }
                </SpanText>
              </WrapperSpan1>
              <WrapperSpan2 style={{ marginLeft: "50%" }} id="suggestion2">
                <SpanText>
                  {
                    "(Se va a impactar a 36 líderes agentes de cambio de manera directa)"
                  }
                </SpanText>
              </WrapperSpan2>
            </WrapperTextSuggestion>
            <WrapperTextInput>
              <Input
                type="text"
                placeholder="periodo de tiempo"
                name="question5"
                onFocus={() => {
                  addStyle(
                    "suggestion3",
                    "suggestion2",
                    "suggestion1",
                    "suggestion4",
                    "suggestion5"
                  );
                }}
                value={commitment.question5}
                onChange={handleOnChange}
                style={{ width: "150px" }}
              />{" "}
              para contribuir a la comunidad de Agentes de cambio, a través de{" "}
            </WrapperTextInput>
            <WrapperTextSuggestion>
              <WrapperSpan3 style={{ width: "27%" }} id="suggestion3">
                <SpanText>{"(Ejemplo: enero a octubre de 2020)"}</SpanText>
              </WrapperSpan3>
            </WrapperTextSuggestion>
            <WrapperTextArea>
              <TextArea
                placeholder="¿cómo el impacto esperado contribuye a los demás actores?"
                name="question6"
                onFocus={() => {
                  addStyle(
                    "suggestion4",
                    "suggestion2",
                    "suggestion3",
                    "suggestion1",
                    "suggestion5"
                  );
                }}
                value={commitment.question6}
                onChange={handleOnChange}
                style={{ width: "100%", height: "40px" }}
              />
            </WrapperTextArea>
            <WrapperTextSuggestion>
              <WrapperSpan4 style={{ width: "100%" }} id="suggestion4">
                <SpanText>
                  {
                    "(Fortalecer y conectar a líderes innovadores sociales de todo el mundo, con la finalidad de aumentar su impacto y que ellos puedan replicar el conocimiento adquirido en sus contextos.)"
                  }
                </SpanText>
              </WrapperSpan4>
            </WrapperTextSuggestion>
          </WrapperSuggestion>
          <Field>
            <Label>
              ¿Qué acción se va a implementar? <TxtRequired>*</TxtRequired>
            </Label>
            <TextArea
              name="question4"
              onFocus={() => {
                addStyle(
                  "suggestion5",
                  "suggestion2",
                  "suggestion3",
                  "suggestion4",
                  "suggestion1"
                );
              }}
              value={commitment.question4}
              onChange={handleOnChange}
            />
          </Field>
          <WrapperTextSuggestion>
            <WrapperSpan5 style={{ width: "100%" }} id="suggestion5">
              <SpanText>
                {
                  "(Ejemplo: Codiseño y lanzamiento de la convocatoria del Premio CEMEX-TEC con un Bootcamp de emprendimiento social y cambio sistémico para los ganadores)"
                }
              </SpanText>
            </WrapperSpan5>
          </WrapperTextSuggestion>
          <Field>
            <Label>
              ¿De qué manera Ashoka y su red pueden ayudarte a escalar el
              impacto de tu compromiso? <TxtRequired>*</TxtRequired>
            </Label>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="8-1"
                onFocus={() => {
                  removeStyle(
                    "suggestion1",
                    "suggestion2",
                    "suggestion3",
                    "suggestion4",
                    "suggestion5"
                  );
                }}
                value={true}
                onChange={handleOnChangeQuestion8}
              />{" "}
              Vinculación con actores clave
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="8-2"
                value={true}
                onChange={handleOnChangeQuestion8}
              />{" "}
              Herramientas y metodologías para impulsar la innovación social y
              la agencia de cambio
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="8-3"
                value={true}
                onChange={handleOnChangeQuestion8}
              />{" "}
              Asesorías especializadas
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="8-4"
                value={true}
                onChange={handleOnChangeQuestion8}
              />{" "}
              Fondos para escalar la iniciativa
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="8-5"
                value={true}
                onChange={handleOnChangeQuestion8}
              />{" "}
              Difusión y comunicación
            </WrapperInputRadio>
            <WrapperInputRadio>
              <InputRadio
                type="checkbox"
                name="8-6"
                value={true}
                onChange={handleOnChangeQuestion8}
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
              onFocus={() => {
                removeStyle(
                  "suggestion1",
                  "suggestion2",
                  "suggestion3",
                  "suggestion4",
                  "suggestion5"
                );
              }}
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
              onFocus={() => {
                removeStyle(
                  "suggestion1",
                  "suggestion2",
                  "suggestion3",
                  "suggestion4",
                  "suggestion5"
                );
              }}
              style={{ width: "37em" }}
              value={commitment.question10}
              onChange={handleOnChange}
            >
              <option value="">-- Seleccione --</option>
              {socialNetworks.map((item, idx) => {
                return (
                  <option value={item} key={idx}>
                    {item}
                  </option>
                );
              })}
            </Select>
          </Field>
          <Field>
            <Label>
              En caso de colocar otro o si quieres especificar, favor de
              especificarlo a continuación
            </Label>
            <TextArea
              name="question11"
              onFocus={() => {
                removeStyle(
                  "suggestion1",
                  "suggestion2",
                  "suggestion3",
                  "suggestion4",
                  "suggestion5"
                );
              }}
              value={commitment.question11}
              onChange={handleOnChange}
            />
          </Field>
          <Field>
            <Label>Comentario o Duda Adicional</Label>
            <TextArea
              name="question12"
              onFocus={() => {
                removeStyle(
                  "suggestion1",
                  "suggestion2",
                  "suggestion3",
                  "suggestion4",
                  "suggestion5"
                );
              }}
              value={commitment.question12}
              onChange={handleOnChange}
            />
          </Field>
          <WrapperInputRadio>
            <InputRadio
              type="checkbox"
              name="sendEmails"
              onFocus={() => {
                removeStyle(
                  "suggestion1",
                  "suggestion2",
                  "suggestion3",
                  "suggestion4",
                  "suggestion5"
                );
              }}
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
              onFocus={() => {
                removeStyle(
                  "suggestion1",
                  "suggestion2",
                  "suggestion3",
                  "suggestion4",
                  "suggestion5"
                );
              }}
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

          <BtnSend
            title="Comprometerme"
            size="40%"
            type="primary-loader"
            onClick={validateData}
            loader={isLoader}
          />

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
