import React from "react";
import { Wraper, Body } from "./styled";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import roles from "../../../helpers/roles";

// import images
import M1 from "../../../assets/img/dashboard.svg";
import M2 from "../../../assets/img/gestion.svg";
import M3 from "../../../assets/img/gps.svg";
import M4 from "../../../assets/img/team.svg";
import M5 from "../../../assets/img/paper.svg";
import M6 from "../../../assets/img/agreement.svg";
import M7 from "../../../assets/img/bullhorn.svg";

const rol = {
  ADM_USR: [
    { name: "Dashboard", label: "Dashboard", url: "/dashboard", img: M1 },
    { name: "Usuarios", label: "Usuarios", url: "/users", img: M4 },
    { name: "Pool", label: "Pool", url: "/pool", img: M5 },
    { name: "Seguimiento", label: "Seguimiento", url: "/tracing", img: M3 },
    { name: "Gestion", label: "Gestion", url: "/management", img: M2 },
  ],
  COL_USR: [
    { name: "Dashboard", label: "Dashboard", url: "/dashboard", img: M1 },
    { name: "Gestion", label: "Gestion", url: "/management", img: M2 },
  ],
  AGE_USR: [
    { name: "Dashboard", label: "Dashboard", url: "/dashboard", img: M1 },
    { name: "Compromisos", label: "Compromisos", url: "/commitment", img: M6 },
    { name: "Comunidad", label: "Comunidad", url: "/community", img: M7 },
  ],
  ALL: [
    { name: "Dashboard", label: "Dashboard", url: "/dashboard", img: M1 },
    { name: "Usuarios", label: "Usuarios", url: "/users", img: M4 },
    { name: "Pool", label: "Pool", url: "/pool", img: M5 },
    { name: "Seguimiento", label: "Seguimiento", url: "/tracing", img: M3 },
    { name: "Gestion", label: "Gestion", url: "/management", img: M2 },
    { name: "Compromisos", label: "Compromisos", url: "/commitment", img: M6 },
    { name: "Comunidad", label: "Comunidad", url: "/community", img: M7 },
  ],
};

const Navegation = (props) => {
  return (
    <Wraper>
      <Sidebar
        items={rol[roles.userHasRole()]}
        isAgent={roles.userHasRole() === "AGE_USR" ? true : false}
      />
      <Body>
        <Navbar />
        <div style={{ padding: ".2em 3em" }}>{props.children}</div>
      </Body>
    </Wraper>
  );
};

export default Navegation;
