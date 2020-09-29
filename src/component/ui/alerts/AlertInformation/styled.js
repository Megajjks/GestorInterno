import styled from "styled-components";

export const WrapperAlert = styled.div`
  background-color: ${(prop) => prop.color};
  justify-content: center;
  align-items: ${(prop) => (prop.type === "message" ? "flex-start" : "center")};
  display: flex;
  flex-direction: column;
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

export const TitleAlert = styled.h3`
  color: #ffffff;
  text-align: left;
  margin: 0;
  padding: 0.5em 1em 0 1em;
`;

export const MsgText = styled(TxtBody)`
  text-align: center;
  padding: 0 1em 0.5em 1em;
  color: #ffffff;
`;
