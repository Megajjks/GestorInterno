import React from "react";
import "./App.css";
import Theme from "./Theme";
import Router from "./router";
import CommitmentProvider from "./component/context/CommitmentContext";

function App() {
  return (
    <CommitmentProvider>
      <Theme>
        <Router />
      </Theme>
    </CommitmentProvider>
  );
}

export default App;
