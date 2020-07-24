import React, { useState } from "react";
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

const CommitmentReport = ({ isDetail, rol }) => {
  const [dataForm, setDataForm] = useState({
    id: "1",
    first_name: "Anáhuac ",
    last_name: "Queretaro",
    organization: "La Universidad Anáhuac Queretaro",
    sector: "Sector privado",
    city: "Querétaro",
    state: "Querétaro",
    position: "Coordinación",
    email: "anahuac@gmail.com",
    phone: "5514789545",
    logo: "path",
    img: "path",
    question_1:
      "La Universidad Anáhuac Quéretaro se compromete a capacitar a docentes provenientes del 40% de las carreras, abrir un grupo estudiantil que cree emprendimientos sociales, generar un bootcamp de emprendimiento social y promover conferencias sobre innovación social generando al menos 153 Agentes de Cambio durante el ciclo escolar 2019-2020 para contribuir a la Comunidad de Agentes de Cambio a través de la difusión y sensibilización acerca del  emprendimiento e innovación social así como formación de los estudiantes desde la empatía y la corresponsabilidad.",
    question_2: "",
    question_3:
      "Ashoka México, Centroamérica y el Caribe, CEMEX y el Técnologico de Monterrey",
    question_4:
      "Codiseño y lanzamiento de la convocatoria del Premio CEMEX-TEC con un bootcamp de emprendimiento social y cambio sistématico para los ganadores",
    question_5: "Enero a Octubre 2020",
    question_6:
      "Fortalecer y conectar lideres innovadores sociales de todo el mundo, con la finalidad de aumentar su impacto y que ellos puedan replicar el conocimiento adquirido en sus contextos",
    question_7:
      "Se va a impactar a 36 líderes agentes de cambio de manera distinta",
    question_8: "Asesorias Especializadas",
    question_9: "",
    question_10: "Facebook",
    question_11: "",
    question_12: "",
  });
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showEditCommitmentModal, setShowEditCommitmentModal] = useState(false);

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
      <Img src={Logo} />
      <WrapperFormData>
        <TxtTitleOrganization>{dataForm.organization}</TxtTitleOrganization>
        <WrapperImgTxt>
          <Icon src={IconUser} />
          <TxtIcon>
            {dataForm.first_name} {dataForm.last_name}
          </TxtIcon>
        </WrapperImgTxt>
        <TxtQuestion style={{ marginTop: "12px" }}>
          {dataForm.question_1}
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
        <TxtQuestion>{dataForm.question_3}</TxtQuestion>
        <TitleQuestion>Acción que se va a implementar</TitleQuestion>
        <TxtQuestion>{dataForm.question_4}</TxtQuestion>
        <TitleQuestion>
          Periodo de tiempo para desarrollo de compromiso
        </TitleQuestion>
        <TxtQuestion>{dataForm.question_5}</TxtQuestion>
        <TitleQuestion>
          Contribución de compromiso para generar más Agentes de Cambio
        </TitleQuestion>
        <TxtQuestion>{dataForm.question_6}</TxtQuestion>
        <TitleQuestion>
          Agentes de Cambio para impactar con compromiso
        </TitleQuestion>
        <TxtQuestion>{dataForm.question_7}</TxtQuestion>
        <TitleQuestion>
          Manera en que Ashoka y su red ayudarán a escalar compromiso
        </TitleQuestion>
        <WrapperCheckbox>
          <WrapperImgTxt>
            <IconPointSvg src={IconPoint} />
            <TxtIcon>{dataForm.question_8}</TxtIcon>
          </WrapperImgTxt>
        </WrapperCheckbox>
        <TxtQuestion>
          {/* En caso de elegir la opción de "otro" (pregunta 9) */}
        </TxtQuestion>
        <TitleQuestion>
          Me entere de #MillonesdeAgentesdeCambio mediante
        </TitleQuestion>
        <TxtQuestion>{dataForm.question_10}</TxtQuestion>
        <TxtQuestion>
          {/* En caso de elegir la opción de "otro" (pregunta 11)*/}
        </TxtQuestion>
        <TitleQuestion>Comentarios o dudas adicionales</TitleQuestion>
        <TxtQuestion>
          {/* En caso de elegir la opción de "otro" (pregunta 12)*/}
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
