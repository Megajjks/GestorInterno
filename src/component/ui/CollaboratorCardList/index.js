import React, { Fragment } from "react";
import CollaboratorCard from "../CollaboratorCard";

const CollaboratorCardList = ({ collaborators }) => {
  return (
    <Fragment>
      <h2>Colaboradores</h2>
      {collaborators.map((collaborator) => (
        <CollaboratorCard key={collaborator.id} collaborator={collaborator} />
      ))}
    </Fragment>
  );
};

export default CollaboratorCardList;
