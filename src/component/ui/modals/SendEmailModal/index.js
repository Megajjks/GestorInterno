import React, { Fragment, useState, useContext } from "react";
import { CommitmentFilterContext } from "../../../context/CommitmentFilterContext";
import { actions } from "../../../context/CommitmentFilterContext/actions";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Btn from "../../GeneralButton";
import api from "../../../../helpers/api";
import { BtnGroup, WrapperButtons, ButtonAccept, ButtonDecline } from "./styled";

const SendEmailModal = () => {
    const { state, dispatch } = useContext(CommitmentFilterContext);
    const [open, setOpen] = useState(false);
    const [dataSendEmail, setDataSendEmail] = useState(null);
    const [dataFilter, setDataFilter] = useState({
        subject: "",
        message: "",
    });
    
    const sendEmail = () => {
        handleClickOpen();
    }
    
    const handleClickOpen = () => {
        setOpen(true);
        //Limpiar campos de message y subject en el state
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateDataSendEmail = (e) => {
        setDataFilter({
          ...dataFilter,
          [e.target.name]: e.target.value,
        });
      };

    function CheckData () {
        if (state.commitmentsFilter.length === 0 || 
            (state.searchFilter.collaborator === "" && state.searchFilter.area === "" && 
            state.searchFilter.state === "" && state.searchFilter.sector === "" && 
            state.searchFilter.status === "")) {
            return <DialogContentText>
                    No hay compromisos seleccionados para enviar correo
                </DialogContentText>
        } else {
            return <Fragment>
                    <DialogContentText>
                        Se enviará correo a los siguientes compromisos con:
                    </DialogContentText>
                    {state.searchFilter.collaborator ?
                        <DialogContentText>
                            {`Colaborador: ${"colaborador :)"}`}
                        </DialogContentText> : null
                    }
                    {state.searchFilter.area ?
                        <DialogContentText>
                            {`Area: ${state.searchFilter.area}`}
                        </DialogContentText> : null
                    }
                    {state.searchFilter.state ?
                        <DialogContentText>
                            {`Sede: ${state.searchFilter.state}`}
                        </DialogContentText> : null
                    }
                    {state.searchFilter.sector ?
                        <DialogContentText>
                            {`Categoría: ${state.searchFilter.sector}`}
                        </DialogContentText> : null
                    }
                    {state.searchFilter.status ?
                        <DialogContentText>
                            {`Estatus: ${state.searchFilter.status}`}
                        </DialogContentText> : null
                    }
                </Fragment>
        }
    }

    const sendEmailFilter = async () => {
        //Funcion para evitar datos vacios de subject y message
        try {
            if (state.commitmentsFilter.length === 0 || 
                (state.searchFilter.collaborator === "" && state.searchFilter.area === "" && 
                state.searchFilter.state === "" && state.searchFilter.sector === "" && 
                state.searchFilter.status === "")) {
                alert("El array esta vacio")
                //alerta o mensaje de array vacio, activar
            } else {
                if (state.searchFilter.collaborator !== "") {
                    alert("tiene colaborador")
                    setDataSendEmail({
                        ...dataSendEmail,
                        collaborator: state.searchFilter.collaborator
                    })
                } if (state.searchFilter.area !== "") {
                    alert("tiene area")
                    setDataSendEmail({
                        ...dataSendEmail,
                        area: state.searchFilter.area
                    })
                } if (state.searchFilter.state !== "") {
                    alert("tiene estado")
                    setDataSendEmail({
                        ...dataSendEmail,
                        state: state.searchFilter.state
                    })
                } if (state.searchFilter.sector !== "") {
                    alert("tiene sector")
                    setDataSendEmail({
                        ...dataSendEmail,
                        sector: state.searchFilter.sector
                    })
                } if (state.searchFilter.status !== "") {
                    alert("tiene status")
                    setDataSendEmail({
                        ...dataSendEmail,
                        status: state.searchFilter.status
                    })
                }
                /*setDataSendEmail({
                    ...dataSendEmail,
                    subject: dataFilter.subject,
                    message: dataFilter.message
                })*/
                /*const response = await api.post("/email/group/", dataSendEmail);
                if (response) {
                    alert("Correo enviado")
                }*/
            }
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <Fragment>
            <BtnGroup>
                <h1 style={{ marginRight: "10.5em" }}>
                    Seguimiento de los compromisos</h1>
                <Btn
                    title="Enviar Correo"
                    size="20%"
                    type="primary-loader"
                    onClick={sendEmail}
                />
            </BtnGroup>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Envio de correos</DialogTitle>
                <DialogContent>
                    <CheckData/>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="subject"
                        color="secondary" 
                        label="Titulo de correo"
                        onChange={updateDataSendEmail}
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="message"
                        color="secondary" 
                        label="Mensaje de correo"
                        onChange={updateDataSendEmail}
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                <WrapperButtons>
                    <ButtonDecline onClick={handleClose}>
                        Cerrar
                    </ButtonDecline>
                    <ButtonAccept onClick={sendEmailFilter} style={{width: "27em"}}>
                        Enviar
                    </ButtonAccept>
                </WrapperButtons>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default SendEmailModal;