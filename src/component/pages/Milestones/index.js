import React, { Fragment, useContext, useEffect } from "react";
import { CommitmentContext } from "../../context/CommitmentContext";
import { actions } from "../../context/CommitmentContext/actions";
import { useHistory } from "react-router-dom";
import { WrapperHeader, WrapperBody } from "./styled";
import MilestoneCardList from "../../ui/MilestoneCardList";
import MilestoneModal from "../../ui/modals/MilestoneModal";
import WithoutMilestones from "../../ui/alerts/WithoutMilestones";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import Btn from "../../ui/GeneralButton";
import AddIcon from "../../../assets/img/add.svg";
import api from "../../../helpers/api";

const Milestones = () => {
  const { state, dispatch } = useContext(CommitmentContext);
  const isCollaborator = useHistory().location.state.isCollaborator;
  const organization = useHistory().location.state.organization;
  const collaboratorId = useHistory().location.state.id;

  //get Milestones
  useEffect(() => {
    const getMilestones = async () => {
      dispatch({ type: actions.getMilestones });
      try {
        const { data } = await api.get(`/milestones/${collaboratorId}`);
        dispatch({ type: actions.getMilestonesSuccess, payload: data });
      } catch {
        dispatch({
          type: actions.getMilestonesError,
          payload: "Ocurrió un error al momento de traer la lista de logros",
        });
      }
    };
    getMilestones();
  }, [state.reloadMilestones]);

  //functions to open or close the MilestoneModal
  const showModalMilestone = () => {
    dispatch({
      type: actions.showModalAddMilestone,
      payload: !state.showModalMilestone,
    });
  };

  //functions to open the MilestoneModal in edit mode
  const showModalEditMilestone = (milestone) => {
    dispatch({
      type: actions.showModalEditMilestone,
      payload: { isShow: !state.showModalMilestone, milestone },
    });
  };

  const renderMilestones = () => {
    if (state.milestonesError) {
      return <Error />;
    }
    if (state.milestones.length === 0) {
      return (
        <WithoutMilestones
          title="¡Oh! aun no se a levantando algún logro en el compromiso"
          content="Puedes levantar una logro si eres un colaborador de este compromiso dando click en el botón de añadir logro para registrar los logros de este proyecto"
        />
      );
    }
    return (
      <MilestoneCardList
        milestones={state.milestones}
        isCollaborator={isCollaborator}
        isPage={true}
        showModalMilestone={showModalEditMilestone}
      />
    );
  };

  return (
    <Fragment>
      <WrapperHeader>
        <h1>{`Logros de ${organization}`}</h1>
        {isCollaborator && (
          <Btn
            title="Añadir logro"
            size="20%"
            ico={AddIcon}
            onClick={showModalMilestone}
          />
        )}
      </WrapperHeader>
      <WrapperBody>
        {state.milestonesLoading ? <Spinner /> : renderMilestones()}
      </WrapperBody>
      <MilestoneModal />
    </Fragment>
  );
};

export default Milestones;
