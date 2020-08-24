import React, { Fragment, useState, useEffect } from "react";
import AlertModal from "../modals/AlertModal";
import DeletedIco from "../../../assets/img/delete.svg";
import AvatarIco from "../../../assets/img/usercard.svg";
import api from "../../../helpers/api";
import {
  Colaborator,
  ImgCollaborator,
  NameColaborator,
  BtnDeleteColaborator,
} from "./styled";

const CollaboratorCard = ({ collaborator, rolUser, reload, setReload }) => {
  const [showModal, setShowColModal] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const token = JSON.parse(localStorage.getItem("login_data")).accessToken;

  //Alert modal functions
  const handleShowModal = () => setShowColModal(true);

  const handlecloseModal = () => setShowColModal(false);

  //deleted collaborator
  useEffect(() => {
    //check if deleted is true, this behavior comes from the deleted status that is modified in the modal to deleted
    if (deleted) {
      const deletedCollaborator = async () => {
        try {
          const response = await api.delete("/collaborators", {
            data: {
              userId: collaborator.id,
              commitmentId: collaborator.UsersCommitments.commitmentId,
            },
            headers: { Authorization: token },
          });
          setReload(!reload);
        } catch (e) {
          console.log(e);
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
        {rolUser === "3" ? null : (
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
        callback={setDeleted}
      />
    </Fragment>
  );
};

export default CollaboratorCard;
