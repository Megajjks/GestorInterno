import styled from "styled-components";

export const WrapperContainer = styled.div`
  display: flex;
  flex: 18em;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  margin: 2em 10%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 768px) {
    min-width: 560px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  @media (max-width: 768px) {
    font-size: 24px;
    padding: 0 2em;
  }
`;

export const Information = styled.p`
  margin: 1rem 0 1rem 0;
  padding: 0 5em;
  text-align: justify;
`;

export const Url = styled.a`
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
`;

export const WrapperField = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25%;
  justify-content: center;
  column-gap: 2em;
  @media (max-width: 1024px) {
    grid-template-columns: 35% 35%;
  }
  @media (max-width: 768px) {
    grid-template-columns: 60%;
  }
`;

export const Field = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-between;
  margin: 1rem 0;
`;

export const Label = styled.label`
  font-weight: 600;
  align-self: flex-start;
  margin-bottom: 0.5rem;
  max-width: 30em;
  color: ${({ theme: { colors } }) => colors.grey};
  @media (max-width: 768px) {
    width: 28em;
  }
`;

export const Input = styled.input`
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.black};
  padding: 0.5rem;
  background-color: transparent;
  border: 0.5px solid #707070;
  border-radius: 5px;
`;

export const InputRadio = styled.input`
  align-self: flex-start;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.black};
  display: block;
  margin-bottom: 1rem;
`;

export const LabelFile = styled.label`
  text-decoration: none;
  cursor: default;
  background-color: ${({ theme: { colors } }) => colors.grey};
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 600;
  padding: 0.4em;
  transition: all 150ms ease-out;
  border: none;
  border-radius: 2px;
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.5rem 0.25rem rgba(0, 0, 0, 0.16);
  }
  &:active {
    transform: translateY(-0-125rem);
    box-shadow: none;
  }
`;

export const WrapperInputRadio = styled.div`
  width: 50em;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    width: 35em;
  }
  @media (max-width: 768px) {
    width: 28em;
  }
`;

export const Select = styled.select`
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.black};
  padding: 0.5rem;
  background-color: transparent;
  border: 0.5px solid #707070;
  border-radius: 5px;
  -webkit-appearance: none;
`;

export const TextArea = styled.textarea`
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.black};
  padding: 0.5rem;
  width: 60em;
  height: 8rem;
  background-color: transparent;
  border: 0.5px solid #707070;
  border-radius: 5px;
  resize: none;
  @media (max-width: 1024px) {
    width: 40em;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Btn = styled.button`
  text-decoration: none;
  cursor: default;
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 600;
  padding: 0.8em;
  width: 15em;
  font-size: 1.1em;
  transition: all 150ms ease-out;
  border: none;
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.5rem 0.25rem rgba(0, 0, 0, 0.16);
  }
  &:active {
    transform: translateY(-0-125rem);
    box-shadow: none;
  }
`;
export const TxtRequired = styled.span`
  color: red;
  font-weight: 400;
`;
