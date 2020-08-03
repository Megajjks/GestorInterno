import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Tablestyle, TableHeader, EyeIcon, Details, SearchBar } from "./styled";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Spinner from "../../Spinner";
import Error from "../../Error";
import Eye from "../../../../assets/img/eye.svg";
import api from "../../../../helpers/api";

const fields = [
  "Organización",
  "Colaboradores",
  "Agente",
  "Lugar",
  "Sede",
  "Categoria",
  "Estatus",
  "",
];

const TracingTable = () => {
  const [commitments, setCommitments] = useState([]);
  const [status, setStatus] = useState({
    loader: false,
    isError: false,
    message: "",
  });
  const history = useHistory();
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const fetchCommitment = async () => {
      setStatus({ loader: true });
      try {
        const response = await api.get("/commitments");
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
    fetchCommitment();
  }, []);

  useEffect(() => {
    if (!searchString) {
      return;
    }
    //const commitmentsBefore = [...commitments];
    const busqueda = commitments.filter((item) => {
      console.log(item);
      const payload = searchString.toLowerCase();
      const colaborators = item.colaborators.toLowerCase();
      const organization = item.organization.toLowerCase();
      const agent = `${item.first_name.toLowerCase()}  ${item.last_name.toLowerCase()}`;
      const city = item.city.toLowerCase();
      const status = item.status.toLowerCase();
      const sector = item.sector.toLowerCase();
      const state = item.state.toLowerCase();

      if (searchString === "") {
        return commitments;
      } else if (
        colaborators.includes(payload) ||
        organization.includes(payload) ||
        agent.includes(payload) ||
        city.includes(payload) ||
        state.includes(payload) ||
        sector.includes(payload) ||
        status.includes(payload)
      ) {
        return item;
      }
    });
    setCommitments(busqueda);
  }, [searchString]);

  const viewDetails = (item) => {
    history.push({
      pathname: `/traicing_commitment/${item.id}`,
      state: item,
    });
  };

  const search = (e) => {
    const { value } = e.target;
    setSearchString(value);
  };

  return (
    <Fragment>
      <SearchBar value={searchString} onChange={search} />
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
                <TableCell align="center">{commitment.organization}</TableCell>
                <TableCell align="center" style={{ width: "10em" }}>
                  <ul>
                    {commitment.collaborator.map((user) => (
                      <li
                        key={user.firstName}
                        style={{ margin: "0", fontSize: "13px" }}
                      >
                        {`${user.firstName} ${user.lastName}`}
                      </li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell align="center">{`${commitment.firstName} ${commitment.lastName}`}</TableCell>
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

export default TracingTable;
