import React, { Fragment, useState, useEffect, useContext } from "react";
import { CommitmentContext } from "../../context/CommitmentContext";
import { actions } from "../../context/CommitmentContext/actions";
import AlertModal from "../modals/AlertModal";
import DeletedIco from "../../../assets/img/delete.svg";
import AvatarIco from "../../../assets/img/usercard.svg";
import api from "../../../helpers/api";
import { rolName } from "../../../helpers";
import {
  Colaborator,
  ImgCollaborator,
  NameColaborator,
  BtnDeleteColaborator,
} from "./styled";

const CollaboratorCard = ({ collaborator }) => {
  const { state, dispatch } = useContext(CommitmentContext);
  const [showModal, setShowColModal] = useState(false);
  const [deleted, setDeleted] = useState(false);

  //Alert modal functions
  const handleShowModal = () => setShowColModal(true);

  const handlecloseModal = () => setShowColModal(false);

  //deleted collaborator
  useEffect(() => {
    //check if deleted is true, this behavior comes from the deleted status that is modified in the modal to deleted
    if (deleted) {
      const deletedCollaborator = async () => {
        dispatch({ type: actions.deletedCollaborator });
        try {
          const response = await api.delete("/collaborators", {
            data: {
              userId: collaborator.id,
              commitmentId: collaborator.UsersCommitments.commitmentId,
            },
          });
          dispatch({
            type: actions.deletedCollaboratorSuccess,
            payload: !state.reload,
          });
        } catch (e) {
          dispatch({
            type: actions.deletedCollaboratorError,
            payload: "Ocurrio un error",
          });
        }
      };
      deletedCollaborator();
    }
  }, [deleted]);

  return (
    <Fragment>
      <Colaborator>
        <ImgCollaborator
          src={collaborator.image ? collaborator.image : AvatarIco}
          alt="profile img"
        />
        <NameColaborator>
          {`${collaborator.firstName}  ${collaborator.lastName}`}{" "}
        </NameColaborator>
        {rolName() === "collaborator" ? null : (
          <BtnDeleteColaborator
            src={DeletedIco}
            alt="ico_deleted"
            onClick={handleShowModal}
          />
        )}
      </Colaborator>

      <AlertModal
        title="¿Estas seguro?"
        message="Estas seguro de eliminar al colaborador"
        open={showModal}
        handleClose={handlecloseModal}
        callback={() => setDeleted(true)}
      />
    </Fragment>
  );
};

export default CollaboratorCard;
