import styled from "styled-components";

export const Colaborator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`;

export const ImgCollaborator = styled.img`
  border-radius: 50%;
  width: 50px;
`;

export const NameColaborator = styled.p`
  width: 10em;
  margin: 0;
  padding: 0 0.5em;
`;

export const BtnDeleteColaborator = styled.img`
  width: 1em;
  &:hover {
    cursor: pointer;
  }
`;
