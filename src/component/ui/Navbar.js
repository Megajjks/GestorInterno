import React from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Nav = styled.nav`
    display: flex;
    justify-content: ${props => props.goback? "space-between" : "flex-end"};
    align-items: center;
    padding: 1em 10em 1em 3em ;
`;
const MenuNav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:center;
`;

const Navbar = ( {goback} ) => {
    return(
        <Nav goback={goback}>
            {goback ? <ArrowBackIcon style={{ color:"#000000" }}/> : null}
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