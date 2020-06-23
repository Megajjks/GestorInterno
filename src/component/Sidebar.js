import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/img/ashoka_logo.png';
import MenuImg from '../assets/img/menu.png';

const Wrapper = styled.div`
    height: 100vh;
    max-width: ${props => props.showSideBar ? "260px" : "90px"};
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: ${({ theme: { colors } }) => colors.primary};
    padding: 1em 0;
    color: ${({ theme: { colors } }) => colors.white};
    transition: all .2s ease-out;
`;
const HeaderSidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom:1em;
`;
const Separator = styled.div`
    border-bottom:solid 1px #ffffff;
    width:90%;
    height:10px;
`;
const Menu = styled.ul`
    list-style:none;
    padding:0;
    margin:0;
`;
const MenuItem = styled.li`
    font-weight:600;
    font-size:1.5em;
    padding:.4em 1em;
    display:flex;
    align-items:center;
    &:hover{
        background-color:rgba(175,167,155,.2);
    }
`;
const Img = styled.img`
    max-width:36px;
    padding-right:15px;
    transition: max-width .2s ease-out;
`;
const ImgMenu =styled.img`
    display:block;
    max-width:24px;
    cursor:pointer;
    margin:${props => props.showSideBar? "0 5% 2% 80%": "5px auto 20px auto"};
`;

const Sidebar = ({items, showSideBar, setShowSidebar}) => {

    return (
        <Wrapper showSideBar={showSideBar}>
            <ImgMenu showSideBar={showSideBar} src={MenuImg} alt='menu_icono' onClick={() => setShowSidebar(!showSideBar)}/>
            {showSideBar? 
                <HeaderSidebar>    
                    <img src={Logo} alt='ashoka logo'/>
                    <Separator/>
                </HeaderSidebar>
                : null
            }
            <Menu>
                { items.map( item =>(
                    <Link to={item.url} style={{textDecoration:"none",color:"#ffffff", marginBottom:"10px"}}>
                        <MenuItem key={item.name}>
                        <Img src={item.img} alt={item.name}/>
                        {showSideBar? item.label : null}
                        </MenuItem>
                    </Link>
                ))}
            </Menu>      
        </Wrapper>
    )
}

export default Sidebar
