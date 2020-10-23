import React from "react";
import AsholaLogo from "../../../../assets/img/ashoka_logo.png";
import MacLogo from "../../../../assets/img/maclogo.png";
import { WrapperNavbar, WrapperLogos, Menu, MenuItem, Link } from "./styled";

const Navbar = () => {
  return (
    <WrapperNavbar>
      <WrapperLogos>
        <img
          src={AsholaLogo}
          alt="Ashoka logo"
          style={{ maxWidth: "85px", paddingBottom: "1rem" }}
        />
        <img src={MacLogo} alt="Mac logo" />
      </WrapperLogos>
      <Menu>
        <MenuItem>Acerca de</MenuItem>
        <MenuItem>Únete</MenuItem>
        <MenuItem>Compromisos</MenuItem>
        <MenuItem>Dona</MenuItem>
      </Menu>
    </WrapperNavbar>
  );
};

export default Navbar;
