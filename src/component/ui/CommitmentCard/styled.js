import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  display: flex;
  padding: 1rem 2rem;
  margin-bottom: 1em;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.greylight};
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 #ddd;
  transition: transform 0.2s ease-out;
`;
export const Logo = styled.img`
  max-width: 124px;
  height: auto;
`;
export const Badge = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SvgImg = styled.img`
  width: 15px;
  height: 15px;
  padding-right: 5px;
`;
export const Status = styled.p`
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  color: ${(props) => props.status.color};
  padding: 5px 10px;
  background-color: ${(props) => props.status.background};
  margin: 0;
`;
export const TxtPrimary = styled.p`
  font-weight: 800;
  font-size: 20px;
  text-align: left;
  margin: 0;
`;
export const TxtSecundary = styled.p`
  font-weight: 500;
  font-size: 15px;
  text-align: left;
  width: 300px;
  margin: 0;
`;
export const Txtlight = styled.p`
  font-weight: 400;
  font-size: 12px;
  text-align: left;
  margin: 0;
`;
