import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";

export const Tablestyle = styled(Table)`
  min-width: 650px;
`;

export const TableHeader = styled(TableHead)`
  background: ${({ theme: { colors } }) => colors.background};
  font-family: airbnb-cerial;
`;

export const Icon = styled.img`
  width: 24px;
  margin-right: 5px;
`;

export const BtnFunction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  font-weight: bold;
  cursor: pointer;
`;

export const UserDataWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 1em;
`;

export const Chip = styled.div`
  border-radius: 0.75em;
  display: inline-block;
  font-size: 0.8em;
  line-height: 1em;
  font-weight: bold;
  padding: 0.25em 0.75em;
  background: ${(props) => props.background};
  color: ${(props) => props.txtColor};
`;
