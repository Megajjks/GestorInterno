import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${(props) => (props.showSideBar ? "18em" : "5em")};
  height: 100vh;
  border: 0;
  position: relative;
  display: flex;
  flex: ${(props) => (props.showSideBar ? "18em" : "5em")};
  justify-content: center;
  z-index: 1;
  transition: all 0.2s ease-out;
`;
export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: inherit;
  padding: 1em 0;
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  position: fixed;
  overflow: auto;
`;
export const HeaderSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1em;
`;
export const Separator = styled.div`
  border-bottom: solid 1px #ffffff;
  width: 100%;
  height: 10px;
`;
export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const MenuItem = styled.li`
  font-weight: 600;
  font-size: 1.5em;
  padding: 0.4em 1em;
  display: flex;
  align-items: center;
  &:hover {
    background-color: rgba(175, 167, 155, 0.2);
  }
`;
export const Img = styled.img`
  max-width: 36px;
  transition: max-width 0.2s ease-out;
  padding-right: ${(props) => (props.showSideBar ? ".5em" : "0")};
`;
export const ImgCom = styled.img`
  max-width: ${(props) => (props.showSideBar ? "100px" : "36px")};
  transition: max-width 0.2s ease-out;
`;
export const ImgMenu = styled.img`
  display: block;
  max-width: 24px;
  cursor: pointer;
  margin: ${(props) =>
    props.showSideBar ? "0 5% 2% 80%" : "5px auto 20px auto"};
`;
export const Commitment = styled.div`
  display: flex;
  flex: column;
  justify-content: center;
  margin: ${(props) => (props.showSideBar ? "5em 0 0 0" : "20em 0 0 0")};
`;
export const CommitmentFull = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
`;
