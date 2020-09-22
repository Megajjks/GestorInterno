import React from "react";
import { Tablestyle, TableHeader, Icon, Details } from "./styled";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Eye from "../../../../assets/img/eye.svg";
import IcoError from "../../../../assets/img/error.svg";
import { dataStatus } from "../../../../helpers";

const fields = [
  "Id",
  "Organización",
  "Agente",
  "Area",
  "Lugar",
  "Sede",
  "Categoria",
  "Estatus",
  "",
];

const PoolTable = ({ commitments, viewDetails }) => {
  return (
    <TableContainer component={Paper}>
      <Tablestyle aria-label="simple table">
        <TableHeader>
          <TableRow>
            {fields.map((field) => (
              <TableCell align="center" key={field}>
                {field}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {commitments.map((commitment) => (
            <TableRow key={commitment.id}>
              <TableCell align="center">{commitment.id}</TableCell>
              <TableCell align="center">{commitment.organization}</TableCell>
              <TableCell align="center">
                {commitment.firstName} {commitment.lastName}
              </TableCell>

              <TableCell align="center">{commitment.area}</TableCell>
              <TableCell align="center">{commitment.city}</TableCell>
              <TableCell align="center">{commitment.state}</TableCell>
              <TableCell align="center">{commitment.sector}</TableCell>
              <TableCell align="center">
                {dataStatus(commitment.status).value}
              </TableCell>
              <TableCell align="center">
                {commitment.status === "falla" ? (
                  <Icon src={IcoError} alt="sycn error" />
                ) : (
                  <Details onClick={() => viewDetails(commitment)}>
                    <Icon src={Eye} alt="details" />
                    Visualizar
                  </Details>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Tablestyle>
    </TableContainer>
  );
};

export default PoolTable;
