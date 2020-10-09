import styled from "styled-components";
export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnGroup = styled.div`
  width: 50%;
  display: flex;
  justify-content: ${(props) =>
    props.showBtnSycn ? "space-evenly" : "flex-end"};
  align-items: center;
`;
