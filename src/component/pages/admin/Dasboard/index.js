import React from "react";
import CommitmentCardList from "../../../ui/CommitmentCardList";
import Logo from "../../../../assets/img/logcom.png";

const data = [
  {
    id: "1",
    logo: Logo,
    title: "La universidad Anáhuac Querétaro.",
    organization: "Anáhuac Queretaro",
    brief:
      "La Universidad Anáhuac Querétaro se compromete a capacitar a docentes provenientes del 40% de las carreras, abrir un grupo estudiantil que cree emprendimientos sociales...",
    location: "Querétaro",
    status: "validando",
  },
  {
    id: "2",
    logo: Logo,
    title: "La universidad Anáhuac Querétaro.",
    organization: "Anáhuac Queretaro",
    brief:
      "La Universidad Anáhuac Querétaro se compromete a capacitar a docentes provenientes del 40% de las carreras, abrir un grupo estudiantil que cree emprendimientos sociales...",
    location: "Querétaro",
    status: "proceso",
  },
  {
    id: "3",
    logo: Logo,
    title: "La universidad Anáhuac Querétaro.",
    organization: "Anáhuac Queretaro",
    brief:
      "La Universidad Anáhuac Querétaro se compromete a capacitar a docentes provenientes del 40% de las carreras, abrir un grupo estudiantil que cree emprendimientos sociales...",
    location: "Querétaro",
    status: "finalizado",
  },
  {
    id: "4",
    logo: Logo,
    title: "La universidad Anáhuac Querétaro.",
    organization: "Anáhuac Queretaro",
    brief:
      "La Universidad Anáhuac Querétaro se compromete a capacitar a docentes provenientes del 40% de las carreras, abrir un grupo estudiantil que cree emprendimientos sociales...",
    location: "Querétaro",
    status: "oculto",
  },
];

const Dasboard = () => {
  return (
    <div>
      <h1>Dasboard</h1>
      <CommitmentCardList commitments={data} />
    </div>
  );
};

export default Dasboard;
