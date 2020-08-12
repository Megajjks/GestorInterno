import styled from "styled-components";

export const Wraper = styled.div`
  display: grid;
  gap: 20px 10px;
  justify-items: center;
  align-items: start;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-flow: row dense;
`;
