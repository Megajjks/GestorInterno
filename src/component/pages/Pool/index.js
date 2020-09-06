import React from "react";
import PoolTable from "../../ui/tables/PoolTable";
import Btn from "../../ui/GeneralButton";
import { WrapperHeader } from "./styled";
import api from "../../../helpers/api";
import IcoExport from "../../../assets/img/download.svg";

const Pool = () => {
  const exportData = () => {
    const { data } = api
      .get("/commitments/get/excel/", {
        responseType: "blob",
      })
      .then(({ data }) => {
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        const date = new Date();
        link.href = downloadUrl;
        link.setAttribute(
          "download",
          `Compromisos-MDADC (${date.getDate()}-${date.getMonth()}-${date.getFullYear()}).xlsx`
        ); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <WrapperHeader>
        <h1>Pool de compromisos</h1>
        <Btn
          title="Exportar datos"
          size="20%"
          ico={IcoExport}
          onClick={exportData}
        />
      </WrapperHeader>
      <PoolTable />
    </div>
  );
};

export default Pool;
