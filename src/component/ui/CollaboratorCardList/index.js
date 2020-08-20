import React, { Fragment } from "react";
import CollaboratorCard from "../CollaboratorCard";

const CollaboratorCardList = ({
  collaborators,
  rolUser,
  reload,
  setReload,
}) => {
  return (
    <Fragment>
      <h2>Colaboradores</h2>
      {collaborators.map((collaborator) => (
        <CollaboratorCard
          key={collaborator.id}
          collaborator={collaborator}
          rolUser={rolUser}
          setReload={setReload}
          reload={reload}
        />
      ))}
    </Fragment>
  );
};

export default CollaboratorCardList;
