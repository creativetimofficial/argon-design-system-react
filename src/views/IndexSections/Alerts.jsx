import React from "react";

// reactstrap components
import { UncontrolledAlert } from "reactstrap";

class Alerts extends React.Component {
  render() {
    return (
      <>
        <h3 className="mt-lg mb-4">
          <span>Alerts</span>
        </h3>
        <UncontrolledAlert color="success" fade={false}>
          <span className="alert-inner--icon">
            <i className="ni ni-like-2" />
          </span>
          <span className="alert-inner--text ml-1">
            <strong>Success!</strong> This is a success alert—check it out!
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert color="info" fade={false}>
          <span className="alert-inner--icon">
            <i className="ni ni-bell-55" />
          </span>
          <span className="alert-inner--text ml-1">
            <strong>Info!</strong> This is an info alert—check it out!
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert color="warning" fade={false}>
          <span className="alert-inner--icon">
            <i className="ni ni-bell-55" />
          </span>
          <span className="alert-inner--text ml-1">
            <strong>Warning!</strong> This is a warning alert—check it out!
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert color="danger" fade={false}>
          <span className="alert-inner--icon">
            <i className="ni ni-support-16" />
          </span>
          <span className="alert-inner--text ml-1">
            <strong>Danger!</strong> This is an error alert—check it out!
          </span>
        </UncontrolledAlert>
      </>
    );
  }
}

export default Alerts;
