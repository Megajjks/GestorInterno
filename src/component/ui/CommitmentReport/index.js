import React, { useState, useEffect } from "react";
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
import Logo from "../../../assets/img/logcom.png";
import IconEdit from "../../../assets/img/editar.svg";
import IconUser from "../../../assets/img/usercard.svg";
import IconCity from "../../../assets/img/location1.svg";
import IconState from "../../../assets/img/location2.svg";
import IconPoint from "../../../assets/img/point.svg";
import IconMail from "../../../assets/img/mail.svg";
import IconPhone from "../../../assets/img/phone.svg";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import ListItemText from "@material-ui/core/ListItemText";
import EditCommitmentModal from "../modals/EditCommitmentModal";
import DynamicScrollToTop from "../../hooks/DynamicScrollToTop";
import api from "../../../helpers/api";

const CommitmentReport = ({ isDetail, rol }) => {

  const [dataForm, setDataForm] = useState({});
  const [questions, setQuestions] = useState([]);
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showEditCommitmentModal, setShowEditCommitmentModal] = useState(false);

  useEffect(() => {
    const fetchCommitmentReport = async () => {
      try {
  
        const token = JSON.parse(localStorage.getItem("login_data")).accessToken;
        const idCommitment = history.location.state.id;
  
        const response = await api.get(`/commitments/${idCommitment}`, {
          headers: { Authorization: token }
        });
        
        setDataForm(response.data)
        setQuestions(response.data.answers)
        console.log(response.data.answers)
        
      } catch (e) {
        console.log(e);
      }
    }; 
    fetchCommitmentReport();
  }, []);

  const feedback = () => {
    ClickOpenModalFeedback();
  };

  const ClickOpenModalFeedback = () => {
    setOpen(true);
  };

  const closeModalFeedback = () => {
    setOpen(false);
  };

  const openModalAcceptFeedback = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeModalAcceptFeedback = () => {
    setAnchorEl(null);
  };

  const openEditCommitmentModal = () => {
    setShowEditCommitmentModal(true);
  };

  const closeEditCommitmentModal = () => {
    setShowEditCommitmentModal(false);
  };

  return (
    <Wrapper>
      <DynamicScrollToTop />
      <Img src={Logo} />
      <WrapperFormData>
        <TxtTitleOrganization>{dataForm.organization}</TxtTitleOrganization>
        <WrapperImgTxt>
          <Icon src={IconUser} />
          <TxtIcon>
            {dataForm.firstName} {dataForm.lastName}
          </TxtIcon>
        </WrapperImgTxt>
        <TxtQuestion style={{ marginTop: "12px" }}>
          {questions.map((question) => (
            question.questionId === 1 ? question.answer : null
          ))}
        </TxtQuestion>
        <Sector>
          <TxtSector>Sector: </TxtSector>
          <TypeSector>{dataForm.sector}</TypeSector>
        </Sector>
        <Position>
          <TxtPosition>Cargo: </TxtPosition>
          <TypePosition>{dataForm.position}</TypePosition>
        </Position>
        <WrapperLocation>
          <WrapperImgTxt>
            <Icon src={IconState} />
            <TxtIcon>{dataForm.city}</TxtIcon>
          </WrapperImgTxt>
          <WrapperImgTxt>
            <Icon src={IconCity} />
            <TxtIcon>{dataForm.state}</TxtIcon>
          </WrapperImgTxt>
        </WrapperLocation>
        <TitleQuestion>
          Organizaciones o personas que se comprometen
        </TitleQuestion>
        <TxtQuestion>
          {questions.map((question) => (
            question.questionId === 3 ? question.answer : null
          ))}
        </TxtQuestion>
        <TitleQuestion>Acción que se va a implementar</TitleQuestion>
        <TxtQuestion>
          {questions.map((question) => (
            question.questionId === 4 ? question.answer : null
          ))}
        </TxtQuestion>
        <TitleQuestion>
          Periodo de tiempo para desarrollo de compromiso
        </TitleQuestion>
        <TxtQuestion>
          {questions.map((question) => (
            question.questionId === 5 ? question.answer : null
          ))}
        </TxtQuestion>
        <TitleQuestion>
          Contribución de compromiso para generar más Agentes de Cambio
        </TitleQuestion>
        <TxtQuestion>
          {questions.map((question) => (
            question.questionId === 6 ? question.answer : null
          ))}
        </TxtQuestion>
        <TitleQuestion>
          Agentes de Cambio para impactar con compromiso
        </TitleQuestion>
        <TxtQuestion>
          {questions.map((question) => (
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
              {questions.map((question) => (
                question.questionId === 8 ? question.answer : null
              ))}
            </TxtIcon>
          </WrapperImgTxt>
        </WrapperCheckbox>
        <TxtQuestion>
          {questions.map((question) => (
            question.questionId === 9 ? question.answer : null
          ))}
        </TxtQuestion>
        <TitleQuestion>
          Me entere de #MillonesdeAgentesdeCambio mediante
        </TitleQuestion>
        <TxtQuestion>
          {questions.map((question) => (
            question.questionId === 10 ? question.answer : null
          ))}
        </TxtQuestion>
        <TxtQuestion>
          {questions.map((question) => (
            question.questionId === 11 ? question.answer : null
          ))}
        </TxtQuestion>
        <TitleQuestion>Comentarios o dudas adicionales</TitleQuestion>
        <TxtQuestion>
          {questions.map((question) => (
            question.questionId === 12 ? question.answer : null
          ))}
        </TxtQuestion>
        <TitleQuestion>Contacto</TitleQuestion>
        <WrapperContact>
          <WrapperImgTxt>
            <Icon src={IconPhone} />
            <TxtIcon>{dataForm.phone}</TxtIcon>
          </WrapperImgTxt>
          <WrapperImgTxt>
            <Icon src={IconMail} />
            <TxtIcon>{dataForm.email}</TxtIcon>
          </WrapperImgTxt>
        </WrapperContact>
        {history.location.state.isDetail ? null : (
          <WrapperButtons>
            <ButtonDecline onClick={() => feedback()}>Declinar</ButtonDecline>

            <ButtonAccept onClick={openModalAcceptFeedback}>
              Aceptar Compromiso
            </ButtonAccept>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={closeModalAcceptFeedback}
            >
              <StyledMenuItem>
                <ListItemText primary="Aceptar" />
              </StyledMenuItem>
              <StyledMenuItem onClick={() => feedback()}>
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

      <Dialog
        open={open}
        onClose={closeModalFeedback}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Respuesta para Compromiso"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Escribe aquí el titulo del mensaje que se enviará
          </DialogContentText>
          <TextField
            type="text"
            name="titleFeedback"
            label="Titulo de Mensaje"
            color="secondary"
            fullWidth
            margin="dense"
            style={{ marginTop: "10px" }}
          />
          <TextField
            type="text"
            name="descriptionFeedback"
            label="Descripción de Mensaje"
            color="secondary"
            fullWidth
            margin="dense"
            style={{ marginTop: "10px" }}
          />
          <ButtonAccept>Enviar</ButtonAccept>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModalFeedback} color="secondary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
      <EditCommitmentModal
        open={showEditCommitmentModal}
        handleClose={closeEditCommitmentModal}
      />
    </Wrapper>
  );
};

export default CommitmentReport;
