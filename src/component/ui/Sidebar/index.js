import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  SideBar,
  HeaderSidebar,
  Separator,
  Menu,
  MenuItem,
  Img,
  ImgCom,
  ImgMenu,
  Commitment,
  CommitmentFull,
} from "./styled";
import Logo from "../../../assets/img/ashoka_logo.png";
import MenuImg from "../../../assets/img/menu.png";
import ImgCommitment from "../../../assets/img/meeting1.png";

const Sidebar = ({ items, isAgent }) => {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <Wrapper showSideBar={showSideBar}>
      <SideBar>
        <ImgMenu
          showSideBar={showSideBar}
          src={MenuImg}
          alt="menu_icono"
          onClick={() => setShowSidebar(!showSideBar)}
        />
        {showSideBar ? (
          <HeaderSidebar>
            <img src={Logo} alt="ashoka logo" />
            <Separator />
          </HeaderSidebar>
        ) : null}
        <Menu>
          {items.map((item, idx) =>
            item.render ? (
              <Link
                to={item.path}
                key={idx}
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  marginBottom: "10px",
                }}
              >
                <MenuItem>
                  <Img
                    src={item.img}
                    alt={item.name}
                    showSideBar={showSideBar}
                  />
                  {showSideBar ? item.label : null}
                </MenuItem>
              </Link>
            ) : null
          )}
          {isAgent ? (
            <Commitment showSideBar={showSideBar}>
              {showSideBar ? (
                <CommitmentFull>
                  <ImgCom
                    src={ImgCommitment}
                    alt="commitment logo"
                    showSideBar={showSideBar}
                  />
                  <p style={{ textAlign: "center" }}>
                    Es el momento de hacer la diferencia
                  </p>
                </CommitmentFull>
              ) : (
                <Link to="/commitment">
                  <ImgCom
                    src={ImgCommitment}
                    alt="commitment logo"
                    showSideBar={showSideBar}
                  />
                </Link>
              )}
            </Commitment>
          ) : null}
        </Menu>
      </SideBar>
    </Wrapper>
  );
};

export default Sidebar;
