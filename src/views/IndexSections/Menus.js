/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class Menus extends React.Component {
  render() {
    return (
      <>
        <Row className="justify-content-center mt-md">
          <Col lg="12">
            {/* Menu */}
            <h3 className="h4 text-success font-weight-bold mb-4">Menu</h3>
            <Row>
              <Col lg="6">
                <div className="mb-3">
                  <small className="text-uppercase font-weight-bold">
                    With text
                  </small>
                </div>
                <Navbar className="navbar-dark bg-primary rounded" expand="lg">
                  <Container>
                    <NavbarBrand
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Menu
                    </NavbarBrand>
                    <button className="navbar-toggler" id="nav-inner-primary">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse navbar toggler="#nav-inner-primary">
                      <div className="navbar-collapse-header">
                        <Row>
                          <Col className="collapse-brand" xs="6">
                            <Link to="/">
                              <img
                                alt="..."
                                src={require("assets/img/brand/argon-react.png")}
                              />
                            </Link>
                          </Col>
                          <Col className="collapse-close" xs="6">
                            <button
                              className="navbar-toggler"
                              id="nav-inner-primary"
                              type="button"
                            >
                              <span />
                              <span />
                            </button>
                          </Col>
                        </Row>
                      </div>
                      <Nav className="ml-lg-auto" navbar>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Discover <span className="sr-only">(current)</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Profile
                          </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                          <DropdownToggle nav>Settings</DropdownToggle>
                          <DropdownMenu
                            aria-labelledby="nav-inner-primary_dropdown_1"
                            right
                          >
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Nav>
                    </UncontrolledCollapse>
                  </Container>
                </Navbar>
              </Col>
              <Col className="mt-4 mt-lg-0" lg="6">
                <div className="mb-3">
                  <small className="text-uppercase font-weight-bold">
                    With icons
                  </small>
                </div>
                <Navbar className="navbar-dark bg-success rounded" expand="lg">
                  <Container>
                    <NavbarBrand
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Menu
                    </NavbarBrand>
                    <button className="navbar-toggler" id="nav-inner-success">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse navbar toggler="#nav-inner-success">
                      <div className="navbar-collapse-header">
                        <Row>
                          <Col className="collapse-brand" xs="6">
                            <Link to="/">
                              <img
                                alt="..."
                                src={require("assets/img/brand/argon-react.png")}
                              />
                            </Link>
                          </Col>
                          <Col className="collapse-close" xs="6">
                            <button
                              className="navbar-toggler"
                              id="nav-inner-success"
                            >
                              <span />
                              <span />
                            </button>
                          </Col>
                        </Row>
                      </div>
                      <Nav className="ml-lg-auto" navbar>
                        <NavItem>
                          <NavLink
                            className="nav-link-icon"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="ni ni-favourite-28" />
                            <span className="nav-link-inner--text d-lg-none">
                              Discover
                            </span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className="nav-link-icon"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="ni ni-notification-70" />
                            <span className="nav-link-inner--text d-lg-none">
                              Profile
                            </span>
                          </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                          <DropdownToggle nav className="nav-link-icon">
                            <i className="ni ni-settings-gear-65" />
                            <span className="nav-link-inner--text d-lg-none">
                              Settings
                            </span>
                          </DropdownToggle>
                          <DropdownMenu
                            aria-labelledby="nav-inner-success_dropdown_1"
                            right
                          >
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Nav>
                    </UncontrolledCollapse>
                  </Container>
                </Navbar>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Menus;
