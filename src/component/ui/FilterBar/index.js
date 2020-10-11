import React, { Fragment, useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import api from "../../../helpers/api";
import {
  WrapperFilter,
  SelectFilter,
  SearchBar,
  WrapperSelect,
} from "./styled";
import { 
  area, 
  states, 
  sector, 
  isActiveUser,
  roles,
  rolName,
  dataStatus,

} from "../../../helpers/index";

const FilterBar = ({
  state,
  status,
  typeTable,
  getFilterCommitmentsPoolSuccess,
  getFilterCommitmentsPool,
  getFilterCommitmentsPoolError,
  getFilterCommitmentsTracing,
  getFilterCommitmentsTracingSuccess,
  getFilterCommitmentsTracingError,
  getFilterCommitmentsManagement,
  getFilterCommitmentsManagementSuccess,
  getFilterCommitmentsManagementError,
  getFilterUsers,
  getFilterUsersSuccess,
  getFilterUsersError,
  handleSearchFilter,
}) => {
  //Logic of search bar
  useEffect(() => {
    if (!state.searchFilter) {
      return;
    }
    const searchCommitmentFilter = async () => {
      switch (typeTable) {
        case "pool":
          if (
            state.searchFilter.agent !== "" ||
            state.searchFilter.area !== "" ||
            state.searchFilter.state !== "" ||
            state.searchFilter.sector !== "" ||
            state.searchFilter.status !== ""
          ) {
            getFilterCommitmentsPool();
            try {
              let params = null;
              if (state.searchFilter.agent) {
                params = new URLSearchParams({
                  searchbox: `${state.searchFilter.agent}`,
                  state: `${state.searchFilter.state}`,
                  area: `${state.searchFilter.area}`,
                  status: `${state.searchFilter.status}`,
                  sector: `${state.searchFilter.sector}`,
                }).toString();
              } else {
                params = new URLSearchParams({
                  state: `${state.searchFilter.state}`,
                  area: `${state.searchFilter.area}`,
                  status: `${state.searchFilter.status}`,
                  sector: `${state.searchFilter.sector}`,
                }).toString();
              }
              const url = `/commitments/filter/pool/?page=${state.page}&${params}`;
              console.log(url);
              const { data } = await api.get(url);
              getFilterCommitmentsPoolSuccess(data);
            } catch (error) {
              getFilterCommitmentsPoolError(
                "Por el momento no se pueden obtener los datos, verifique su conexión"
              );
            }
          }
          break;
        case "tracing":
          if (
            state.searchFilter.collaborator !== "" ||
            state.searchFilter.area !== "" ||
            state.searchFilter.state !== "" ||
            state.searchFilter.sector !== "" ||
            state.searchFilter.status !== ""
          ) {
            getFilterCommitmentsTracing();
            try {
              let params = null;
              if (state.searchFilter.collaborator) {
                params = new URLSearchParams({
                  searchbox: `${state.searchFilter.collaborator}`,
                  state: `${state.searchFilter.state}`,
                  area: `${state.searchFilter.area}`,
                  status: `${state.searchFilter.status}`,
                  sector: `${state.searchFilter.sector}`,
                }).toString();
              } else {
                params = new URLSearchParams({
                  state: `${state.searchFilter.state}`,
                  area: `${state.searchFilter.area}`,
                  status: `${state.searchFilter.status}`,
                  sector: `${state.searchFilter.sector}`,
                }).toString();
              }
              const url = `/commitments/filter/tracing/?page=${state.page}&${params}`;
              console.log(url);
              const { data } = await api.get(url);
              getFilterCommitmentsTracingSuccess(data);
            } catch (error) {
              getFilterCommitmentsTracingError(
                "Por el momento no se pueden obtener los datos, verifique su conexión"
              );
            }
          }
          break;
        case "management":
          if (state.searchFilter.userManagement !== "") {
            getFilterCommitmentsManagement();
            try {
              let params = null;
              if (state.searchFilter.userManagement) {
                params = new URLSearchParams({
                  searchbox: `${state.searchFilter.userManagement}`,
                }).toString();
              } else {
                params = new URLSearchParams({
                  searchbox: "",
                }).toString();
              }
              const url = `/commitments/filter/management/?page=${state.page}&${params}`;
              console.log(url);
              const { data } = await api.get(url);
              getFilterCommitmentsManagementSuccess(data);
            } catch (error) {
              getFilterCommitmentsManagementError(
                "Por el momento no se pueden obtener los datos, verifique su conexión"
              );
            }
          }
          break;
        case "user":
          if (state.searchFilter.user !== "") {
            getFilterUsers()
            try {
              let params = null;
              if (state.searchFilter.user) {
                params = new URLSearchParams({
                  searchbox: `${state.searchFilter.user}`,
                }).toString();
              } else {
                params = new URLSearchParams({
                  searchbox: "",
                }).toString();
              }
              const url = `/users/?page=${state.page}&${params}`;
              console.log(url);
              const { data } = await api.get(url);
              getFilterUsersSuccess(data);
            } catch (error) {
              getFilterUsersError(
                "Por el momento no se pueden obtener los datos, verifique su conexión"
              );
            }
          }
          break;
        default:
          break;
      }
    };
    searchCommitmentFilter();
  }, [state.searchFilter]);

  return (
    <Fragment>
      <WrapperFilter>
        {typeTable === "pool" ? (
          <WrapperSelect>
            <SearchBar
              name="agent"
              value={state.searchFilter.agent}
              onChange={(e) =>
                handleSearchFilter(e.target.name, e.target.value)
              }
            />
          </WrapperSelect>
        ) : null}
        {typeTable === "tracing" ? (
          <WrapperSelect>
            <SearchBar
              name="collaborator"
              value={state.searchFilter.collaborator}
              onChange={(e) =>
                handleSearchFilter(e.target.name, e.target.value)
              }
            />
          </WrapperSelect>
        ) : null}
        {typeTable === "management" ? (
          <WrapperSelect style={{ marginRight: "auto" }}>
            <SearchBar
              name="userManagement"
              value={state.searchFilter.userManagement}
              onChange={(e) =>
                handleSearchFilter(e.target.name, e.target.value)
              }
            />
          </WrapperSelect>
        ) : null}
        {typeTable === "user" ? (
          <Fragment>
            <WrapperSelect style={{ marginRight: "auto" }}>
              <SearchBar
                name="user"
                value={state.searchFilter.user}
                onChange={(e) =>
                  handleSearchFilter(e.target.name, e.target.value)
                }
              />
            </WrapperSelect>
          </Fragment>
        ) : null}
        {typeTable === "pool" || typeTable === "tracing" ? (
          <Fragment>
            <WrapperSelect>
              <InputLabel id="area-label">Area</InputLabel>
              <SelectFilter
                labelId="area-label"
                id="area-label"
                name="area"
                value={state.searchFilter.area}
                onChange={(e) =>
                  handleSearchFilter(e.target.name, e.target.value)
                }
              >
                <MenuItem value="">-- Todos --</MenuItem>
                {area.map((item, idx) => {
                  return (
                    <MenuItem value={item} key={idx}>
                      {item}
                    </MenuItem>
                  );
                })}
              </SelectFilter>
            </WrapperSelect>
            <WrapperSelect>
              <InputLabel id="sede-label">Sede</InputLabel>
              <SelectFilter
                labelId="sede-label"
                id="sede-label"
                name="state"
                value={state.searchFilter.state}
                onChange={(e) =>
                  handleSearchFilter(e.target.name, e.target.value)
                }
              >
                <MenuItem value="">-- Todos --</MenuItem>
                {states.map((item, idx) => {
                  return (
                    <MenuItem value={item} key={idx}>
                      {item}
                    </MenuItem>
                  );
                })}
              </SelectFilter>
            </WrapperSelect>
            <WrapperSelect>
              <InputLabel id="category-label">Categoria</InputLabel>
              <SelectFilter
                labelId="category-label"
                id="category-label"
                name="sector"
                value={state.searchFilter.sector}
                onChange={(e) =>
                  handleSearchFilter(e.target.name, e.target.value)
                }
              >
                <MenuItem value="">-- Todos --</MenuItem>
                {sector.map((item, idx) => {
                  return (
                    <MenuItem value={item} key={idx}>
                      {item}
                    </MenuItem>
                  );
                })}
              </SelectFilter>
            </WrapperSelect>
            <WrapperSelect>
              <InputLabel id="status-label">Estatus</InputLabel>
              <SelectFilter
                labelId="status-label"
                id="status-label"
                name="status"
                value={state.searchFilters}
                onChange={(e) =>
                  handleSearchFilter(e.target.name, e.target.value)
                }
              >
                <MenuItem value="">-- Todos --</MenuItem>
                {status.map((item, idx) => {
                  return (
                    <MenuItem value={item} key={idx}>
                      {item}
                    </MenuItem>
                  );
                })}
              </SelectFilter>
            </WrapperSelect>
          </Fragment>
        ) : null}
      </WrapperFilter>
    </Fragment>
  );
};

export default FilterBar;
