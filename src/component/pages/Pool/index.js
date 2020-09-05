import React from "react";
import PoolTable from "../../ui/tables/PoolTable";
import Btn from "../../ui/GeneralButton";
import { WrapperHeader } from "./styled";
import api from "../../../helpers/api";
import IcoExport from "../../../assets/img/download.svg";

const Pool = () => {
  const exportData = () => {
    try {
      const response = api.get("/commitments/get/excel");
    } catch (e) {
      console.log(e);
    }
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
