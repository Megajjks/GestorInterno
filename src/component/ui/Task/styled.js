import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  justify-content: space-between;
  display: flex;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 #ddd;
  transition: transform 0.2s ease-out;
  padding: 0.8em 0;
  margin-bottom: 1em;
  padding-left: ${(props) => (props.isCollaborator ? 0 : "2em")};
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
  width: 35%;
  display: flex;
  flex-direction: column;
`;

export const WrapperStatusTask = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lowPriority};
  margin-top: 10px;
  border-radius: 1.5px;
  margin-left: 2px;
  height: 2em;
  flex-direction: row;
  text-align: center;
`;

export const StatusTask = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  font-size: 1em;
  margin-top: 6px;
`;

export const CloseTask = styled.img`
  width: 10px;
  height: 10px;
  padding-top: 15px;
  padding-left: 9.8em;
  &:hover {
    cursor: pointer;
  }
`;

export const TaskPriority = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lowPriority};
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 10em;
  border-radius: 1.5px;
  width: 5px;
  height: 60px;
`;

export const SectionEditTask = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const WrapperCollaborator = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
`;

export const Collaborator = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  font-size: 1.2em;
  margin-bottom: 2px;
`;

export const WrapperEditTask = styled.div`
  width: 5%;
  display: flex;
  flex-direction: row;
`;

export const ImgEditTask = styled.img`
  width: 1em;
  height: 1em;
  padding-left: 1em;
  &:hover {
    cursor: pointer;
  }
`;

export const WrapperInfo = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.2em 0;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ImgProfile = styled(Icon)`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const TxtIcon = styled.h1`
  color: ${(props) => props.theme.colors.greyTitle};
  font-weight: 200;
  font-size: 0.9em;
  margin-top: 0;
  margin-left: 7px;
  margin-bottom: 3px;
`;

export const TitleTask = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  font-size: 1.4em;
  margin-top: 0;
  margin-bottom: 2px;
`;

export const TxtDescriptionTask = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.black};
  font-weight: 200;
  font-size: 1em;
  margin: 0;
  padding: 0.4em 0;
`;
