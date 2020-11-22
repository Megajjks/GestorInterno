import React, { useState } from "react";
import AsholaLogo from "../../../../assets/img/ashoka_logo.png";
import MacLogo from "../../../../assets/img/maclogo.png";
import HamburgerMenu from "../../../../assets/img/hamburgerMenu.svg";
import CloseMenu from "../../../../assets/img/closeMenu.svg";
import {
  WrapperNavbar,
  WrapperLogos,
  Menu,
  MenuItem,
  MenuHamburguer,
  MenuMobile,
} from "./styled";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);

  //change the ico of menu in mobile view
  const onClickMenu = () => {
    setshowMenu(!showMenu);
  };

  //go tab in this page
  const goTab = (url) => () => {
    window.location.href = url;
  };

  return (
    <>
      <WrapperNavbar>
        <WrapperLogos>
          <img
            src={AsholaLogo}
            alt="Ashoka logo"
            style={{ maxWidth: "85px", paddingBottom: "1rem" }}
          />
          <img src={MacLogo} alt="Mac logo" />
        </WrapperLogos>
        <MenuHamburguer
          alt="menu"
          onClick={onClickMenu}
          src={showMenu ? CloseMenu : HamburgerMenu}
        />
        <Menu>
          <MenuItem
            onClick={goTab("https://millonesdeagentesdecambio.org/#about")}
          >
            Acerca de
          </MenuItem>
          <MenuItem
            onClick={goTab(
              "https://millonesdeagentesdecambio.org/compromisos/"
            )}
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
      <MenuMobile showMenu={showMenu}>
        <MenuItem
          showMenu={showMenu}
          onClick={goTab("https://millonesdeagentesdecambio.org/#about")}
        >
          Acerca de
        </MenuItem>
        <MenuItem
          showMenu={showMenu}
          onClick={goTab("https://millonesdeagentesdecambio.org/compromisos/")}
        >
          Únete
        </MenuItem>
        <MenuItem showMenu={showMenu} onClick={goTab("")} isSelect={true}>
          Compromisos
        </MenuItem>
        <MenuItem
          showMenu={showMenu}
          onClick={goTab("https://www.providencia.org.mx/ashoka")}
        >
          Dona
        </MenuItem>
      </MenuMobile>
    </>
  );
};

export default Navbar;
