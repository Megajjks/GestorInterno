import React, { Fragment, useEffect, useContext } from "react";
import { CommitmentFilterContext } from "../../context/CommitmentFilterContext";
import { actions } from "../../context/CommitmentFilterContext/actions";
import { useHistory } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/alerts/Error";
import api from "../../../helpers/api";
import TracingTable from "../../ui/tables/TracingTable";
import { filterWithStatus } from "../../../helpers";
import FilterBar from "../../ui/FilterBar";
import SendEmailModal from "../../ui/modals/SendEmailModal";
import { BtnGroup } from "./styled";

const Tracing = () => {
  const { state, dispatch } = useContext(CommitmentFilterContext);
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
        const { data } = await api.get("/commitments");
        //filter commitments with status
        dispatch({
          type: actions.getCommitmentsSuccessTracing,
          payload: filterWithStatus(data, query),
        });
        dispatch({
          type: actions.filterCommitments,
          payload: filterWithStatus(data, query)
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
      <TracingTable commitments={state.commitmentsFilter} viewDetails={viewDetails} />
      {state.commitmentsLoader ? <Spinner /> : null}
      {state.commitmentsError ? <Error /> : null}
    </Fragment>
  );
};

export default Tracing;
