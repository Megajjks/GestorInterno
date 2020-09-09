import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% auto;
  column-gap: 2em;
`;

export const WrapperTask = styled.div`
  place-self: start stretch;
  height: 100%;
`;

export const WrapperOpc = styled.div`
  place-self: start stretch;
`;

export const WrapperColaborators = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Options = styled(WrapperColaborators)`
  margin-bottom: 1em;
  padding: 0 2.5em;
`;

export const BtnAddColaborator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnSecundary = styled.p`
  margin: 0;
  padding: 0.5em 0.8em;
  color: ${(props) => (props.primary ? "#FF5023" : "#707070")};
  font-weight: 600;
  cursor: pointer;
`;

export const MenuItems = styled(MenuItem)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleStatus = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin-right: 1em;
`;
