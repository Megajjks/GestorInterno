import React, { useState, useEffect } from "react";
import CommitmentCardList from "../../../ui/CommitmentCardList";
import Spinner from "../../../ui/Spinner";
import Error from "../../../ui/Error";
import { SearchBar } from "./styled";
import api from "../../../../helpers/api";

const Management = () => {
  const [commitments, setCommitments] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [status, setStatus] = useState({
    loader: false,
    isError: false,
    message: "",
  });

  useEffect(() => {
    const fetchCommitments = async () => {
      setStatus({ loader: true });
      try {
        const response = await api.get("/commitments?status=proceso");
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
    fetchCommitments();
  }, []);

  useEffect(() => {
    if (!searchString) {
      return;
    }
    const busqueda = commitments.filter((item) => {
      const payload = searchString.toLowerCase();
      const organization = item.organization.toLowerCase();
      const location = item.city.toLowerCase();
      const status = item.status.toLowerCase();
      const agent = `${item.firstName.toLowerCase()}  ${item.lastName.toLowerCase()}`;

      if (searchString === "") {
        return commitments;
      } else if (
        organization.includes(payload) ||
        location.includes(payload) ||
        status.includes(payload) ||
        agent.includes(payload)
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
      {status.loader ? <Spinner /> : null}
      {status.isError ? <Error /> : null}
    </div>
  );
};

export default Management;
