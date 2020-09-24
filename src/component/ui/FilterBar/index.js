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
    const searchIn = state.searchFilter.searchIn.toLowerCase();
    let arrayFiltred = state.commitments;
    switch(searchIn){
      case "agent":
        if (state.searchFilter.agent !== "") {
          arrayFiltred = arrayFiltred.filter((item) => {
            const agent = `${item.firstName.toLowerCase()}  ${item.lastName.toLowerCase()}`;
            const payloadAgent = state.searchFilter.agent.toLowerCase();
            if(agent.startsWith(payloadAgent)){
              return item;
            }
          })
        }
        if(state.searchFilter.state !== ""){
          arrayFiltred = arrayFiltred.filter((item, idx) => {
            let payloadSede = state.searchFilter.state.toLowerCase();
            let sede = item.state.toLowerCase();
            if(sede.startsWith(payloadSede)){
              return item;
            }
          })
        }
        if(state.searchFilter.sector !== ""){
          arrayFiltred = arrayFiltred.filter(item => {
            let category = item.sector.toLowerCase();
            let payloadCategory = state.searchFilter.sector.toLowerCase();
            if (category.startsWith(payloadCategory)) {
              return item;
            }
          })
        }
        if(state.searchFilter.status !== ""){
          arrayFiltred = arrayFiltred.filter(item => {
            let status = item.status.toLowerCase();
            let payloadStatus = state.searchFilter.status.toLowerCase(); 
            if(status.startsWith(dataStatus(payloadStatus).tag)){
              return item;
            }
          })
        }
        break;
      case "collaborator": 
        if(state.searchFilter.collaborator !== ""){
          arrayFiltred = arrayFiltred.filter((item) => {
            const payloadCollaborator = state.searchFilter.collaborator.toLowerCase();
            let user = "";
            for (let i = 0; i < item.collaborators.length; i++) {
              user = `${item.collaborators[i].firstName.toLowerCase()}  ${item.collaborators[i].lastName.toLowerCase()}`;
              if (user.startsWith(payloadCollaborator)) {
                return item;
              }
            }
          })
        }
        if(state.searchFilter.state !== ""){
          arrayFiltred = arrayFiltred.filter((item, idx) => {
            let payloadSede = state.searchFilter.state.toLowerCase();
            let sede = item.state.toLowerCase();
            if(sede.startsWith(payloadSede)){
              return item;
            }
          })
        }
        if(state.searchFilter.sector !== ""){
            arrayFiltred = arrayFiltred.filter(item => {
              let category = item.sector.toLowerCase();
              let payloadCategory = state.searchFilter.sector.toLowerCase();
              if (category.startsWith(payloadCategory)) {
                return item;
              }
            })
        }
        if(state.searchFilter.status !== ""){
          arrayFiltred = arrayFiltred.filter(item => {
            let status = item.status.toLowerCase();
            let payloadStatus = state.searchFilter.status.toLowerCase(); 
            if(status.startsWith(dataStatus(payloadStatus).tag)){
              return item;
            }
          })
        }
        break;
      default:
        break;
    }

    dispatch({ type: actions.filterCommitments, payload: arrayFiltred });
  }, [state.searchFilter]);

  const search = (field, value) => {
    if (typeTable === "pool") {
      dispatch({ type: actions.setSearchFilter, payload: { field, value, searchIn: "agent" } });
    } else {
      dispatch({ type: actions.setSearchFilter, payload: { field, value, searchIn: "collaborator" } });
    }
    
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