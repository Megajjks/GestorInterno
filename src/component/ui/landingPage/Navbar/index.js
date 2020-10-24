import React from "react";
import AsholaLogo from "../../../../assets/img/ashoka_logo.png";
import MacLogo from "../../../../assets/img/maclogo.png";
import { WrapperNavbar, WrapperLogos, Menu, MenuItem, Link } from "./styled";

const Navbar = () => {
  //go tab in this page
  const goTab = (url) => () => {
    window.location.href = url;
  };

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
        <MenuItem
          onClick={goTab("https://millonesdeagentesdecambio.org/#about")}
        >
          Acerca de
        </MenuItem>
        <MenuItem
          onClick={goTab("https://millonesdeagentesdecambio.org/compromisos/")}
        >
          Únete
        </MenuItem>
        <MenuItem onClick={goTab("")} isSelect={true}>
          Compromisos
        </MenuItem>
        <MenuItem onClick={goTab("https://www.providencia.org.mx/ashoka")}>
          Dona
        </MenuItem>
      </Menu>
    </WrapperNavbar>
  );
};

export default Navbar;
