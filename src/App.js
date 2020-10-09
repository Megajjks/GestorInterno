import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Theme from "./Theme";
import CommitmentProvider from "./component/context/CommitmentContext";
import Navegation from "./component/ui/Navegation";
import Login from "./component/pages/Login";
import NewCommitment from "./component/ui/NewCommitment";
import SuccessSendCommitment from "./component/ui/SuccessSendCommitment";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthContext } from "./component/context/AuthContext";
import "./App.css";

function App() {
  const [authToken, setAuthToken] = useState();
  const setToken = (data) => {
    localStorage.setItem("tokenMAC", JSON.stringify(data.token));
    setAuthToken(data);
  };

  return (
    <CommitmentProvider>
      <Theme>
        <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/new_commitment" component={NewCommitment} />
              <Route
                exact
                path="/success_commitment"
                component={SuccessSendCommitment}
              />
              <PrivateRoute path="/panel" component={Navegation} />
            </Switch>
          </Router>
        </AuthContext.Provider>
      </Theme>
    </CommitmentProvider>
  );
}

export default App;
