import React, { useState, useEffect, useReducer } from "react";
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
  Position,
  TxtPosition,
  TypePosition,
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
import api from "../../../helpers/api";

import { actions } from './actions';
import { initialState } from './constants';
import { reducer } from './reducer';

const CommitmentReport = ({ rol }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("login_data")).accessToken;
  
  useEffect(() => {
    const fetchCommitmentReport = async () => {
      dispatch({ type: actions.getDataForm });
      dispatch({ type: actions.getQuestions });
      try {
        const idCommitment = history.location.state.id;
        const {data} = await api.get(`/commitments/${idCommitment}`, {
          headers: { Authorization: token }
        });
        dispatch({ type: actions.getDataFormSuccess, payload: data })
        dispatch({ type: actions.getQuestionsSuccess, payload: data.answers })
        console.log(data.answers[0].answer)
      } catch (e) {
        dispatch({ type: actions.getDataFormError, payload: "Error en peticion" });
        dispatch({ type: actions.getQuestionsError, payload: "Error en peticion" });
        console.log(e);
      }
    };
    fetchCommitmentReport();
  }, []);

  const acceptCommitment = async () => {
    try {
      const response = await api.put(`/commitments/${state.dataForm.id}/proceso`, {},
        { headers: { Authorization: token } }
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    history.push("/pool");
  };

  //functions modal feedback
  
  const feedback = option => {
    dispatch({ type: actions.setOption, payload: option })
    dispatch({ type: actions.setIdCommitment, payload: state.idCommitment })
    clickOpenModalFeedback();
  };

  const clickOpenModalFeedback = () => {
    dispatch({ type: actions.openModalFeedback, payload: true })
  };

  const closeModalFeedback = () => {
    dispatch({ type: actions.closeModalFeedback, payload: true })
  };

  //options decline or accept commitment

  const openModalAcceptFeedback = (event) => {
    dispatch({ type: actions.openOptionAcceptFeedback, payload: event.currentTarget })
  };

  const closeModalAcceptFeedback = () => {
    dispatch({ type: actions.closeOptionAcceptFeedback, payload: null })
  };

  const openEditCommitmentModal = () => {
    dispatch({ type: actions.openEditCommitmentModal, payload: true })
  };

  const closeEditCommitmentModal = () => {
    dispatch({ type: actions.closeEditCommitmentModal, payload: false })
  };

  return (
    <Wrapper>
      <DynamicScrollToTop />
      <Img src={state.dataForm.img} />
      <WrapperFormData>
        <TxtTitleOrganization>{state.dataForm.organization}</TxtTitleOrganization>
        <WrapperImgTxt>
          <Icon src={IconUser} />
          <TxtIcon>
            {state.dataForm.firstName} {state.dataForm.lastName}
          </TxtIcon>
        </WrapperImgTxt>
        <TxtQuestion style={{ marginTop: "12px" }}>
          {state.questions.map((question) => (
            question.questionId === 1 ? question.answer : null
          ))}
        </TxtQuestion>
        <Sector>
          <TxtSector>Sector: </TxtSector>
          <TypeSector>{state.dataForm.sector}</TypeSector>
        </Sector>
        <Position>
          <TxtPosition>Cargo: </TxtPosition>
          <TypePosition>{state.dataForm.position}</TypePosition>
        </Position>
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
          {state.questions.map((question) => (
            question.questionId === 3 ? question.answer : null
          ))}
        </TxtQuestion>
        <TitleQuestion>Acción que se va a implementar</TitleQuestion>
        <TxtQuestion>
          {state.questions.map((question) => (
            question.questionId === 4 ? question.answer : null
          ))}
        </TxtQuestion>
        <TitleQuestion>
          Periodo de tiempo para desarrollo de compromiso
        </TitleQuestion>
        <TxtQuestion>
          {state.questions.map((question) => (
            question.questionId === 5 ? question.answer : null
          ))}
        </TxtQuestion>
        <TitleQuestion>
          Contribución de compromiso para generar más Agentes de Cambio
        </TitleQuestion>
        <TxtQuestion>
          {state.questions.map((question) => (
            question.questionId === 6 ? question.answer : null
          ))}
        </TxtQuestion>
        <TitleQuestion>
          Agentes de Cambio para impactar con compromiso
        </TitleQuestion>
        <TxtQuestion>
          {state.questions.map((question) => (
            question.questionId === 7 ? question.answer : null
          ))}
        </TxtQuestion>
        <TitleQuestion>
          Manera en que Ashoka y su red ayudarán a escalar compromiso
        </TitleQuestion>
        <WrapperCheckbox>
          <WrapperImgTxt>
            <IconPointSvg src={IconPoint} />
            <TxtIcon>
              {state.questions.map((question) => (
                question.questionId === 8 ? question.answer : null
              ))}
            </TxtIcon>
          </WrapperImgTxt>
        </WrapperCheckbox>
        <TxtQuestion>
          {state.questions.map((question) => (
            question.questionId === 9 ? question.answer : null
          ))}
        </TxtQuestion>
        <TitleQuestion>
          Me entere de #MillonesdeAgentesdeCambio mediante
        </TitleQuestion>
        <TxtQuestion>
          {state.questions.map((question) => (
            question.questionId === 10 ? question.answer : null
          ))}
        </TxtQuestion>
        <TxtQuestion>
          {state.questions.map((question) => (
            question.questionId === 11 ? question.answer : null
          ))}
        </TxtQuestion>
        <TitleQuestion>Comentarios o dudas adicionales</TitleQuestion>
        <TxtQuestion>
          {state.questions.map((question) => (
            question.questionId === 12 ? question.answer : null
          ))}
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
            <ButtonDecline onClick={() => feedback("declinar")}>Declinar</ButtonDecline>

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
      {rol === "collaborator" ? null : (
        <WrapperIconEdit>
          <ImgEditCommitment src={IconEdit} onClick={openEditCommitmentModal} />
        </WrapperIconEdit>
      )}
      <FeedbackModal 
        openModalFeedback={state.modalFeedback}
        closeModalFeedback={closeModalFeedback}
        option={state.option}
        idCommitmentReport={state.idCommitment}
      />
      <EditCommitmentModal
        open={state.showEditCommitmentModal}
        handleClose={closeEditCommitmentModal}
        dataForm={state.dataForm}
        questions={state.questions}
      />
    </Wrapper>
  );
};

export default CommitmentReport;
