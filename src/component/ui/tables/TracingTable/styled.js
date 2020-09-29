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
export const SearchBar = styled.input`
  outline: none;
  font-family: inherit;
  font-size: 100%;
  background: #f3f4f8
    url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat
    9px center;
  border: solid 1px #ccc;
  padding: 9px 10px 9px 32px;
  width: 1em;
  margin-bottom: 1em;

  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;

  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;

  &:focus {
    width: 12em;
    background-color: #fff;
    border-color: ${({ theme: { colors } }) => colors.background};

    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
