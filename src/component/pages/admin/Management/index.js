import React, { useState, useEffect } from "react";
import CommitmentCardList from "../../../ui/CommitmentCardList";
import Logo from "../../../../assets/img/logcom.png";
import { SearchBar } from "./styled";

const data = [
  {
    id: "1",
    logo: Logo,
    organization: "Anáhuac Queretaro",
    brief:
      "La Universidad Anáhuac Querétaro se compromete a capacitar a docentes provenientes del 40% de las carreras, abrir un grupo estudiantil que cree emprendimientos sociales...",
    location: "Querétaro",
    status: "validando",
    colaborators: "Empleado 1 de ahosoka",
  },
  {
    id: "2",
    logo: Logo,
    organization: "Kimo asesorias",
    brief:
      "Kimo Asesorías se compromete a generar 100 Agentes de cambio durante los próximos 12 meses a través del taller «Mis Ideas Valen» donde se desarrollaran",
    location: "Querétaro",
    status: "proceso",
    colaborators: "Empleado 1 de ahosoka",
  },
  {
    id: "3",
    logo: Logo,
    organization: "Fundación Trayectoria de Éxito",
    brief:
      "Fundación Trayectoria de Éxito se compromete a impulsar 400 agentes de cambio, de marzo a junio de cada año, a través de tres líneas de",
    location: "Querétaro",
    status: "cumplido",
    colaborators: "Empleado 1 de ahosoka",
  },
  {
    id: "4",
    logo: Logo,
    organization: "Scientiax",
    brief:
      "Scientiax se compromete a inspirar a 100 niñas a ser líderes innovadoras para la creación de startups que resuelvan un problema social basado en los",
    location: "Querétaro",
    status: "oculto",
    colaborators: "Empleado 2 de ahosoka",
  },
  {
    id: "5",
    logo: Logo,
    organization: "Incubadora de la UTCJ",
    brief:
      "Incubadora de Empresas de la Universidad Tecnológica de Ciudad Juarez se compromete a generar una comunidad local de 100 agentes de cambio de agosto 2020",
    location: "Mexico",
    status: "correcion",
    colaborators: "Empleado 3 de ahosoka",
  },
  {
    id: "6",
    logo: Logo,
    organization: "Agencia para la Igualdad y el Desarrollo GEMA",
    brief:
      "Agencia para la Igualdad y el Desarrollo GEMA se compromete a generar 20 líderes agentes de cambio, durante un año, a través de la Iniciativa»SAL»,",
    location: "Querétaro",
    status: "declinado",
    colaborators: "Empleado 1 de ahosoka",
  },
];

const Management = () => {
  const [commitments, setCommitments] = useState(data);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (!searchString) {
      return;
    }
    const busqueda = commitments.filter((item) => {
      const payload = searchString.toLowerCase();
      const organization = item.organization.toLowerCase();
      const location = item.location.toLowerCase();
      const status = item.status.toLowerCase();
      const colaborators = item.colaborators.toLowerCase();

      if (searchString === "") {
        return commitments;
      } else if (
        organization.includes(payload) ||
        location.includes(payload) ||
        status.includes(payload) ||
        colaborators.includes(payload)
      ) {
        return item;
      }
    });
    setCommitments(busqueda);
  }, [searchString]);
  const search = (e) => {
    const { value } = e.target;
    setSearchString(value);
  };

  return (
    <div>
      <h1>Compromisos asignados</h1>
      <SearchBar value={searchString} onChange={search} />
      <CommitmentCardList
        commitments={commitments}
        btnTitle="Gestionar compromiso"
        btnUrlBase="/traicing_commitment"
      />
    </div>
  );
};

export default Management;
