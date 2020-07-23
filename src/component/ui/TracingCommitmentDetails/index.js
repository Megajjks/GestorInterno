import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import AlertModal from "../modals/AlertModal";
import { colorStatus } from "../../../helpers";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";
import DeletedIco from "../../../assets/img/delete.svg";
import AddIco from "../../../assets/img/add.svg";
import Button from "../GeneralButton";
import TaskIco from "../../../assets/img/gestion.svg";
import EyeIco from "../../../assets/img/eye.svg";
import StatusIco from "../../../assets/img/point.svg";
import {
  Wrapper,
  WrapperTask,
  WrapperOpc,
  WrapperColaborators,
  Colaborator,
  NameColaborator,
  BtnDeleteColaborator,
  BtnAddColaborator,
  BtnGroup,
  BtnSecundary,
  Options,
  MenuItems,
  CircleStatus,
} from "./styled";

const TracingCommitmentDetails = (props) => {
  const history = useHistory();
  const [commitment, setCommitment] = useState(history.location.state);
  const [delColModal, setDelColModal] = useState(false);
  const [addColaborator, setAddColaborator] = useState(false);
  const [dropdownStatus, setDropdownStatus] = useState(null);

  const handleDelColModal = () => {
    setDelColModal(true);
  };

  const handlecloseModal = () => {
    setDelColModal(false);
  };

  const handleAddColaborator = () => {
    setAddColaborator(true);
  };

  const deleteCollaborator = (id) => {
    setDelColModal(false);
  };

  const postColaborator = () => {
    //function to add colaborator
    setAddColaborator(false);
  };

  const addTask = () => {
    //function to create Task
    console.log("add task");
  };

  const showDetailCommitment = () => {
    history.push("/commitment_report");
  };
  const handleDropdownStatus = (event) => {
    setDropdownStatus(event.currentTarget);
  };

  const handleCloseDropdownStatus = () => {
    setDropdownStatus(null);
  };

  const changeStatus = () => {
    //Put request that change the status of commitment
    setDropdownStatus(null);
  };

  return (
    <Fragment>
      <h1> {commitment.organization} </h1>
      <Wrapper>
        <WrapperTask>Lista de tareas de seguimiento</WrapperTask>
        <WrapperOpc>
          <Options>
            <Button title="Nueva tarea" ico={TaskIco} onClick={addTask} />
            <Button
              title="Detalles"
              type="secundary"
              ico={EyeIco}
              onClick={showDetailCommitment}
            />
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              title="En proceso"
              type="status"
              color={colorStatus("en proceso")}
              ico={StatusIco}
              onClick={handleDropdownStatus}
            />
            <Menu
              id="simple-menu"
              anchorEl={dropdownStatus}
              keepMounted
              open={Boolean(dropdownStatus)}
              onClose={handleCloseDropdownStatus}
            >
              <MenuItems onClick={changeStatus}>
                <CircleStatus color={colorStatus("por validar")} />
                Por validar
              </MenuItems>
              <MenuItems onClick={changeStatus}>
                <CircleStatus color={colorStatus("en proceso")} />
                En proceso
              </MenuItems>
              <MenuItems onClick={changeStatus}>
                <CircleStatus color={colorStatus("cumplido")} />
                Cumplido
              </MenuItems>
              <MenuItems onClick={changeStatus}>
                <CircleStatus color={colorStatus("oculto")} />
                Oculto
              </MenuItems>
              <MenuItems onClick={changeStatus}>
                <CircleStatus color={colorStatus("en correcion")} />
                En correcion
              </MenuItems>
              <MenuItems onClick={changeStatus}>
                <CircleStatus color={colorStatus("rechazado")} />
                Rechazado
              </MenuItems>
            </Menu>
          </Options>
          <WrapperColaborators>
            <h2>Colaboradores</h2>
            <Colaborator>
              <AccountCircleIcon style={{ fontSize: 50 }} />
              <NameColaborator> {commitment.colaborators} </NameColaborator>
              <BtnDeleteColaborator
                src={DeletedIco}
                alt="ico_deleted"
                onClick={handleDelColModal}
              />
            </Colaborator>
            {addColaborator ? (
              <WrapperColaborators>
                <Autocomplete
                  style={{ width: "15em" }}
                  multiple
                  id="tags-standard"
                  options={users}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      color="secondary"
                      label="Agregue colaboradores"
                    />
                  )}
                />
                <BtnGroup>
                  <BtnSecundary onClick={() => setAddColaborator(false)}>
                    Cancelar
                  </BtnSecundary>
                  <BtnSecundary primary onClick={postColaborator}>
                    Guardar
                  </BtnSecundary>
                </BtnGroup>
              </WrapperColaborators>
            ) : (
              <BtnAddColaborator onClick={handleAddColaborator}>
                <img src={AddIco} alt="add-ico" style={{ width: "18px" }} />
                <BtnSecundary primary>Agregar colaborador</BtnSecundary>
              </BtnAddColaborator>
            )}
          </WrapperColaborators>
        </WrapperOpc>
      </Wrapper>
      <AlertModal
        title="¿Estas seguro?"
        message="Estas seguro de eliminar al colaborador"
        open={delColModal}
        handleClose={handlecloseModal}
        callback={() => deleteCollaborator("wsfq1")}
      />
    </Fragment>
  );
};

const users = [
  { id: "1", name: "Alonzo Martin" },
  { id: "2", name: "Fedra Lopez" },
  { id: "3", name: "Eugenia Salazar" },
  { id: "4", name: "Javier Enrique" },
  { id: "5", name: "Frida Perez" },
  { id: "6", name: "Aurora May" },
];

export default TracingCommitmentDetails;
