import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: ${(props) => (props.goback ? "space-between" : "flex-end")};
  align-items: center;
  padding: 1em 10em 1em 3em;
`;
export const MenuNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
