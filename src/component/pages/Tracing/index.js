import React, { Fragment, useEffect, useContext } from "react";
import { CommitmentContext } from "../../context/CommitmentContext";
import { actions } from "../../context/CommitmentContext/actions";
import { useHistory } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import api from "../../../helpers/api";
import TracingTable from "../../ui/tables/TracingTable";
import FilterBar from "../../ui/FilterBar";
import SendEmailModal from "../../ui/modals/SendEmailModal";

const Tracing = () => {
  const { state, dispatch } = useContext(CommitmentContext);
  const query = [
    "primer_contacto",
    "articulando",
    "cumplido",
    "archivado",
  ]
  const history = useHistory();

  useEffect(() => {
    const fetchCommitment = async () => {
      dispatch({ type: actions.getCommitmentsTracing });
      try {
        const { data } = await api.get("/commitments/filter/tracing");
        //filter commitments with status
        dispatch({
          type: actions.getCommitmentsSuccessTracing,
          payload: data,
        });
        dispatch({
          type: actions.clearSearchFilter,
          payload: { reset: "" }
        })
      } catch (e) {
        dispatch({
          type: actions.getCommitmentsError,
          payload:
            "Por el momento no se pueden obtener los datos, verifique su conexión",
        });
      }
    };
    fetchCommitment();
  }, [state.reload]);

  const viewDetails = (item) => {
    history.push({
      pathname: `/panel/traicing_commitment/${item.id}`,
      state: item.id,
    });
  };

  return (
    <Fragment>
      <SendEmailModal/>
      <FilterBar status={query} typeTable={"tracing"}/>
      <TracingTable commitments={state.commitments} viewDetails={viewDetails} />
      {state.commitmentsLoader ? <Spinner /> : null}
      {state.commitmentsError ? <Error /> : null}
    </Fragment>
  );
};

export default Tracing;
