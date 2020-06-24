import React from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 10em ;
    margin-left: 98px;
`;
const MenuNav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:center;
`;

const Navbar = () => {
    return(
        <Nav>
            <ArrowBackIcon style={{ color:"#000000" }}/>
            <MenuNav>
                <Badge badgeContent={4} color="primary" style={{marginRight:"2em"}}>
                    <NotificationsIcon />
                </Badge>
                <Avatar>JS</Avatar>
            </MenuNav>
        </Nav>
    )
}

export default Navbar;