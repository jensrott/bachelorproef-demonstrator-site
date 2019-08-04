import React, { Component } from "react";
import Register from "../views/Register";
import Demonstrator from "../views/Demonstrator";

import { Redirect, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";

import PrivateRoute from "../private/PrivateRoute";
import Login from "../views/Login";
import About from "../views/About";
import NotFoundPage from "../views/404";
import DemonstratorDetail from "../views/DemonstratorDetail";

class Routing extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <React.Fragment>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              isAuthenticated ? (
                <Redirect to="/demonstrator" />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={() =>
              isAuthenticated ? (
                <Redirect to="/demonstrator" />
              ) : (
                <Route exact path="/login" component={Login} />
              )
            }
          />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <PrivateRoute exact path="/demonstrator" component={Demonstrator} />
          <PrivateRoute
            exact
            path="/demonstrator/:id"
            component={DemonstratorDetail}
          />

          <Route component={NotFoundPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Routing);
