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
`;

export const MenuItem = styled.li`
  list-style-type: none;
  padding: 0 1rem;
  margin: 0 0.3rem;
  cursor: pointer;
  &:hover {
    color: #f4633b;
  }
`;
