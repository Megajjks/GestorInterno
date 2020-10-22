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

export const DropdownWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  visibility: ${(props) => (props.isShow ? "visible" : "hidden")};
  min-width: 10rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 7rem;
  display: ${(props) => (props.isShow ? "block" : "none")};
  transform: translateY(-0.125rem);
  box-shadow: 0 4px 8px 0 #ddd;
  border-radius: 6px;
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropdownMenuItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.2rem 1rem;
  font-weight: 500;

  &:hover {
    background-color: rgba(69, 90, 100, 0.1);
    cursor: pointer;
  }
`;

export const IcoMenu = styled.img`
  max-width: 1rem;
  margin-right: 0.8rem;
`;
