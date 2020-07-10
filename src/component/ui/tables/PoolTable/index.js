import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Tablestyle, TableHeader, EyeIcon, Details } from "./styled";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Spinner from "../../Spinner";
import Error from "../../Error";
import Eye from "../../../../assets/img/eye.svg";
import axios from "axios";

const fields = [
  "Id",
  "Titulo",
  "Agente",
  "Organización",
  "Lugar",
  "Sede",
  "Categoria",
  "Estatus",
  "",
];

const PoolTable = () => {
  const [commitments, setCommitments] = useState([]);
  const [status, setStatus] = useState({
    loader: false,
    isError: false,
    message: "",
  });
  const history = useHistory();

  const fetchCommitment = async () => {
    setStatus({ loader: true });
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Megajjks/dbAshokaTest/commitments"
      );
      setCommitments(response.data);
      setStatus({
        loader: false,
        isError: false,
      });
    } catch (e) {
      console.log(e);
      setStatus({
        loader: false,
        isError: true,
        message:
          "Por el momento no se pueden obtener los datos, verifique su conexión",
      });
    }
  };

  useEffect(() => {
    fetchCommitment();
  }, []);

  const viewDetails = (item) => {
    history.push({
      pathname: `/details_commitment/${item.id}`,
      state: item,
    });
  };

  return (
    <Fragment>
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
                <TableCell align="center">{commitment.title}</TableCell>
                <TableCell align="center">{`${commitment.first_name} ${commitment.last_name}`}</TableCell>
                <TableCell align="center">{commitment.organization}</TableCell>
                <TableCell align="center">{commitment.city}</TableCell>
                <TableCell align="center">{commitment.state}</TableCell>
                <TableCell align="center">{commitment.sector}</TableCell>
                <TableCell align="center">{commitment.status}</TableCell>
                <TableCell align="center">
                  <Details onClick={() => viewDetails(commitment)}>
                    <EyeIcon src={Eye} alt="details" />
                    Visualizar
                  </Details>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Tablestyle>
      </TableContainer>
      {status.loader ? <Spinner /> : null}
      {status.isError ? <Error /> : null}
    </Fragment>
  );
};

export default PoolTable;
