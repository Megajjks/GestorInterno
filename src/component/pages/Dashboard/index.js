import React, { useReducer, useEffect, Fragment } from "react";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import { useHistory } from "react-router-dom";
import { rolName } from "../../../helpers";
import MetricCardList from "../../ui/MetricCardList";
import CommitmentCardList from "../../ui/CommitmentCardList";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import api from "../../../helpers/api";
import { Title, WrapperSectionHeader, BtnSecction } from "./styled";

const Dashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const id = JSON.parse(localStorage.getItem("login_data")).userId;

  useEffect(() => {
    //get data user
    const getUser = async () => {
      dispatch({ type: actions.getUser });
      try {
        const { data } = await api.get(`/users/${id}`);
        dispatch({ type: actions.getUserSuccess, payload: data });
      } catch {
        dispatch({
          type: actions.getUserError,
          payload: "Ocurrió un problema al cargar los datos del usuario",
        });
      }
    };
    //get Commitments current in Pool
    const getCommitmentsPool = async () => {
      dispatch({ type: actions.getCommitmentsPool });
      try {
        const { data } = await api.get("/commitments/filter/pool/");
        dispatch({
          type: actions.getCommitmentsPoolSuccess,
          payload: data.slice(0, 3),
        });
      } catch {
        dispatch({
          type: actions.getCommitmentsPoolError,
          payload:
            "Ocurrio un problema al traer los compromisos recientes en Pool",
        });
      }
    };
    //get Commitments current in Tracing
    const getCommitmentsTracing = async () => {
      dispatch({ type: actions.getCommitmentsTracing });
      try {
        const { data } = await api.get("/commitments/filter/tracing/");
        dispatch({
          type: actions.getCommitmentsTracingSuccess,
          payload: data.slice(0, 3),
        });
      } catch {
        dispatch({
          type: actions.getCommitmentsTracingError,
          payload:
            "Ocurrio un problema al traer los compromisos recientes en Pool",
        });
      }
    };
    //get Commitments current in Management
    const getCommitmentsManagement = async () => {
      dispatch({ type: actions.getCommitmentsManagement });
      try {
        const { data } = await api.get("/commitments/filter/management/");
        dispatch({
          type: actions.getCommitmentsManagementSuccess,
          payload: data.slice(0, 3),
        });
      } catch {
        dispatch({
          type: actions.getCommitmentsManagementError,
          payload:
            "Ocurrio un problema al traer los compromisos recientes en Pool",
        });
      }
    };
    getUser();
    getCommitmentsPool();
    getCommitmentsTracing();
    getCommitmentsManagement();
  }, []);

  //go to section
  const goTo = (url) => {
    history.push(url);
  };

  const renderView = () => {
    if (state.userError) return <Error />;

    return (
      <Fragment>
        <Title>
          {`Bienvenido ${state.user.firstName} ${state.user.lastName}`}{" "}
        </Title>
        <MetricCardList metrics={state.metrics} />

        {rolName() !== "collaborator" && (
          <>
            <WrapperSectionHeader>
              <h2>Compromisos recientes por validar</h2>
              <BtnSecction onClick={() => goTo("/panel/pool")}>
                Ver más
              </BtnSecction>
            </WrapperSectionHeader>
            <CommitmentCardList
              commitments={state.commitmentsCurrentsPool}
              btnTitle="Ver compromiso"
              btnUrlBase="/panel/commitment_report"
            />

            <WrapperSectionHeader>
              <h2>Compromisos recientes por dar seguimiento</h2>
              <BtnSecction onClick={() => goTo("/panel/tracing")}>
                Ver más
              </BtnSecction>
            </WrapperSectionHeader>
            <CommitmentCardList
              commitments={state.commitmentsCurrentsTracing}
              btnTitle="Ver compromiso"
              btnUrlBase="/panel/traicing_commitment"
            />
          </>
        )}

        <WrapperSectionHeader>
          <h2>Compromisos recientes asignados</h2>
          <BtnSecction onClick={() => goTo("/panel/management")}>
            Ver más
          </BtnSecction>
        </WrapperSectionHeader>
        <CommitmentCardList
          commitments={state.commitmentsCurrentsManagement}
          btnTitle="Ver compromiso"
          btnUrlBase="/panel/traicing_commitment"
        />
      </Fragment>
    );
  };

  return <Fragment>{state.userLoader ? <Spinner /> : renderView()}</Fragment>;
};

export default Dashboard;
