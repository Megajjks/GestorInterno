import styled from "styled-components";

export const WrapperMetricCards = styled.div`
  display: grid;
  gap: 30px 15px;
  justify-items: center;
  align-items: start;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  grid-auto-flow: row dense;
`;
