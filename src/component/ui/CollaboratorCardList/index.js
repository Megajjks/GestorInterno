import React, { Fragment } from "react";
import CollaboratorCard from "../CollaboratorCard";

const CollaboratorCardList = ({ collaborators, rolUser }) => {
  return (
    <Fragment>
      <h2>Colaboradores</h2>
      {collaborators.map((collaborator) => (
        <CollaboratorCard
          key={collaborator.id}
          collaborator={collaborator}
          rolUser={rolUser}
        />
      ))}
    </Fragment>
  );
};

export default CollaboratorCardList;
