import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

import Login from './component/pages/GenericLogin';
import AdminDasboard from './component/pages/admin/Dasboard';

const router = () =>{
    return(
        <Router>
            <Route exact path="/" component={Login}/>
            <Route exact path="/dasboard_admin" component={AdminDasboard}/>
        </Router>
    )
}

export default router;