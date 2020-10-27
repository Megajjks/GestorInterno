import styled from "styled-components";

export const WrapperNavbar = styled.nav`
  background-color: #000000;
  margin: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #ffffff;
`;

export const WrapperLogos = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Menu = styled.ul`
  font-family: "Barlow", sans-serif;
  line-height: 20px;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  list-style-type: none;
  padding: ${(props) => (props.showMenu ? "1.5rem" : "0 1rem")};
  margin: ${(props) => (props.showMenu ? "0" : "0 0.3rem")};
  color: ${(props) => (props.isSelect ? "#f4633b" : "#ffffff")};
  cursor: pointer;
  &:hover {
    color: #f4633b;
  }
`;

export const MenuHamburguer = styled.img`
  width: 2rem;
  cursor: pointer;
  padding: 2rem;
  transition: all 2s ease;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuMobile = styled.ul`
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 20;
  margin: 0;
  padding: 1rem;
  width: inherit;
  height: auto;
  background-color: #000000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Barlow", sans-serif;
  font-size: 32px;
  transition: all 2s ease;
`;
