import React, { useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import { Nav, MenuNav, AvatarBadge } from "./styled";
import { api } from "../../../helpers/api";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Navbar = ({ goback }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const id = JSON.parse(localStorage.getItem("login_data")).userId;

  //get the logged in user data
  useEffect(() => {
    const getUser = async () => {
      dispatch({ type: actions.getUser });
      try {
        const { data } = await api.get(`/users/${id}`);
        dispatch({ type: actions.getUserSuccess, payload: data });
      } catch (e) {
        dispatch({ type: actions.getUserError, payload: "Ocurrió un error" });
      }
    };
    getUser();
  }, []);

  //function to behavior UserOptions
  const handleClickAvatarUser = (event) => {
    dispatch({ type: actions.listOptions, payload: event.currentTarget });
  };

  const handleCloseUserOptions = () => {
    dispatch({ type: actions.listOptions, payload: null });
  };

  //function to log out a user
  const logOut = () => {
    dispatch({ type: actions.listOptions, payload: null });
    localStorage.clear();
    history.push("/");
  };

  return (
    <Nav goback={goback}>
      {goback ? <ArrowBackIcon style={{ color: "#000000" }} /> : null}
      <MenuNav>
        <Badge badgeContent={0} color="primary" style={{ marginRight: "2em" }}>
          <NotificationsIcon />
        </Badge>
        <AvatarBadge
          aria-label="more"
          aria-controls="long-menu-user-list"
          aria-haspopup="true"
          alt={`${state.user.firstName} profile`}
          src={state.user.image ? state.user.image : null}
          onClick={handleClickAvatarUser}
        >
          {}
        </AvatarBadge>
        <Menu
          id="long-menu-user-list"
          anchorEl={state.dropdownUser}
          keepMounted
          open={Boolean(state.dropdownUser)}
          onClose={handleCloseUserOptions}
        >
          <MenuItem onClick={handleCloseUserOptions}>My perfil</MenuItem>
          <MenuItem onClick={logOut}>cerrar sesión</MenuItem>
        </Menu>
      </MenuNav>
    </Nav>
  );
};

export default Navbar;
