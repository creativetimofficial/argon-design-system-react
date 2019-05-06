import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
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
                      onClick={e => e.preventDefault()}
                    >
                      Menu
                    </NavbarBrand>
                    <button
                      aria-controls="nav-inner-primary"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#nav-inner-primary"
                      data-toggle="collapse"
                      id="nav-inner-primary"
                      type="button"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse
                      id="nav-inner-primary"
                      navbar
                      toggler="#nav-inner-primary"
                    >
                      <div className="navbar-collapse-header">
                        <Row>
                          <Col className="collapse-brand" xs="6">
                            <a href="./index.html">
                              <img
                                alt="..."
                                src={require("assets/img/brand/blue.png")}
                              />
                            </a>
                          </Col>
                          <Col className="collapse-close" xs="6">
                            <button
                              aria-controls="nav-inner-primary"
                              aria-expanded={false}
                              aria-label="Toggle navigation"
                              className="navbar-toggler"
                              data-target="#nav-inner-primary"
                              data-toggle="collapse"
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
                            onClick={e => e.preventDefault()}
                          >
                            Discover <span className="sr-only">(current)</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Profile
                          </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav>
                          <NavLink
                            aria-expanded={false}
                            aria-haspopup={true}
                            data-toggle="dropdown"
                            href="#pablo"
                            id="nav-inner-primary_dropdown_1"
                            onClick={e => e.preventDefault()}
                            role="button"
                          >
                            Settings
                          </NavLink>
                          <DropdownMenu
                            aria-labelledby="nav-inner-primary_dropdown_1"
                            right
                          >
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
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
                      onClick={e => e.preventDefault()}
                    >
                      Menu
                    </NavbarBrand>
                    <button
                      aria-controls="nav-inner-success"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#nav-inner-success"
                      data-toggle="collapse"
                      id="nav-inner-success"
                      type="button"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse
                      id="nav-inner-success"
                      navbar
                      toggler="#nav-inner-success"
                    >
                      <div className="navbar-collapse-header">
                        <Row>
                          <Col className="collapse-brand" xs="6">
                            <a href="./index.html">
                              <img
                                alt="..."
                                src={require("assets/img/brand/blue.png")}
                              />
                            </a>
                          </Col>
                          <Col className="collapse-close" xs="6">
                            <button
                              aria-controls="nav-inner-success"
                              aria-expanded={false}
                              aria-label="Toggle navigation"
                              className="navbar-toggler"
                              data-target="#nav-inner-success"
                              data-toggle="collapse"
                              id="nav-inner-success"
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
                            className="nav-link-icon"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
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
                            onClick={e => e.preventDefault()}
                          >
                            <i className="ni ni-notification-70" />
                            <span className="nav-link-inner--text d-lg-none">
                              Profile
                            </span>
                          </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav>
                          <NavLink
                            aria-expanded={false}
                            aria-haspopup={true}
                            className="nav-link-icon"
                            data-toggle="dropdown"
                            href="#pablo"
                            id="nav-inner-success_dropdown_1"
                            onClick={e => e.preventDefault()}
                            role="button"
                          >
                            <i className="ni ni-settings-gear-65" />
                            <span className="nav-link-inner--text d-lg-none">
                              Settings
                            </span>
                          </NavLink>
                          <DropdownMenu
                            aria-labelledby="nav-inner-success_dropdown_1"
                            right
                          >
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
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
