import React, { Fragment, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Btn from "../../GeneralButton";
import api from "../../../../helpers/api";
import { BtnGroup, WrapperButtons, ButtonAccept, ButtonDecline } from "./styled";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const SendEmailModal = ({state, typeTable}) => {
    const [open, setOpen] = useState(false);
    const [dataFilter, setDataFilter] = useState({
        subject: "",
        message: "",
    });
    const [error, setError] = useState({
        status: false,
        message: "",
        typeMessage: ""
    });

    function AlertError(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleCloseSendEmail = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setError({
          ...error,
          status: false,
          typeMessage: ""
        });
    };
    
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
        if (state.commitments.length === 0 || 
            (state.searchFilter.agent === "" && state.searchFilter.collaborator === "" && state.searchFilter.area === "" && 
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
                {state.searchFilter.agent ?
                    <DialogContentText>
                        {`Agente: ${"agente :)"}`}
                    </DialogContentText> : null
                }
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
        try {
            if (state.commitments.length === 0 || 
                (state.searchFilter.agent === "" && state.searchFilter.collaborator === "" && state.searchFilter.area === "" && 
                state.searchFilter.state === "" && state.searchFilter.sector === "" && 
                state.searchFilter.status === "")) {
                setError({
                    status: true,
                    message:
                        "Los campos para enviar correo estan vacios, intentalo nuevamente", 
                    typeMessage: "error"
                });
            } else {
                let params = null;
                let response = null;
                if (typeTable === "pool") {
                    params = new URLSearchParams({
                        searchbox: `${state.searchFilter.agent}`,
                        state: `${state.searchFilter.state}`,
                        area: `${state.searchFilter.area}`,
                        status: `${state.searchFilter.status}`,
                        sector: `${state.searchFilter.sector}`,
                    }).toString();
                    response = await api.post(`/email/pool/?${params}`, dataFilter);
                } else {
                    params = new URLSearchParams({
                        searchbox: `${state.searchFilter.collaborator}`,
                        state: `${state.searchFilter.state}`,
                        area: `${state.searchFilter.area}`,
                        status: `${state.searchFilter.status}`,
                        sector: `${state.searchFilter.sector}`,
                    }).toString();
                    response = await api.post(`/email/tracing/?${params}`, dataFilter);
                }
                if (response) {
                    setDataFilter({
                        subject: "",
                        message: "",
                    });
                    setError({
                        status: true,
                        message:
                          "¡Excelente!, Su petición ha sido enviada exitosamente.", 
                        typeMessage: "success"
                      });
                    setTimeout(handleClose, 3000);
                }
            }
        } catch(err) {
            console.log(err)
            setError({
                status: true,
                message:
                  "Vaya, estamos teniendo problemas de conexión al enviar tus datos, intenta de nuevo", 
                typeMessage: "error"
            });
        }
    }

    return (
        <Fragment>
            <Btn
                title="Enviar Correo"
                size="20%"
                type="primary-loader"
                onClick={sendEmail}
            />
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
            <Snackbar
                open={error.status}
                autoHideDuration={4000}
                onClose={handleCloseSendEmail}
            >
                <AlertError onClose={handleCloseSendEmail} severity={error.typeMessage}>
                {error.message}
                </AlertError>
            </Snackbar>
        </Fragment>
    );
}

export default SendEmailModal;