import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperContainer = styled.div`
  display: flex;
  flex: 18em;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1em;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Information = styled.p`
  margin: 0 0 1rem 0;
  padding: 0;
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
`;

export const WrapperField = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export const Field = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-between;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-weight: 600;
  align-self: flex-start;
  margin-bottom: 0.5rem;
  max-width: 30em;
  color: ${({ theme: { colors } }) => colors.grey};
`;

export const Input = styled.input`
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.black};
  padding: 0.5rem;
  width: 15em;
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
  display: flex;
  justify-content: flex-start;
`;

export const Select = styled.select`
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.black};
  padding: 0.5rem;
  width: 16.5em;
  background-color: transparent;
  border: 0.5px solid #707070;
  border-radius: 5px;
  -webkit-appearance: none;
`;

export const TextArea = styled.textarea`
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.black};
  padding: 0.5rem;
  width: 37em;
  height: 8rem;
  background-color: transparent;
  border: 0.5px solid #707070;
  border-radius: 5px;
  resize: none;
`;

export const Btn = styled.button`
  text-decoration: none;
  cursor: default;
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 600;
  padding: 0.8em;
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
