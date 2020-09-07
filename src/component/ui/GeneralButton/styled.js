import styled from "styled-components";

export const ButtonPrimary = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  width: ${(props) => (props.size ? props.size : "100%")};
  padding: 0.5rem 1.5rem;
  color: #fff;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  box-shadow: 2px 2px 5px #999;
  border-radius: 1px;

  font-weight: 600;
  font-size: 1.2em;

  box-shadow: 2px 5px 10px rgb(200, 191, 190);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #bf360c;
  }
  &:active {
    transform: translateY(-0-125rem);
    box-shadow: none;
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonSecundary = styled(ButtonPrimary)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};
  &:hover {
    background-color: transparent;
  }
`;

export const ButtonWarning = styled(ButtonPrimary)`
  background-color: #b71c1c;
  &:hover {
    background-color: #7f0000;
  }
`;

export const Title = styled.span`
  flex: 1 1 0%;
`;

export const Ico = styled.img`
  width: 24px;
  flex: 0 1 auto;
`;

export const CircleStatus = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;
