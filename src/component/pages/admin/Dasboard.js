import React, {useState} from 'react';
import Sidebar from '../../Sidebar'
// import images
import M1 from '../../../assets/img/dashboard1.png';
import M2 from '../../../assets/img/gestion1.png';
import M3 from '../../../assets/img/gps1.png';
import M4 from '../../../assets/img/team1.png';
import M5 from '../../../assets/img/paper1.png';

const items = [
    {name:'Dashboard', label:'Dashboard', url:'/dasboard_admin',img: M1},
    {name:'Usuarios', label:'Usuarios', url:'/users_admin',img:M2},
    {name:'Pool', label:'Pool', url:'/pool_admin',img:M3},
    {name:'Seguimiento', label:'Seguimiento', url:'/tracing_admin',img:M4},
    {name:'Gestion', label:'Gestion', url:'/management_admin',img:M5}
]

const Dasboard = () =>{
    const [showSideBar, setShowSidebar] = useState(false); 
    return(
        <div>
            <Sidebar items={items} showSideBar={showSideBar} setShowSidebar={setShowSidebar}/>
        </div>
    )
}

export default Dasboard;