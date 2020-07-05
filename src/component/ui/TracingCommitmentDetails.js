import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AlertModal from "./modals/AlertModal";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DeletedIco from "../../assets/img/delete.svg";
import AddIco from "../../assets/img/add.svg";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% auto;
  column-gap: 2em;
`;

const WrapperTask = styled.div`
  place-self: start stretch;
`;

const WrapperOpc = styled.div`
  place-self: start stretch;
`;

const WrapperColaborators = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Colaborator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameColaborator = styled.p`
  width: 10em;
  margin: 0;
  padding: 0 0.5em;
`;

const BtnDeleteColaborator = styled.img`
  width: 1em;
  &:hover {
    cursor: pointer;
  }
`;

const BtnAddColaborator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5em;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BtnSecundary = styled.p`
  margin: 0;
  padding: 0.5em 0.8em;
  color: ${(props) => (props.primary ? "#FF5023" : "#707070")};
  font-weight: 600;
  cursor: pointer;
`;

const TracingCommitmentDetails = (props) => {
  const history = useHistory();
  const [commitment, setCommitment] = useState(history.location.state);
  const [delColModal, setDelColModal] = useState(false);
  const [addColaborator, setAddColaborator] = useState(false);

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
    console.log("delete colaborator");
    setDelColModal(false);
  };

  const postColaborator = () => {
    //function to add colaborator
    console.log("add colaborator");
    setAddColaborator(false);
  };

  return (
    <Fragment>
      <h1> titulo </h1>
      <Wrapper>
        <WrapperTask>Lista de tareas de seguimiento</WrapperTask>
        <WrapperOpc>
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
