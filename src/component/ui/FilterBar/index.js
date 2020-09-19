import React, { Fragment, useEffect, useContext } from "react";
import { CommitmentFilterContext } from "../../context/CommitmentFilterContext";
import { actions } from "../../context/CommitmentFilterContext/actions";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { 
  WrapperFilter,
  SelectFilter,
  SearchBar,
  WrapperSelect
} from "./styled";
import { states ,sector, dataStatus } from "../../../helpers/index";

const FilterBar = ({ status, typeTable }) =>{
  const { state, dispatch } = useContext(CommitmentFilterContext);

  //Logic of search bar
  useEffect(() => {
    if (!state.searchFilter) {
      return;
    }
    const busqueda = state.commitments.filter((item) => {
      const option = state.searchFilter.searchIn.toLowerCase();
      const payloadSede = state.searchFilter.state.toLowerCase();
      const payloadCategory = state.searchFilter.sector.toLowerCase();
      const payloadStatus = state.searchFilter.status.toLowerCase();
      const agent = `${item.firstName.toLowerCase()}  ${item.lastName.toLowerCase()}`;
      const sede = item.state.toLowerCase();
      const category = item.sector.toLowerCase();
      const status = item.status.toLowerCase();
      if (state.searchFilter === "") {
        return dispatch({
          type: actions.filterCommitments,
          payload: state.commitments,
        });
      } else if (option === "agent") {
        const payloadAgent = state.searchFilter.agent.toLowerCase();
        if (agent.startsWith(payloadAgent)) {
          return item;
        }
      } else if (option === "collaborator") {
        const payloadCollaborator = state.searchFilter.collaborator.toLowerCase();
        let user = "";
        for (let i = 0; i < item.collaborators.length; i++) {
          user = `${item.collaborators[i].firstName.toLowerCase()}  ${item.collaborators[i].lastName.toLowerCase()}`;
          if (user.startsWith(payloadCollaborator)) {
            return item;
          }
        }
      } else if (sede.startsWith(payloadSede) && option === "state") {
        return item;
      } else if (category.startsWith(payloadCategory) && option === "sector") {
        return item;
      } else if (status.startsWith(dataStatus(payloadStatus).tag) && option === "status") {
        return item;
      }
    });
    dispatch({ type: actions.filterCommitments, payload: busqueda });
  }, [state.searchFilter]);

  const search = (field, value) => {
    dispatch({ type: actions.setSearchFilter, payload: { field, value } });
  };

  return(
    <Fragment>
      <WrapperFilter>
        <WrapperSelect>
          {typeTable === "pool" ? 
            <SearchBar 
              name="agent" 
              value={state.searchFilter.agent} 
              onChange={(e) => search(e.target.name, e.target.value)}
            /> : 
            <SearchBar 
              name="collaborator" 
              value={state.searchFilter.collaborator} 
              onChange={(e) => search(e.target.name, e.target.value)}
            />
          }
        </WrapperSelect>
        <WrapperSelect>
          <InputLabel id="sede-label">Sede</InputLabel>
          <SelectFilter
            labelId="sede-label"
            id="sede-label"
            name="state"
            value={state.searchFilter.state}
            onChange={(e) => search(e.target.name, e.target.value)}
          >
            <MenuItem value="">-- Todos --</MenuItem>
            {
              states.map((item, idx)=>{
                return <MenuItem value={item} key={idx} >{item}</MenuItem>
              })
            }
          </SelectFilter>
        </WrapperSelect>
        <WrapperSelect>
          <InputLabel id="category-label">Categoria</InputLabel>
            <SelectFilter
              labelId="category-label"
              id="category-label"
              name="sector"
              value={state.searchFilter.sector}
              onChange={(e) => search(e.target.name, e.target.value)}
            >
              <MenuItem value="">-- Todos --</MenuItem>
              {
                sector.map((item, idx)=>{
                  return <MenuItem value={item} key={idx} >{item}</MenuItem>
                })
              }
            </SelectFilter>
        </WrapperSelect>
        <WrapperSelect>
          <InputLabel id="status-label">Estatus</InputLabel>
            <SelectFilter
              labelId="status-label"
              id="status-label"
              name="status"
              value={state.searchFilters}
              onChange={(e) => search(e.target.name, e.target.value)}
            >
              <MenuItem value="">-- Todos --</MenuItem>
              {
                status.map((item, idx)=>{
                  return <MenuItem value={item} key={idx} >{item}</MenuItem>
                })
              }
            </SelectFilter>
        </WrapperSelect>
      </WrapperFilter>
    </Fragment>
  )
}

export default FilterBar;