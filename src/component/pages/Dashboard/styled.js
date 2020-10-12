import styled from "styled-components";

export const Title = styled.h1`
  padding-bottom: 1em;
`;

export const WrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const WrapperSectionHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 2.5em 0 1em 0;
`;

export const BtnSecction = styled.p`
  color: ${(props) => props.theme.colors.primary};
  margin-left: 2em;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 400;
`;
