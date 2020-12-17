import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Theme from "./Theme";
import CommitmentProvider from "./component/context/CommitmentContext";
import StoreProvider from "./component/context/StoreContext";
import Navegation from "./component/ui/Navegation";
import Login from "./component/pages/Login";
import SplashScreen from "./component/ui/SplashScreen";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthContext } from "./component/context/AuthContext";
import "./App.css";

const NewCommitment = lazy(() => import("./component/ui/NewCommitment"));
const CurrentCommitment = lazy(() =>
  import("./component/pages/CurrentCommitments")
);
const SuccessSendCommitment = lazy(() =>
  import("./component/ui/SuccessSendCommitment")
);

function App() {
  const [authToken, setAuthToken] = useState();
  const setToken = (data) => {
    localStorage.setItem("tokenMAC", JSON.stringify(data.token));
    setAuthToken(data);
  };

  return (
    <StoreProvider>
      <CommitmentProvider>
        <Theme>
          <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
            <Suspense fallback={<SplashScreen />}>
              <Router>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route
                    exact
                    path="/registrar_compromisos"
                    render={() => <NewCommitment />}
                  />
                  <Route
                    exact
                    path="/lista-de-compromisos"
                    render={() => <CurrentCommitment />}
                  />
                  <Route
                    exact
                    path="/success_commitment"
                    render={() => <SuccessSendCommitment />}
                  />
                  <PrivateRoute path="/panel" component={Navegation} />
                </Switch>
              </Router>
            </Suspense>
          </AuthContext.Provider>
        </Theme>
      </CommitmentProvider>
    </StoreProvider>
  );
}

export default App;
