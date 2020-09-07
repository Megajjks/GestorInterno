import React, { Suspense } from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { Wraper, Body } from "./styled";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { rolName } from "../../../helpers";
import { renderRol } from "../../../routes/renderRol";

const Navegation = (props) => {
  const { location } = props;

  return (
    <Wraper>
      <Sidebar
        items={renderRol()}
        isAgent={rolName() === "agent" ? true : false}
      />
      <Body>
        <Navbar />
        <div style={{ padding: ".2em 3em" }}>
          <Suspense fallback="Cargando...">
            <Switch key={location.pathname}>
              {renderRol().map((route, idx) => {
                return (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                );
              })}
            </Switch>
          </Suspense>
          {props.children}
        </div>
      </Body>
    </Wraper>
  );
};

export default withRouter(Navegation);
