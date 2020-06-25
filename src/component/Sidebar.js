import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/img/ashoka_logo.png';
import MenuImg from '../assets/img/menu.png';
import ImgCommitment from '../assets/img/meeting1.png';

const Wrapper = styled.div`
    width: ${props => props.showSideBar ? '18em' : '5em'};
    height:100vh;
    border:0;
    position: relative;
    display: flex;
    flex: ${props => props.showSideBar ? '18em' : '5em'};
    justify-content: center;
    z-index: 1;
    transition: all .2s ease-out;
    
`;
const SideBar = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    width: inherit;
    height: inherit;
    padding: 1em 0;
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
    position:fixed;
    overflow:auto;
`;
const HeaderSidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom:1em;
`;
const Separator = styled.div`
    border-bottom:solid 1px #ffffff;
    width:100%;
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
    transition: max-width .2s ease-out;
    padding-right: ${props => props.showSideBar ? '.5em' : '0'};
`;
const ImgCom = styled.img`
    max-width: ${props => props.showSideBar ? '100px' : '36px'};
    transition: max-width .2s ease-out;
`;
const ImgMenu = styled.img`
    display:block;
    max-width:24px;
    cursor:pointer;
    margin:${props => props.showSideBar? "0 5% 2% 80%": "5px auto 20px auto"};
`;
const Commitment = styled.div`
    display: flex;
    flex: column;
    justify-content: center;
    margin: ${props => props.showSideBar ? '5em 0 0 0' : '20em 0 0 0'};
`;
const CommitmentFull = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 150px;
`;

const Sidebar = ({ items, isAgent }) => {
    const [showSideBar, setShowSidebar] = useState(false);

    return (
        <Wrapper showSideBar={showSideBar}>
            <SideBar>
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
                        <Link to={item.url} key={item.name} style={{textDecoration:"none",color:"#ffffff", marginBottom:"10px"}}>
                            <MenuItem>
                            <Img src={item.img} alt={item.name} showSideBar={showSideBar}/>
                            {showSideBar? item.label : null}
                            </MenuItem>
                        </Link>
                    ))}
                    {isAgent?
                        <Commitment showSideBar={showSideBar}>
                            {showSideBar?
                                <CommitmentFull>
                                    <ImgCom src={ImgCommitment} alt='commitment logo' showSideBar={showSideBar}/>
                                    <p style={{textAlign:'center'}}>Es el momento de hacer la diferencia</p>
                                </CommitmentFull>
                                :
                                <Link to='/commitment'>
                                    <ImgCom src={ImgCommitment} alt='commitment logo' showSideBar={showSideBar}/>
                                </Link>
                            }
                        
                        </Commitment>
                        : null
                    }
                </Menu>    
            </SideBar>      
        </Wrapper>
    )
}

export default Sidebar
