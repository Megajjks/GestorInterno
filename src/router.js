import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

import Login from './component/pages/GenericLogin';
import AdminDasboard from './component/pages/admin/Dasboard';
import AdminUsers from './component/pages/admin/Users';
import AdminPool from './component/pages/admin/Pool';
import AdminTracing from './component/pages/admin/Tracing';
import AdminManagement from './component/pages/admin/Management';

const router = () =>{
    return(
        <Router>
            <Route exact path="/" component={Login}/>
            <Route exact path="/dasboard_admin" component={AdminDasboard}/>
            <Route exact path="/users_admin" component={AdminUsers}/>
            <Route exact path="/pool_admin" component={AdminPool}/>
            <Route exact path="/tracing_admin" component={AdminTracing}/>
            <Route exact path="/management_admin" component={AdminManagement}/>
        </Router>
    )
}

export default router;