import React, { Fragment, useState } from "react";
import Btn from "../../GeneralButton";
import api from "../../../../helpers/api";
import iconEmail from "../../../../assets/img/sendEmail.svg";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const SendEmailModal = ({state, typeTable}) => {
    const [isLoader, setIsLoader] = useState(false);
    //Error in send data
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

    function copyAddressee(idElement) {
        var aux = document.createElement("input");
        aux.setAttribute("value", document.getElementById(idElement).innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        return true;
    }

    const sendEmailFilter = async () => {
        setIsLoader(true);
        try {
            if (state.commitments.length === 0 || 
                (state.searchFilter.agent === "" && state.searchFilter.collaborator === "" && state.searchFilter.area === "" && 
                state.searchFilter.state === "" && state.searchFilter.sector === "" && 
                state.searchFilter.status === "")) {
                setError({
                    status: true,
                    message:
                        "Revisa el uso de los filtros para copiar los destinatarios seleccionados.", 
                    typeMessage: "error"
                });
                setIsLoader(false);
            } else {
                let params = null;
                let response = null;
                let isCopyAddressee = false;
                if (typeTable === "pool") {
                    params = new URLSearchParams({
                        searchbox: `${state.searchFilter.agent}`,
                        state: `${state.searchFilter.state}`,
                        area: `${state.searchFilter.area}`,
                        status: `${state.searchFilter.status}`,
                        sector: `${state.searchFilter.sector}`,
                    }).toString();
                    response = await api.post(`/email/pool/?${params}`);
                    document.getElementById("idAddressee").innerHTML = response.data;
                    isCopyAddressee = copyAddressee("idAddressee");
                } else {
                    params = new URLSearchParams({
                        searchbox: `${state.searchFilter.collaborator}`,
                        state: `${state.searchFilter.state}`,
                        area: `${state.searchFilter.area}`,
                        status: `${state.searchFilter.status}`,
                        sector: `${state.searchFilter.sector}`,
                    }).toString();
                    response = await api.post(`/email/tracing/?${params}`);
                }
                if (response) {
                    setIsLoader(false);
                    if (isCopyAddressee) {
                        setError({
                            status: true,
                            message:
                              "¡Excelente!, Los destinatarios filtrados estan disponibles en el portapapeles.", 
                            typeMessage: "success"
                        });
                    }
                }
            }
        } catch(err) {
            console.log(err)
            setIsLoader(false);
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
            <p id="idAddressee" style={{ display: "none" }}></p>
            <Btn
                title="Copiar Correos"
                size="20%"
                type="primary-loader"
                ico={iconEmail}
                onClick={sendEmailFilter}
                loader={isLoader}
            />
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