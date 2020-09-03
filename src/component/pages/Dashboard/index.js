import React, { useState, useEffect } from "react";
import CommitmentCardList from "../../ui/CommitmentCardList";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import api from "../../../helpers/api";
import WithoutData from "../../ui/alerts/WithoutData";

const Dashboard = () => {
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
        const { data } = await api.get("/commitments");
        setData(data);
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

  const renderCommitments = () => {
    if (data.length === 0 && !status.loader && !status.isError)
      return (
        <WithoutData
          title="!Vaya¡ parece que no hay compromisos"
          content="Paciencia que pronto podras ver los compromisos 😉"
        />
      );
    return (
      <CommitmentCardList
        commitments={data}
        btnTitle="Leer compromiso"
        btnUrlBase="/panel/commitment_report"
      />
    );
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {renderCommitments()}
      {status.loader ? <Spinner /> : null}
      {status.isError ? <Error /> : null}
    </div>
  );
};

export default Dashboard;
