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
import { area, states ,sector, dataStatus } from "../../../helpers/index";

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
      case "collaborator":
        if (state.searchFilter.agent !== "") {
          arrayFiltred = arrayFiltred.filter((item) => {
            const agent = `${item.firstName.toLowerCase()} ${item.lastName.toLowerCase()}`;
            const payloadAgent = state.searchFilter.agent.toLowerCase();
            if(agent.startsWith(payloadAgent)){
              return item;
            }
          })
        }
        if(state.searchFilter.collaborator !== ""){
          arrayFiltred = arrayFiltred.filter((item) => {
            const payloadCollaborator = state.searchFilter.collaborator.toLowerCase();
            let user = "";
            for (let i = 0; i < item.collaborators.length; i++) {
              user = `${item.collaborators[i].firstName.toLowerCase()} ${item.collaborators[i].lastName.toLowerCase()}`;
              if (user.startsWith(payloadCollaborator)) {
                return item;
              }
            }
          })
        }
        if (state.searchFilter.area !== "") {
          arrayFiltred = arrayFiltred.filter(item => {
            if (item.area) {
              let area = item.area.toLowerCase();
              let payloadArea = state.searchFilter.area.toLowerCase();
              if (area.startsWith(payloadArea)) {
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
      case "management":
        if (state.searchFilter.userManagement !== "") {
          arrayFiltred = arrayFiltred.filter(item => {
            let organization = item.organization.toLowerCase();
            let agent = `${item.firstName.toLowerCase()} ${item.lastName.toLowerCase()}`;
            let status = item.status.toLowerCase();
            let sede = item.state.toLowerCase();
            let payloadUserManagement = state.searchFilter.userManagement.toLowerCase();
            if (organization.startsWith(payloadUserManagement)) {
              return item;
            } else if (agent.startsWith(payloadUserManagement)) {
              return item;
            } else if (sede.startsWith(payloadUserManagement)) {
              return item;
            } else if (status.startsWith(payloadUserManagement)) {
              return item;
            }
          })
        }
        break;
      case "user":
        if (state.searchFilter.user !== "") {
          //Filter users
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
    } else if (typeTable === "tracing") {
      dispatch({ type: actions.setSearchFilter, payload: { field, value, searchIn: "collaborator" } });
    } else if (typeTable === "management") {
      dispatch({ type: actions.setSearchFilter, payload: { field, value, searchIn: "management" } });
    } else {
      dispatch({ type: actions.setSearchFilter, payload: { field, value, searchIn: "user" } });
    }
  };

  return(
    <Fragment>
      <WrapperFilter>
        {typeTable === "pool" ? 
          <WrapperSelect>
            <SearchBar 
              name="agent" 
              value={state.searchFilter.agent} 
              onChange={(e) => search(e.target.name, e.target.value)}
            /> 
          </WrapperSelect>
          : null
        }
        {typeTable === "tracing" ? 
          <WrapperSelect>
            <SearchBar 
              name="collaborator" 
              value={state.searchFilter.collaborator} 
              onChange={(e) => search(e.target.name, e.target.value)}
            /> 
          </WrapperSelect>
            : null
        }
        {typeTable === "management" ? 
          <WrapperSelect style={{marginRight: "auto"}}>
            <SearchBar 
              name="userManagement" 
              value={state.searchFilter.userManagement}
              onChange={(e) => search(e.target.name, e.target.value)}
            /> 
          </WrapperSelect>
          : null
        }
        {typeTable === "user" ? 
          <WrapperSelect style={{marginRight: "auto"}}>
            <SearchBar 
              name="user" 
              value={state.searchFilter.user} 
              onChange={(e) => search(e.target.name, e.target.value)}
            /> 
          </WrapperSelect>
          : null
        }
        {typeTable === "pool" || typeTable === "tracing" ?
          <Fragment>
            <WrapperSelect>
              <InputLabel id="area-label">Area</InputLabel>
              <SelectFilter
                labelId="area-label"
                id="area-label"
                name="area"
                value={state.searchFilter.area}
                onChange={(e) => search(e.target.name, e.target.value)}
              >
                <MenuItem value="">-- Todos --</MenuItem>
                {
                  area.map((item, idx)=>{
                    return <MenuItem value={item} key={idx} >{item}</MenuItem>
                  })
                }
              </SelectFilter>
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
          </Fragment> : null     
        }
      </WrapperFilter>
    </Fragment>
  )
}

export default FilterBar;