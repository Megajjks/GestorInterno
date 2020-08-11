import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Nav, MenuNav, AvatarBadge } from "./styled";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NotificationsIcon from "@material-ui/icons/Notifications";
import api from "../../../helpers/api";

const Navbar = ({ goback }) => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [dropdownUser, setDropdownUser] = useState(null);

  //get the logged in user data
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.get("/users");
        setUser(response.data);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, []);

  //function to behavior UserOptions
  const handleClickAvatarUser = (event) => {
    setDropdownUser(event.currentTarget);
  };

  const handleCloseUserOptions = () => {
    setDropdownUser(null);
  };

  //function to log out a user
  const logOut = () => {
    setDropdownUser(null);
    localStorage.clear();
    history.push("/");
  };

  return (
    <Nav goback={goback}>
      {goback ? <ArrowBackIcon style={{ color: "#000000" }} /> : null}
      <MenuNav>
        <Badge badgeContent={4} color="primary" style={{ marginRight: "2em" }}>
          <NotificationsIcon />
        </Badge>
        <AvatarBadge
          aria-label="more"
          aria-controls="long-menu-user-list"
          aria-haspopup="true"
          onClick={handleClickAvatarUser}
        >
          JS
        </AvatarBadge>
        <Menu
          id="long-menu-user-list"
          anchorEl={dropdownUser}
          keepMounted
          open={Boolean(dropdownUser)}
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
