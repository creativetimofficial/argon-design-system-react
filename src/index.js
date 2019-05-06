import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import Landing from "views/examples/Landing.jsx";
import Login from "views/examples/Login.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <Index {...props} />} />
      <Route path="/landing-page" render={props => <Landing {...props} />} />
      <Route path="/login-page" render={props => <Login {...props} />} />
      <Route path="/profile-page" render={props => <Profile {...props} />} />
      <Route path="/register-page" render={props => <Register {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
