import styled from "styled-components";

export const Wrapper = styled.div `
  display: grid;
  grid-template-columns: 70% auto;
  column-gap: 2em;
`;

export const WrapperTask = styled.div `
  place-self: start stretch;
`;

export const WrapperOpc = styled.div `
  place-self: start stretch;
`;

export const WrapperColaborators = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Colaborator = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameColaborator = styled.p `
  width: 10em;
  margin: 0;
  padding: 0 0.5em;
`;

export const BtnDeleteColaborator = styled.img `
  width: 1em;
  z-index: 99999;
  &:hover {
    cursor: pointer;
  }
`;

export const BtnAddColaborator = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5em;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;

export const BtnGroup = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnSecundary = styled.p `
  margin: 0;
  padding: 0.5em 0.8em;
  color: ${(props) => (props.primary ? "#FF5023" : "#707070")};
  font-weight: 600;
  cursor: pointer;
`;