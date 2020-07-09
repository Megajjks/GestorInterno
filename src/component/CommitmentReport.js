import React, {useState} from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/logcom.png'
import IconEdit from '../assets/img/editar.svg';
import IconUser from '../assets/img/usercard.svg';
import IconCity from '../assets/img/location1.svg';
import IconState from '../assets/img/location2.svg';
import IconPoint from '../assets/img/point.svg';
import IconMail from '../assets/img/mail.svg';
import IconPhone from '../assets/img/phone.svg';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const Wrapper = styled.div`
    background-color: ${({ theme: { colors } }) => colors.white};
    justify-content:space-between;
    display:flex;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 #ddd;
    transition: transform .2s ease-out;
    margin-bottom: 4em;
`;

const Img = styled.img`
    width:25%;
    height:50%;
    border-radius: 100%;
    margin-left: 2em;
    margin-top: 4em;
`;

const WrapperFormData = styled.div`
    width:90%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const WrapperIconEdit = styled.div`
    margin-top: 5em;
    width:10%;
    display:flex;
    flex-direction:column;
`;

const ImgEditCommitment = styled.img`
    width:30px;
    height:30px;
`;

const WrapperImgTxt = styled.div`
    width:50%;
    display:flex;
    flex-direction:row;
`;

const Icon = styled.img`
    width:15px;
    height:15px;
`;

const IconPointSvg = styled.img`
    width:12px;
    height:12px;
`;

const TxtTitleOrganization = styled.h1`
    color: ${(props) => props.theme.colors.black};
    font-weight:900;
    font-size:2em;
    margin-top: 4.5rem;
`;

const TxtTitleCommitment = styled.h1`
    color: ${(props) => props.theme.colors.black};
    font-weight:800;
    font-size:1.5em;
`;

const TxtIcon = styled.h1`
    color: ${(props) => props.theme.colors.greyTitle};
    font-weight:200;
    font-size:12px;
    margin-top:0;
    margin-left:7px;
`;

const TitleQuestion = styled.h1`
    color: ${(props) => props.theme.colors.black};
    font-weight:800;
    font-size:1em;
`;

const TxtQuestion = styled.h1`
    width:78%;
    color: ${(props) => props.theme.colors.greyTitle};
    font-weight:200;
    font-size:12px;
    margin-top:0;
`;

const Sector = styled.div`
    width:50%;
    display:flex;
    flex-direction:row;
`;

const TxtSector = styled.h1`
    color: ${(props) => props.theme.colors.black};
    font-weight:800;
    font-size:1em;
`;

const TypeSector = styled.h1`
    color: ${(props) => props.theme.colors.black};
    font-weight:500;
    font-size:0.8em;
    margin-left: 7px;
    margin-top: 1em;
`;

const Position = styled.div`
    width:50%;
    display:flex;
    flex-direction:row;
    margin-bottom: 6px;
`;

const TxtPosition = styled.h1`
    color: ${(props) => props.theme.colors.black};
    font-weight:800;
    font-size:1em;
`;

const TypePosition = styled.h1`
    color: ${(props) => props.theme.colors.black};
    font-weight:500;
    font-size:0.8em;
    margin-left: 7px;
    margin-top: 1em;
`;

const WrapperLocation = styled.div`
    width:40%;
    display:flex;
    flex-direction:row;
`;

const WrapperCheckbox = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
`;

const WrapperContact = styled.div`
    width:40%;
    display:flex;
    flex-direction:row;
`;

const WrapperButtons = styled.div`
    width:90%;
    display:flex;
    flex-direction:row;
    margin-top: 2em;
    margin-bottom: 2em;
`;

const ButtonAccept = styled.button`
    background-color: ${(props) => props.theme.colors.orange};
    width: 100%;
    padding: 0.5rem;
    color: #fff;
    border: none;
    transition: background-color .3s ease;
    margin-top: 1rem;
    box-shadow: 2px 2px 5px #999;
    border-radius: 1px;
    font-weight:600;
    font-size:1em;

    box-shadow: 2px 5px 10px rgb(200,191,190);

    &:hover{
        cursor:pointer;
        transform: translateY(-0.125rem);
        box-shadow: 0 0.25rem 0.5rem 0.25rem rgba(0, 0, 0, 0.16);
    }
    &:active{
        transform: translateY(-0.-125rem);
        box-shadow: none;
    }
    &:focus {
        outline: none;
    }
`;

const ButtonDecline = styled.button`
    background-color: ${(props) => props.theme.colors.white};
    width: 40%;
    padding: 0.5rem;
    color: ${(props) => props.theme.colors.orange};
    border: 3px solid #F6503E;
    transition: background-color .3s ease;
    margin-top: 1rem;
    box-shadow: 2px 2px 5px #999;
    border-radius: 1px;
    margin-left: 15em;
    margin-right: 1em;
    font-weight:600;
    font-size:1em;
    box-shadow: 2px 5px 10px rgb(200,191,190);

    &:hover{
        cursor:pointer;
        transform: translateY(-0.125rem);
        background-color: ${(props) => props.theme.colors.orange};
        color: ${(props) => props.theme.colors.white};
        box-shadow: 0 0.25rem 0.5rem 0.25rem rgba(0, 0, 0, 0.16);
    }
    &:active{
        transform: translateY(-0.-125rem);
        box-shadow: none;
    }
    &:focus {
        outline: none;
    }
`;

const CommitmentReport = () => {
    const [dataForm, setDataForm] = useState({
        id: '1',
        first_name: 'Anáhuac ',
        last_name: 'Queretaro',
        organization: 'La Universidad Anáhuac Queretaro',
        sector: 'Sector privado',
        city: 'Querétaro',
        state: 'Querétaro',
        position: 'Coordinación',
        email: 'anahuac@gmail.com',
        phone: '5514789545',
        logo: 'path',
        img: 'path',
        title: 'Hacemos la lucha',
        question_1: 'La Universidad Anáhuac Quéretaro se compromete a capacitar a docentes provenientes del 40% de las carreras, abrir un grupo estudiantil que cree emprendimientos sociales, generar un bootcamp de emprendimiento social y promover conferencias sobre innovación social generando al menos 153 Agentes de Cambio durante el ciclo escolar 2019-2020 para contribuir a la Comunidad de Agentes de Cambio a través de la difusión y sensibilización acerca del  emprendimiento e innovación social así como formación de los estudiantes desde la empatía y la corresponsabilidad.',
        question_2:'',
        question_3:'Ashoka México, Centroamérica y el Caribe, CEMEX y el Técnologico de Monterrey',
        question_4:'Codiseño y lanzamiento de la convocatoria del Premio CEMEX-TEC con un bootcamp de emprendimiento social y cambio sistématico para los ganadores',
        question_5:'Enero a Octubre 2020',
        question_6:'Fortalecer y conectar lideres innovadores sociales de todo el mundo, con la finalidad de aumentar su impacto y que ellos puedan replicar el conocimiento adquirido en sus contextos',
        question_7:'Se va a impactar a 36 líderes agentes de cambio de manera distinta',
        question_8:'Asesorias Especializadas',
        question_9:'',
        question_10:'Facebook',
        question_11:'',
        question_12:'',
    })

    const [open, setOpen] = React.useState(false);

    const feedback = () => {
        ClickOpenModalFeedback()
    }

    const ClickOpenModalFeedback = () => {
        setOpen(true);
    };

    const closeModalFeedback = () => {
        setOpen(false);
    };

    return (
        <Wrapper>
            <Img src={Logo}/>
            <WrapperFormData>
                <TxtTitleOrganization>
                    {dataForm.organization}
                </TxtTitleOrganization>
                <WrapperImgTxt>
                    <Icon src={IconUser}/> 
                    <TxtIcon>{dataForm.first_name} {dataForm.last_name}</TxtIcon>
                </WrapperImgTxt>
                <TxtTitleCommitment>{dataForm.title}</TxtTitleCommitment>
                <TxtQuestion>
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
                        <Icon src={IconState}/> 
                        <TxtIcon>{dataForm.city}</TxtIcon>
                    </WrapperImgTxt>
                    <WrapperImgTxt>
                        <Icon src={IconCity}/> 
                        <TxtIcon>{dataForm.state}</TxtIcon>
                    </WrapperImgTxt>
                </WrapperLocation>
                <TitleQuestion>Organizaciones o personas que se comprometen</TitleQuestion>
                <TxtQuestion>
                    {dataForm.question_3}
                </TxtQuestion>
                <TitleQuestion>Acción que se va a implementar</TitleQuestion>
                <TxtQuestion>
                    {dataForm.question_4} 
                </TxtQuestion>
                <TitleQuestion>Periodo de tiempo para desarrollo de compromiso</TitleQuestion>
                <TxtQuestion>
                    {dataForm.question_5} 
                </TxtQuestion>
                <TitleQuestion>Contribución de compromiso para generar más Agentes de Cambio</TitleQuestion>
                <TxtQuestion>
                    {dataForm.question_6} 
                </TxtQuestion>
                <TitleQuestion>Agentes de Cambio para impactar con compromiso</TitleQuestion>
                <TxtQuestion>
                    {dataForm.question_7}
                </TxtQuestion>
                <TitleQuestion>Manera en que Ashoka y su red ayudarán a escalar compromiso</TitleQuestion>
                <WrapperCheckbox>
                    <WrapperImgTxt>
                        <IconPointSvg src={IconPoint}/> 
                        <TxtIcon>{dataForm.question_8}</TxtIcon>
                    </WrapperImgTxt>
                </WrapperCheckbox>
                <TxtQuestion>
                    {/* En caso de elegir la opción de "otro" (pregunta 9) */}
                </TxtQuestion>
                <TitleQuestion>Me entere de #MillonesdeAgentesdeCambio mediante</TitleQuestion>
                <TxtQuestion>
                    {dataForm.question_10}
                </TxtQuestion>
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
                        <Icon src={IconPhone}/> 
                        <TxtIcon>{dataForm.phone}</TxtIcon>
                    </WrapperImgTxt>
                    <WrapperImgTxt>
                        <Icon src={IconMail}/> 
                        <TxtIcon>{dataForm.email}</TxtIcon>
                    </WrapperImgTxt>
                </WrapperContact>
                <WrapperButtons>
                    <ButtonDecline
                        onClick={() => feedback()}
                        >Declinar</ButtonDecline>
                    <ButtonAccept>Aceptar Compromiso</ButtonAccept>
                </WrapperButtons>
            </WrapperFormData>
            <WrapperIconEdit>
                <ImgEditCommitment src={IconEdit}/>
            </WrapperIconEdit>
            <>
                <Dialog
                    open={open}
                    onClose={closeModalFeedback}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Declinar Compromiso"}</DialogTitle>
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
                            style={{marginTop:"10px"}}
                        />
                        <TextField 
                            type="text"
                            name="descriptionFeedback"
                            label="Descripción de Mensaje" 
                            color="secondary" 
                            fullWidth
                            margin="dense"
                            style={{marginTop:"10px"}}
                        />
                        <ButtonAccept>Enviar</ButtonAccept>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeModalFeedback} color="secondary">
                            Cerrar
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        </Wrapper>
    )
}
 
export default CommitmentReport;