import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";

import Navegation from './component/ui/Navegation';
import Login from './component/pages/GenericLogin';
import AdminDasboard from './component/pages/admin/Dasboard';
import AdminUsers from './component/pages/admin/Users';
import AdminPool from './component/pages/admin/Pool';
import AdminTracing from './component/pages/admin/Tracing';
import AdminManagement from './component/pages/admin/Management';
import Commitment from './component/pages/agent/Commitment';
import Community from './component/pages/agent/Community';
import NewCommitment from './component/pages/agent/NewCommitment';

const router = () =>{
    return(
        <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Navegation>
                        <Route exact path="/dasboard" component={AdminDasboard}/>
                        <Route exact path="/users" component={AdminUsers}/>
                        <Route exact path="/pool" component={AdminPool}/>
                        <Route exact path="/tracing" component={AdminTracing}/>
                        <Route exact path="/management" component={AdminManagement}/>
                        <Route exact path="/commitment" component={Commitment}/>
                        <Route exact path="/community" component={Community}/>
                        <Route exact path="/new_commitment" component={NewCommitment}/>
                    </Navegation>
                </Switch>
            
        </Router>
    )
}

export default router;