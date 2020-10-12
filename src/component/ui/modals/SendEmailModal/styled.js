import styled from "styled-components";

export const BtnGroup = styled.div`
  display: flex;
  justify-content: "flex-end";
  align-items: center;
`;

export const WrapperButtons = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-bottom: 3em;
`;

export const ButtonAccept = styled.button`
  background-color: ${(props) => props.theme.colors.orange};
  width: 100%;
  padding: 0.5rem;
  color: #fff;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  box-shadow: 2px 2px 5px #999;
  border-radius: 1px;
  font-weight: 600;
  font-size: 1em;

  box-shadow: 2px 5px 10px rgb(200, 191, 190);

  &:hover {
    cursor: pointer;
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.5rem 0.25rem rgba(0, 0, 0, 0.16);
  }
  &:active {
    transform: translateY(-0-125rem);
    box-shadow: none;
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonDecline = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  width: 40%;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.orange};
  border: 3px solid #f6503e;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  box-shadow: 2px 2px 5px #999;
  border-radius: 1px;
  margin-left: 15em;
  margin-right: 1em;
  font-weight: 600;
  font-size: 1em;
  box-shadow: 2px 5px 10px rgb(200, 191, 190);

  &:hover {
    cursor: pointer;
    transform: translateY(-0.125rem);
    background-color: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.white};
    box-shadow: 0 0.25rem 0.5rem 0.25rem rgba(0, 0, 0, 0.16);
  }
  &:active {
    transform: translateY(-0-125rem);
    box-shadow: none;
  }
  &:focus {
    outline: none;
  }
`;