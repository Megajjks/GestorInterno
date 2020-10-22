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

export const EyeIcon = styled.img`
  width: 24px;
  margin-right: 5px;
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: bold;
  cursor: pointer;
`;

export const WrapperInputRadio = styled.div`
  width: 2em;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    width: 35em;
  }
  @media (max-width: 768px) {
    width: 28em;
  }
`;

export const Chip = styled.div`
  border-radius: 2em;
  display: inline-block;
  font-size: 0.8em;
  line-height: 1em;
  font-weight: bold;
  padding: 0.25em 0.75em;
  background: ${(props) => props.background};
  color: ${(props) => props.txtColor};
`;
export const InputRadio = styled.input`
  align-self: flex-start;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.black};
  display: block;
  margin-bottom: 1rem;
`;
