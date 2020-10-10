import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Img = styled.div`
  background-image: url("https://images.unsplash.com/photo-1601317848953-057aa886867b?ixlib=rb-1.2.1&auto=format&fit=crop&w=518&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* filter: hue-rotate(35deg); */
  width: 50%;
  height: 100%;
  @media (max-width: 768px) {
    visibility: hidden;
    display: none;
  }
`;

export const WrapperForm = styled.div`
  width: 50%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 4rem 0;
  @media (max-width: 768px) {
    background: ${(props) => props.theme.colors.white};
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
    min-width: 50%;
  }
`;

export const Title = styled.h1`
  width: 8em;
  color: ${(props) => props.theme.colors.greyTitle};
  text-align: center;
  font-weight: 900;
  font-size: 3em;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
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
