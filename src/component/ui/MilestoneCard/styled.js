import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 #ddd;
  transition: transform 0.2s ease-out;
  padding: 0.8em 2em;
  width: inherit;
  margin-bottom: 1em;
  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.5rem 0.25rem rgba(0, 0, 0, 0.16);
  }
`;

export const WrapperInfo = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.2em 0;
`;

export const Section = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleMilestone = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  font-size: 1.4em;
  margin-top: 0;
  margin-bottom: 2px;
`;

export const DescriptionMilestone = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.black};
  font-weight: 200;
  font-size: 1em;
  margin: 0;
  padding: 0.4em 0;
`;

export const TxtIcon = styled.h1`
  color: ${(props) => props.theme.colors.greyTitle};
  font-weight: 200;
  font-size: 0.9em;
  margin-top: 0;
  margin-left: 7px;
  margin-bottom: 3px;
`;

export const ImgEdit = styled.img`
  width: 0.8em;
  height: 0.8em;
  padding-left: 0.6em;
  &:hover {
    cursor: pointer;
  }
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

export const RemoveTask = styled.img`
  width: 10px;
  height: 10px;
  align-self: flex-end;
  &:hover {
    cursor: pointer;
  }
`;
