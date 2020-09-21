import styled from "styled-components";

export const WrapperAlert = styled.div`
  /* background-color: ${({ theme: { colors } }) => colors.primary}; */
  background-color: #fbc02d;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 #ddd;
  transition: transform 0.2s ease-out;
  margin-bottom: 2em;
`;

export const TxtBody = styled.p`
  margin: 0;
  padding: 1em;
  text-align: center;
  font-weight: 500;
`;

export const AcentWord = styled.span`
  font-weight: 800;
`;
