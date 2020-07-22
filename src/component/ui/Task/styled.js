import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  justify-content: space-between;
  display: flex;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 #ddd;
  transition: transform 0.2s ease-out;
  margin-bottom: 1em;
  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.5rem 0.25rem rgba(0, 0, 0, 0.16);
  }
`;

export const WrapperCheckTask = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
`;

export const CheckTask = styled.img`
  padding-top: 15px;
  padding-left: 15px;
  width: 25px;
  height: 25px;
  &:hover {
    cursor: pointer;
  }
`;

export const TaskData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WrapperPriority = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

export const CloseTask = styled.img`
  width: 10px;
  height: 10px;
  padding-top: 15px;
  padding-left: 5.8em;
  &:hover {
    cursor: pointer;
  }
`;

export const TaskPriority = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lowPriority};
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 6.1em;
  border-radius: 1.5px;
  width: 5px;
  height: 60px;
`;

export const WrapperCollaborator = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
`;

export const Collaborator = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  font-size: 1.2em;
  margin-bottom: 2px;
`;

export const WrapperExpiration = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
`;

export const TxtIcon = styled.h1`
  color: ${(props) => props.theme.colors.greyTitle};
  font-weight: 200;
  font-size: 12px;
  margin-top: 0;
  margin-left: 7px;
  margin-bottom: 3px;
`;

export const TitleTask = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  font-size: 1.2em;
  margin-top: 0;
  margin-bottom: 2px;
`;

export const TxtDescriptionTask = styled.h1`
  width: 80%;
  color: ${(props) => props.theme.colors.greyTitle};
  font-weight: 200;
  font-size: 15px;
  margin-top: 0;
`;
