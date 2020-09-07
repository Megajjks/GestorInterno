import React, { useState } from "react";
import PoolTable from "../../ui/tables/PoolTable";
import Btn from "../../ui/GeneralButton";
import { WrapperHeader } from "./styled";
import api from "../../../helpers/api";
import IcoExport from "../../../assets/img/download.svg";

const Pool = () => {
  const [isLoader, setIsLoader] = useState(false);

  //function to download data in excel file
  const exportData = () => {
    setIsLoader(true);
    const { data } = api
      .get("/commitments/get/excel/", {
        responseType: "blob",
      })
      .then(({ data }) => {
        setIsLoader(false);
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
      .catch((error) => {
        setIsLoader(false);
        console.log(error);
      });
  };

  return (
    <div>
      <WrapperHeader>
        <h1>Pool de compromisos</h1>
        <Btn
          title="Exportar datos"
          size="20%"
          type="primary-loader"
          ico={IcoExport}
          onClick={exportData}
          loader={isLoader}
        />
      </WrapperHeader>
      <PoolTable />
    </div>
  );
};

export default Pool;
