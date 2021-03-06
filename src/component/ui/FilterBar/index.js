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
  getFilterCommitmentsPublic,
  getFilterCommitmentsPublicSuccess,
  getFilterCommitmentsPublicError,
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
            state.searchFilter.agent !== "" &&
            state.searchFilter.area !== "" &&
            state.searchFilter.state !== "" &&
            state.searchFilter.sector !== "" &&
            state.searchFilter.status !== ""
          ) {
            getFilterCommitmentsPool();
            try {
              const url = `/commitments/filter/pool/?page=${state.page}`;
              const { data } = await api.get(url);
              getFilterCommitmentsPoolSuccess(data);
            } catch (error) {
              getFilterCommitmentsPoolError(
                "Por el momento no se pueden obtener los datos, verifique su conexión"
              );
            }
          } else {
            getFilterCommitmentsPool();
            try {
              let params = null;
              params = new URLSearchParams({
                searchbox: `${state.searchFilter.agent}`,
                state: `${state.searchFilter.state}`,
                area: `${state.searchFilter.area}`,
                status: `${state.searchFilter.status}`,
                sector: `${state.searchFilter.sector}`,
              }).toString();
              const url = `/commitments/filter/pool/?page=${state.page}&${params}`;
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
            state.searchFilter.collaborator !== "" &&
            state.searchFilter.area !== "" &&
            state.searchFilter.state !== "" &&
            state.searchFilter.sector !== "" &&
            state.searchFilter.status !== ""
          ) {
            getFilterCommitmentsTracing();
            try {
              const url = `/commitments/filter/tracing/?page=${state.page}`;
              const { data } = await api.get(url);
              getFilterCommitmentsTracingSuccess(data);
            } catch (error) {
              getFilterCommitmentsTracingError(
                "Por el momento no se pueden obtener los datos, verifique su conexión"
              );
            }
          } else {
            getFilterCommitmentsTracing();
            try {
              let params = null;
              params = new URLSearchParams({
                searchbox: `${state.searchFilter.collaborator}`,
                state: `${state.searchFilter.state}`,
                area: `${state.searchFilter.area}`,
                status: `${state.searchFilter.status}`,
                sector: `${state.searchFilter.sector}`,
              }).toString();
              const url = `/commitments/filter/tracing/?page=${state.page}&${params}`;
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
              params = new URLSearchParams({
                searchbox: `${state.searchFilter.userManagement}`,
              }).toString();
              const url = `/commitments/filter/management/?page=${state.page}&${params}`;
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
          if (
            state.searchFilter.user !== "" ||
            state.searchFilter.rol !== 0 ||
            state.searchFilter.isActive !== ""
          ) {
            getFilterUsers();
            try {
              let params = null;
              if (state.searchFilter.rol) {
                params = new URLSearchParams({
                  searchbox: `${state.searchFilter.user}`,
                  roleId: `${state.searchFilter.rol}`,
                  isActive: `${state.searchFilter.isActive}`,
                }).toString();
              } else {
                params = new URLSearchParams({
                  searchbox: `${state.searchFilter.user}`,
                  isActive: `${state.searchFilter.isActive}`,
                }).toString();
              }
              const url = `/users/?page=${state.page}&${params}`;
              const { data } = await api.get(url);
              getFilterUsersSuccess(data);
            } catch (error) {
              getFilterUsersError(
                "Por el momento no se pueden obtener los datos, verifique su conexión"
              );
            }
          }
          break;
        case "public":
          if (
            state.searchFilter.organization === "" &&
            state.searchFilter.state === "" &&
            state.searchFilter.status === ""
          ) {
            console.log("sin parametros");
            getFilterCommitmentsPublic();
            try {
              const url = `/public/?page=${state.page}`;
              const { data } = await api.get(url);
              getFilterCommitmentsPublicSuccess(data);
            } catch {
              console.log("error");
            }
          } else {
            console.log("con parametros");
            getFilterCommitmentsPublic();
            try {
              let params = null;
              params = new URLSearchParams({
                searchbox: `${state.searchFilter.organization}`,
                state: `${state.searchFilter.state}`,
                status: `${state.searchFilter.status}`,
              }).toString();
              const url = `/public/?page=${state.page}&${params}`;
              const { data } = await api.get(url);
              getFilterCommitmentsPublicSuccess(data);
            } catch {
              console.log("error");
            }
          }
        /* case "public":
          console.log(state.searchFilter);
          if (
            state.searchFilter.organization === "" &&
            state.searchFilter.state === "" &&
            state.searchFilter.status === ""
          ) {
            console.log("no tengo params");
            getFilterCommitmentsPublic();
            try {
              const url = `/public/?page=${state.page}`;
              const { data } = await api.get(url);
              getFilterCommitmentsPublicSuccess(data);
            } catch (error) {
              getFilterCommitmentsPublicError(
                "Por el momento no se pueden obtener los datos, verifique su conexión"
              );
            }
          } else {
            console.log("tengo params");
            getFilterCommitmentsPublic();
            try {
              let params = null;
              params = new URLSearchParams({
                searchbox: `${state.searchFilter.organization}`,
                state: `${state.searchFilter.state}`,
                status: `${state.searchFilter.status}`,
              }).toString();
              const url = `/public/?page=${state.page}&${params}`;
              const { data } = await api.get(url);
              getFilterCommitmentsPublicSuccess(data);
            } catch (error) {
              getFilterCommitmentsPublicError(
                "Por el momento no se pueden obtener los datos, verifique su conexión"
              );
            }
          }
          break; */

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
        {typeTable === "public" ? (
          <WrapperSelect style={{ marginRight: "auto" }}>
            <SearchBar
              name="organization"
              value={state.searchFilter.organization}
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
            <WrapperSelect style={{ marginRight: "30px" }}>
              <InputLabel id="rol-label">Rol</InputLabel>
              <SelectFilter
                labelId="rol-label"
                id="rol-label"
                name="rol"
                value={state.searchFilter.rol}
                onChange={(e) =>
                  handleSearchFilter(e.target.name, e.target.value)
                }
              >
                <MenuItem value="">-- Todos --</MenuItem>
                {roles.map((item, idx) => {
                  return (
                    <MenuItem value={item.value} key={idx}>
                      {item.tag}
                    </MenuItem>
                  );
                })}
              </SelectFilter>
            </WrapperSelect>
            <WrapperSelect>
              <InputLabel id="statusUser-label">Estatus</InputLabel>
              <SelectFilter
                labelId="statusUser-label"
                id="statusUser-label"
                name="isActive"
                value={state.searchFilter.isActive}
                onChange={(e) =>
                  handleSearchFilter(e.target.name, e.target.value)
                }
              >
                <MenuItem value="">-- Todos --</MenuItem>
                {isActiveUser.map((item, idx) => {
                  return (
                    <MenuItem value={item.value} key={idx}>
                      {item.tag}
                    </MenuItem>
                  );
                })}
              </SelectFilter>
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
        {typeTable === "public" ? (
          <Fragment>
            <WrapperSelect style={{ paddingRight: "1em" }}>
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
