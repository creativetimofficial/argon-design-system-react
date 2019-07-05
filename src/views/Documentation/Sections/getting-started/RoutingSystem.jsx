/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

class RoutingSystem extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Routing System
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          All of our routes can be found inside{" "}
          <code className="highlighter-rouge">src/index.js</code>.
        </p>
        <p>
          A good place to learn how to work with routes inside a React app is
          the official docs of the react-router:{" "}
          <a href="https://reacttraining.com/react-router/" target="_blank">
            react router training
          </a>
          .
        </p>
      </>
    );
  }
}

export default RoutingSystem;
