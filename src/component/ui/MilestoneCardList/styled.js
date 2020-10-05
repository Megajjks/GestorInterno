import styled from "styled-components";

export const WrapperMilestoneList = styled.div`
  display: flex;
  width: ${(props) => (props.isPage ? "80%" : "inherit")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
