import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

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
export const AvatarBadge = styled(Avatar)`
  cursor: pointer;
`;
