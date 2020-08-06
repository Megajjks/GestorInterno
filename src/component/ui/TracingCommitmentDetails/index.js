import React, { useState, Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../GeneralButton";
import TaskList from "../TaskList";
import CollaboratorCardList from "../CollaboratorCardList";
import { dataStatus } from "../../../helpers";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";

import AddIco from "../../../assets/img/add.svg";
import TaskIco from "../../../assets/img/gestion.svg";
import EyeIco from "../../../assets/img/eye.svg";
import StatusIco from "../../../assets/img/point.svg";
import ModalCreateTask from "../modals/CreateTaskModal";
import {
  Wrapper,
  WrapperTask,
  WrapperOpc,
  WrapperColaborators,
  BtnAddColaborator,
  BtnGroup,
  BtnSecundary,
  Options,
  MenuItems,
  CircleStatus,
} from "./styled";
import api from "../../../helpers/api";

const TracingCommitmentDetails = ({ rol }) => {
  const history = useHistory();
  const [commitment, setCommitment] = useState(history.location.state);
  const [addColaborator, setAddColaborator] = useState(false);
  const [dropdownStatus, setDropdownStatus] = useState(null);
  const token = JSON.parse(localStorage.getItem("login_data")).accessToken;

  //HTTP REQUEST FUNCTION

  //post to colaborador
  const postColaborator = () => {
    //function to add colaborator
    setAddColaborator(false);
  };

  //put to commitment
  const changeStatus = async (status) => {
    //Put request that change the status of commitment
    try {
      const response = await api.put(
        `/commitments/${commitment.id}/${status}`,
        { headers: { Authorization: token } }
      );
      setCommitment({ ...commitment, status });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    setDropdownStatus(null);
  };

  //functions add collaborator
  const handleAddColaborator = () => {
    setAddColaborator(true);
  };

  const [openCreateTask, setOpenCreateTask] = useState(false);

  //functions to open, close, add Task

  const ClickOpenModalCreateTask = () => {
    setOpenCreateTask(true);
  };

  const closeModalCreateTask = () => {
    setOpenCreateTask(false);
  };

  const addTask = () => {
    console.log("add task");
    ClickOpenModalCreateTask();
  };

  //function to show details
  const showDetailCommitment = () => {
    history.push({
      pathname: `/commitment_report/${commitment.id}`,
      state: { isDetail: true },
    });
  };

  //function to view and edit status
  const handleDropdownStatus = (event) => {
    setDropdownStatus(event.currentTarget);
  };

  const handleCloseDropdownStatus = () => {
    setDropdownStatus(null);
  };

  return (
    <Fragment>
      <h1> {commitment.organization} </h1>
      <Wrapper>
        <WrapperTask>
          <TaskList></TaskList>
        </WrapperTask>
        <WrapperOpc>
          <Options>
            {/*this button (add task) will be hidden if  user_id not match with id collaborator*/}
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
              title={dataStatus(commitment.status).value}
              type="status"
              color={dataStatus(commitment.status).background}
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
              <MenuItems onClick={() => changeStatus("proceso")}>
                <CircleStatus color={dataStatus("proceso").background} />
                En proceso
              </MenuItems>
              <MenuItems onClick={() => changeStatus("cumplido")}>
                <CircleStatus color={dataStatus("cumplido").background} />
                Cumplido
              </MenuItems>
              {rol === "collaborator" ? null : (
                <span>
                  <MenuItems onClick={() => changeStatus("validando")}>
                    <CircleStatus color={dataStatus("validando").background} />
                    Por validar
                  </MenuItems>
                  <MenuItems onClick={() => changeStatus("oculto")}>
                    <CircleStatus color={dataStatus("oculto").background} />
                    Oculto
                  </MenuItems>
                  <MenuItems onClick={() => changeStatus("correcion")}>
                    <CircleStatus color={dataStatus("correcion").background} />
                    En correcion
                  </MenuItems>
                  <MenuItems onClick={() => changeStatus("declinado")}>
                    <CircleStatus color={dataStatus("declinado").background} />
                    Rechazado
                  </MenuItems>
                </span>
              )}
            </Menu>
          </Options>
          <WrapperColaborators>
            <CollaboratorCardList
              collaborators={commitment.collaborators}
              rolUser="1"
            />
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
            ) : rol === "collaborator" ? null : (
              <BtnAddColaborator onClick={handleAddColaborator}>
                <img src={AddIco} alt="add-ico" style={{ width: "18px" }} />
                <BtnSecundary primary>Agregar colaborador</BtnSecundary>
              </BtnAddColaborator>
            )}
          </WrapperColaborators>
        </WrapperOpc>
      </Wrapper>
      <ModalCreateTask
        openNewTask={openCreateTask}
        closeModalNewTask={closeModalCreateTask}
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
