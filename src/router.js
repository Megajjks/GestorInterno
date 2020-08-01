import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navegation from "./component/ui/Navegation";
import Login from "./component/pages/Login";
import AdminDasboard from "./component/pages/admin/Dasboard";
import AdminUsers from "./component/pages/admin/Users";
import AdminPool from "./component/pages/admin/Pool";
import AdminTracing from "./component/pages/admin/Tracing";
import AdminManagement from "./component/pages/admin/Management";
import Commitment from "./component/pages/agent/Commitment";
import Community from "./component/pages/agent/Community";
import NewCommitment from "./component/ui/NewCommitment";
import TracingCommitmentDetails from "./component/ui/TracingCommitmentDetails";
import CommitmentReport from "./component/ui/CommitmentReport";
import SuccessSendCommitment from "./component/ui/SuccessSendCommitment";

const router = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/new_commitment" component={NewCommitment} />
        <Route
          exact
          path="/success_commitment"
          component={SuccessSendCommitment}
        />
        <Navegation>
          <Route exact path="/dasboard" component={AdminDasboard} />
          <Route exact path="/users" component={AdminUsers} />
          <Route exact path="/pool" component={AdminPool} />
          <Route exact path="/tracing" component={AdminTracing} />
          <Route exact path="/management" component={AdminManagement} />
          <Route exact path="/commitment" component={Commitment} />
          <Route exact path="/community" component={Community} />
          <Route
            exact
            path="/commitment_report/:id"
            component={CommitmentReport}
          />
          <Route
            exact
            path="/traicing_commitment/:id"
            component={TracingCommitmentDetails}
          />
        </Navegation>
      </Switch>
    </Router>
  );
};

export default router;
