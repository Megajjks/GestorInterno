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
    //get data dashboard
    const getDataDashboard = async () => {
      dispatch({ type: actions.getDataDashboard });
      try {
        const { data } = await api.get("/dashboard");
        dispatch({
          type: actions.getDashboardDataSuccess,
          payload: {
            metrics: data.metrics,
            currentPool: data.commitmentsCurrentsPool,
            currentTracing: data.commitmentsCurrentsTracing,
            currentManagement: data.commitmentsCurrentsManagement,
          },
        });
      } catch {
        dispatch({
          type: actions.getDashboardDataError,
          payload: "Ocurrio un problema al traer las metricas en Dashboard",
        });
      }
    };

    getUser();
    getDataDashboard();
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
            {state.commitmentsCurrentsPool.length !== 0 && (
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
              </>
            )}

            {state.commitmentsCurrentsTracing.length !== 0 && (
              <>
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
          </>
        )}

        {state.commitmentsCurrentsManagement.length !== 0 && (
          <>
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
          </>
        )}
      </Fragment>
    );
  };

  return <Fragment>{state.userLoader ? <Spinner /> : renderView()}</Fragment>;
};

export default Dashboard;
