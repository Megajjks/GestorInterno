import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

export const Img = styled.img`
  width: 40%;
  height: 100%;
`;

export const WrapperForm = styled.div`
  width: 60%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Form = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 4em 0;
`;

export const Title = styled.h1`
  width: 8em;
  color: ${(props) => props.theme.colors.greyTitle};
  text-align: center;
  font-weight: 900;
  font-size: 3em;
`;

export const BtnExtra = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 400;
  padding: 1em 2em;
  margin: 0 0 5em 0;
`;

export const SignIn = styled.p`
  align-self: center;
  margin: 0;
  padding: 0;
  font-weight: 400;
  margin-top: -2em;
`;
