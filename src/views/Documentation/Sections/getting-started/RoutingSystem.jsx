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
          <a
            href="https://reacttraining.com/react-router/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react router training
          </a>
          .
        </p>
      </>
    );
  }
}

export default RoutingSystem;
