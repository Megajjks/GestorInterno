import styled from "styled-components";

export const WrapperMetricCard = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  width: 280px;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5em 1em;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 #ddd;
  transition: transform 0.2s ease-out;
  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.5rem 0.25rem rgba(0, 0, 0, 0.16);
  }
`;

export const IconCard = styled.img`
  max-width: 52px;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TxtCounter = styled.h1`
  color: #212121;
  font-weight: 700;
  margin: 0;
  font-size: 42px;
`;

export const TxtBody = styled.p`
  color: #1b1b1b;
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
`;
