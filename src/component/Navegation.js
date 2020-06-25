import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import roles from '../helpers/roles'

// import images
import M1 from '../assets/img/dashboard1.png';
import M2 from '../assets/img/gestion1.png';
import M3 from '../assets/img/gps1.png';
import M4 from '../assets/img/team1.png';
import M5 from '../assets/img/paper1.png';
import M6 from '../assets/img/agreement1.png';
import M7 from '../assets/img/bullhorn1.png';

const rol = {
    ADM_USR:[
        {name:'Dashboard', label:'Dashboard', url:'/dasboard',img: M1},
        {name:'Usuarios', label:'Usuarios', url:'/users',img:M2},
        {name:'Pool', label:'Pool', url:'/pool',img:M3},
        {name:'Seguimiento', label:'Seguimiento', url:'/tracing',img:M4},
        {name:'Gestion', label:'Gestion', url:'/management',img:M5}
    ],
    COL_USR:[
        {name:'Dashboard', label:'Dashboard', url:'/dasboard',img: M1},
        {name:'Gestion', label:'Gestion', url:'/management',img:M5}
    ],
    AGE_USR:[
        {name:'Dashboard', label:'Dashboard', url:'/dasboard',img: M1},
        {name:'Compromisos', label:'Compromisos', url:'/commitment',img: M6},
        {name:'Comunidad', label:'Comunidad', url:'/community',img: M7}
    ]
}

const Wraper = styled.div`
    display: flex;

`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Navegation = (props) => {

    return(
        <Wraper>
            <Sidebar items={rol[roles.userHasRole()]} isAgent={roles.userHasRole()==='AGE_USR'?true:false}/>
            <Body>
                <Navbar/>
                <div style={{padding:".2em 5em"}}>
                    {props.children}
                </div>
            </Body>
        </Wraper>
    )
}

export default Navegation;