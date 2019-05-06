import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Col } from "reactstrap";

class Index extends React.Component {
  render() {
    return (
      <>
        <Col lg="5">
          <h3 className="h4 text-success font-weight-bold mb-5">
            Navigation Pills
          </h3>
          <Nav
            className="nav-pills-circle mb-3"
            id="tabs_2"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-controls="home"
                aria-selected={true}
                className="rounded-circle active"
                data-toggle="tab"
                href="#pablo"
                id="home-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                <span className="nav-link-icon d-block">
                  <i className="ni ni-atom" />
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="profile"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="profile-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                <span className="nav-link-icon d-block">
                  <i className="ni ni-chat-round" />
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-controls="contact"
                aria-selected={false}
                data-toggle="tab"
                href="#pablo"
                id="contact-tab"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                <span className="nav-link-icon d-block">
                  <i className="ni ni-cloud-download-95" />
                </span>
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </>
    );
  }
}

export default Index;
