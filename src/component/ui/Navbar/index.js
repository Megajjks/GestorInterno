import React from "react";
import { Nav, MenuNav } from "./styled";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Navbar = ({ goback }) => {
  return (
    <Nav goback={goback}>
      {goback ? <ArrowBackIcon style={{ color: "#000000" }} /> : null}
      <MenuNav>
        <Badge badgeContent={4} color="primary" style={{ marginRight: "2em" }}>
          <NotificationsIcon />
        </Badge>
        <Avatar>JS</Avatar>
      </MenuNav>
    </Nav>
  );
};

export default Navbar;
