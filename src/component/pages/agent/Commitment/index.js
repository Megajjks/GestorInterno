import React, { useState, useEffect } from "react";
import CommitmentCardList from "../../../ui/CommitmentCardList";
import Spinner from "../../../ui/Spinner";
import Error from "../../../ui/Error";
import api from "../../../../helpers/api";
import { Section, Btn } from "./styled";

const Commitment = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState({
    loader: false,
    isError: false,
    message: "",
  });

  useEffect(() => {
    const fetchCommitments = async () => {
      setStatus({ loader: true });
      try {
        const response = await api.get("/commitments");
        setData(response.data);
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
    fetchCommitments();
  }, []);

  return (
    <div>
      <Section>
        <h1>Mis compromisos</h1>
        <Btn to="/new_commitment">Crear un compromiso</Btn>
      </Section>
      <CommitmentCardList commitments={data} />
      {status.loader ? <Spinner /> : null}
      {status.isError ? <Error /> : null}
    </div>
  );
};

export default Commitment;
