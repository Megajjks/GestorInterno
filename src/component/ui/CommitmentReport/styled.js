import React from "react";
import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

export const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: "#F6503E",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  justify-content: space-between;
  display: flex;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 #ddd;
  transition: transform 0.2s ease-out;
  margin-bottom: 4em;
`;

export const Img = styled.img`
  width: 25%;
  height: 50%;
  border-radius: 100%;
  margin-left: 2em;
  margin-top: 4em;
`;

export const WrapperFormData = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WrapperIconEdit = styled.div`
  margin-top: 5em;
  width: 10%;
  display: flex;
  flex-direction: column;
`;

export const ImgEditCommitment = styled.img`
  width: 30px;
  height: 30px;
`;

export const WrapperImgTxt = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
`;

export const IconPointSvg = styled.img`
  width: 12px;
  height: 12px;
`;

export const TxtTitleOrganization = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-weight: 900;
  font-size: 2em;
  margin-top: 4.5rem;
  margin-bottom: 8px;
`;

export const TxtIcon = styled.h1`
  color: ${(props) => props.theme.colors.greyTitle};
  font-weight: 200;
  font-size: 14px;
  margin-top: 0;
  margin-left: 7px;
`;

export const TitleQuestion = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-weight: 800;
  font-size: 1em;
`;

export const TxtQuestion = styled.h1`
  width: 80%;
  color: ${(props) => props.theme.colors.greyTitle};
  font-weight: 200;
  font-size: 15px;
  margin-top: 0;
`;

export const Sector = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
`;

export const TxtSector = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-weight: 800;
  font-size: 1em;
`;

export const TypeSector = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  font-size: 0.9em;
  margin-left: 7px;
  margin-top: 0.8em;
`;

export const Position = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  margin-bottom: 6px;
`;

export const TxtPosition = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-weight: 800;
  font-size: 1em;
`;

export const TypePosition = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  font-size: 0.9em;
  margin-left: 7px;
  margin-top: 0.8em;
`;

export const WrapperLocation = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
`;

export const WrapperCheckbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const WrapperContact = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
`;

export const WrapperButtons = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-top: 2em;
  margin-bottom: 2em;
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
