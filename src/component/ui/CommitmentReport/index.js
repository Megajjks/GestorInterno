import React, { Fragment, useState, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import {
  Wrapper,
  Img,
  WrapperFormData,
  WrapperIconEdit,
  ImgEditCommitment,
  WrapperImgTxt,
  Icon,
  IconPointSvg,
  TxtTitleOrganization,
  TxtIcon,
  TitleQuestion,
  TxtQuestion,
  Sector,
  TxtSector,
  TypeSector,
  WrapperLocation,
  WrapperCheckbox,
  WrapperContact,
  WrapperButtons,
  ButtonAccept,
  ButtonDecline,
  StyledMenu,
  StyledMenuItem,
} from "./styled";
import IconEdit from "../../../assets/img/editar.svg";
import IconUser from "../../../assets/img/usercard.svg";
import IconCity from "../../../assets/img/location1.svg";
import IconState from "../../../assets/img/location2.svg";
import IconPoint from "../../../assets/img/point.svg";
import IconMail from "../../../assets/img/mail.svg";
import IconPhone from "../../../assets/img/phone.svg";
import FeedbackModal from "../modals/FeedbackModal";
import ListItemText from "@material-ui/core/ListItemText";
import EditCommitmentModal from "../modals/EditCommitmentModal";
import DynamicScrollToTop from "../../hooks/DynamicScrollToTop";
import AlertInformation from "../alerts/AlertInformation";
import api from "../../../helpers/api";
import { rolName } from "../../../helpers";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";

const CommitmentReport = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const history = useHistory();

  //Alert commitment update status "primer_contacto"
  const [error, setError] = useState({
    status: false,
    message: "",
    typeMessage: "",
  });

  function AlertError(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError({
      ...error,
      status: false,
      typeMessage: "",
    });
  };

  //After executing the alert on informing that the commitment has been successfully
  const successData = () => {
    history.push("/panel/pool");
  };

  useEffect(() => {
    const fetchCommitmentReport = async () => {
      dispatch({ type: actions.getDataForm });
      dispatch({ type: actions.getQuestions });
      try {
        const idCommitment = history.location.state;
        const { data } = await api.get(`/commitments/${idCommitment}`);
        dispatch({ type: actions.getDataFormSuccess, payload: data });
        dispatch({ type: actions.getQuestionsSuccess, payload: data.answers });
      } catch (e) {
        dispatch({
          type: actions.getDataFormError,
          payload: "Error en peticion",
        });
        dispatch({
          type: actions.getQuestionsError,
          payload: "Error en peticion",
        });
        console.log(e);
      }
    };
    fetchCommitmentReport();
  }, []);

  const acceptCommitment = async () => {
    try {
      let formdata = new FormData();
      let message = JSON.stringify({
        title: null,
        msg: null,
      });

      //check if assistent
      if (rolName() === "assistant") {
        //estructuring the formdata
        formdata.append("status", "prevalidado");
        formdata.append("feedback", "validando");
        formdata.append("message", message);

        const response = await api.put(
          `/commitments/${state.dataForm.id}`,
          formdata
        );
      } else {
        //estructuring the formdata
        formdata.append("status", "primer_contacto");
        formdata.append("feedback", null);
        formdata.append("message", message);
        const response = await api.put(
          `/commitments/${state.dataForm.id}`,
          formdata
        );
      }
      setError({
        status: true,
        message: "¡Excelente!, Su petición ha sido enviada exitosamente.",
        typeMessage: "success",
      });
      setTimeout(successData, 3000);
    } catch (e) {
      setError({
        status: true,
        message:
          "Vaya, estamos teniendo problemas de conexión al enviar tus datos, intenta de nuevo",
        typeMessage: "error",
      });
      console.log(e);
      setTimeout(successData, 3000);
    }
  };

  //functions modal feedback

  const feedback = (option) => {
    dispatch({ type: actions.setOption, payload: option });
    dispatch({ type: actions.setIdCommitment, payload: state.idCommitment });
    clickOpenModalFeedback();
  };

  const clickOpenModalFeedback = () => {
    dispatch({ type: actions.openModalFeedback, payload: true });
  };

  const closeModalFeedback = () => {
    dispatch({ type: actions.closeModalFeedback, payload: false });
  };

  //options decline or accept commitment

  const openModalAcceptFeedback = (event) => {
    dispatch({
      type: actions.openOptionAcceptFeedback,
      payload: event.currentTarget,
    });
  };

  const closeModalAcceptFeedback = () => {
    dispatch({ type: actions.closeOptionAcceptFeedback, payload: null });
  };

  const openEditCommitmentModal = () => {
    dispatch({ type: actions.openEditCommitmentModal, payload: true });
  };

  const closeEditCommitmentModal = () => {
    dispatch({ type: actions.closeEditCommitmentModal, payload: false });
  };
  //no muevas el scroll jaja
  //Tranqui no lo movere xD
  return (
    <Fragment>
      {state.dataForm.status === "prevalidado" && (
        <AlertInformation preRol={state.dataForm.feedback} />
      )}
      {state.dataForm.message.title && (
        <AlertInformation
          type="message"
          title={state.dataForm.message.title}
          msg={state.dataForm.message.msg}
        />
      )}
      <Wrapper>
        <DynamicScrollToTop />
        <Img src={`https://api.ashoka.hackademy.mx/${state.dataForm.img}`} />
        <WrapperFormData>
          <TxtTitleOrganization>
            {state.dataForm.organization}
          </TxtTitleOrganization>
          <WrapperImgTxt>
            <Icon src={IconUser} />
            <TxtIcon>
              {state.dataForm.firstName} {state.dataForm.lastName}
            </TxtIcon>
          </WrapperImgTxt>
          <TxtQuestion style={{ marginTop: "12px" }}>
            {state.questions.map((question) =>
              question.questionId === 1 ? question.answer : null
            )}
          </TxtQuestion>
          <Sector>
            <TxtSector>Sector: </TxtSector>
            <TypeSector>{state.dataForm.sector}</TypeSector>
          </Sector>
          <Sector>
            <TxtSector>Area: </TxtSector>
            <TypeSector>{state.dataForm.area}</TypeSector>
          </Sector>
          <Sector>
            <TxtSector>Cargo: </TxtSector>
            <TypeSector>{state.dataForm.position}</TypeSector>
          </Sector>
          <WrapperLocation>
            <WrapperImgTxt>
              <Icon src={IconState} />
              <TxtIcon>{state.dataForm.city}</TxtIcon>
            </WrapperImgTxt>
            <WrapperImgTxt>
              <Icon src={IconCity} />
              <TxtIcon>{state.dataForm.state}</TxtIcon>
            </WrapperImgTxt>
          </WrapperLocation>
          <TitleQuestion>
            Organizaciones o personas que se comprometen
          </TitleQuestion>
          <TxtQuestion>
            {state.questions.map((question) =>
              question.questionId === 3 ? question.answer : null
            )}
          </TxtQuestion>
          <TitleQuestion>Acción que se va a implementar</TitleQuestion>
          <TxtQuestion>
            {state.questions.map((question) =>
              question.questionId === 4 ? question.answer : null
            )}
          </TxtQuestion>
          <TitleQuestion>
            Periodo de tiempo para desarrollo de compromiso
          </TitleQuestion>
          <TxtQuestion>
            {state.questions.map((question) =>
              question.questionId === 5 ? question.answer : null
            )}
          </TxtQuestion>
          <TitleQuestion>
            Contribución de compromiso para generar más Agentes de Cambio
          </TitleQuestion>
          <TxtQuestion>
            {state.questions.map((question) =>
              question.questionId === 6 ? question.answer : null
            )}
          </TxtQuestion>
          <TitleQuestion>
            Agentes de Cambio para impactar con compromiso
          </TitleQuestion>
          <TxtQuestion>
            {state.questions.map((question) =>
              question.questionId === 7 ? question.answer : null
            )}
          </TxtQuestion>
          <TitleQuestion>
            Manera en que Ashoka y su red ayudarán a escalar compromiso
          </TitleQuestion>
          <WrapperCheckbox>
            <WrapperImgTxt>
              <IconPointSvg src={IconPoint} />
              <TxtIcon>
                {state.questions.map((question) =>
                  question.questionId === 8 ? question.answer : null
                )}
              </TxtIcon>
            </WrapperImgTxt>
          </WrapperCheckbox>
          <TxtQuestion>
            {state.questions.map((question) =>
              question.questionId === 9 ? question.answer : null
            )}
          </TxtQuestion>
          <TitleQuestion>
            Me entere de #MillonesdeAgentesdeCambio mediante
          </TitleQuestion>
          <TxtQuestion>
            {state.questions.map((question) =>
              question.questionId === 10 ? question.answer : null
            )}
          </TxtQuestion>
          <TxtQuestion>
            {state.questions.map((question) =>
              question.questionId === 11 ? question.answer : null
            )}
          </TxtQuestion>
          <TitleQuestion>Comentarios o dudas adicionales</TitleQuestion>
          <TxtQuestion>
            {state.questions.map((question) =>
              question.questionId === 12 ? question.answer : null
            )}
          </TxtQuestion>
          <TitleQuestion>Contacto</TitleQuestion>
          <WrapperContact>
            <WrapperImgTxt>
              <Icon src={IconPhone} />
              <TxtIcon>{state.dataForm.phone}</TxtIcon>
            </WrapperImgTxt>
            <WrapperImgTxt>
              <Icon src={IconMail} />
              <TxtIcon>{state.dataForm.email}</TxtIcon>
            </WrapperImgTxt>
          </WrapperContact>
          {history.location.state.isDetail ? null : (
            <WrapperButtons>
              <ButtonDecline onClick={() => feedback("declinar")}>
                Declinar
              </ButtonDecline>

              <ButtonAccept onClick={openModalAcceptFeedback}>
                Aceptar Compromiso
              </ButtonAccept>
              <StyledMenu
                id="customized-menu"
                anchorEl={state.optionAcceptFeedback}
                keepMounted
                open={Boolean(state.optionAcceptFeedback)}
                onClose={closeModalAcceptFeedback}
              >
                <StyledMenuItem onClick={() => acceptCommitment()}>
                  <ListItemText primary="Aceptar" />
                </StyledMenuItem>
                <StyledMenuItem onClick={() => feedback("aceptar")}>
                  <ListItemText primary="Aceptar con corrección" />
                </StyledMenuItem>
              </StyledMenu>
            </WrapperButtons>
          )}
        </WrapperFormData>
        {rolName() === "collaborator" ? null : (
          <WrapperIconEdit>
            <ImgEditCommitment
              src={IconEdit}
              onClick={openEditCommitmentModal}
            />
          </WrapperIconEdit>
        )}
        <FeedbackModal
          openModalFeedback={state.modalFeedback}
          closeModalFeedback={closeModalFeedback}
          optionFeedback={state.option}
          commitment={state.dataForm}
        />
        <EditCommitmentModal
          open={state.showEditCommitmentModal}
          handleClose={closeEditCommitmentModal}
          dataForm={state.dataForm}
        />
        <Snackbar
          open={error.status}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <AlertError onClose={handleClose} severity={error.typeMessage}>
            {error.message}
          </AlertError>
        </Snackbar>
      </Wrapper>
    </Fragment>
  );
};

export default CommitmentReport;
