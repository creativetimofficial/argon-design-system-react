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

class Navbars extends React.Component {
  render() {
    return (
      <>
        <section>
          <Container>
            {/* Navigation */}
            <h2 className="mb-5">
              <span>Navbars</span>
            </h2>
          </Container>
          {/* Navbar default */}
          <Navbar className="navbar-dark bg-default" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Default Color
              </NavbarBrand>
              <button
                aria-controls="navbar-default"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#navbar-default"
                data-toggle="collapse"
                id="navbar-default"
                type="button"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                id="navbar-default"
                navbar
                toggler="#navbar-default"
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
                        aria-controls="navbar-default"
                        aria-expanded={false}
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#navbar-default"
                        data-toggle="collapse"
                        id="navbar-default"
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
                      id="navbar-default_dropdown_1"
                      onClick={e => e.preventDefault()}
                      role="button"
                    >
                      <i className="ni ni-settings-gear-65" />
                      <span className="nav-link-inner--text d-lg-none">
                        Settings
                      </span>
                    </NavLink>
                    <DropdownMenu
                      aria-labelledby="navbar-default_dropdown_1"
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
          {/* Navbar primary */}
          <Navbar className="navbar-dark bg-primary mt-4" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Primary Color
              </NavbarBrand>
              <button
                aria-controls="navbar-primary"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#navbar-primary"
                data-toggle="collapse"
                id="navbar-primary"
                type="button"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                id="navbar-primary"
                navbar
                toggler="#navbar-primary"
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
                        aria-controls="navbar-primary"
                        aria-expanded={false}
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#navbar-primary"
                        data-toggle="collapse"
                        id="navbar-primary"
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
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Discover <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Profile
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav>
                    <NavLink
                      aria-expanded={false}
                      aria-haspopup={true}
                      data-toggle="dropdown"
                      href="#pablo"
                      id="navbar-primary_dropdown_1"
                      onClick={e => e.preventDefault()}
                      role="button"
                    >
                      Settings
                    </NavLink>
                    <DropdownMenu
                      aria-labelledby="navbar-primary_dropdown_1"
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
          {/* Navbar success */}
          <Navbar className="navbar-dark bg-success mt-4" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Success Color
              </NavbarBrand>
              <button
                aria-controls="navbar-success"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#navbar-success"
                data-toggle="collapse"
                id="navbar-success"
                type="button"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                id="navbar-success"
                navbar
                toggler="#navbar-success"
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
                        aria-controls="navbar-success"
                        aria-expanded={false}
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#navbar-success"
                        data-toggle="collapse"
                        id="navbar-success"
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
                        Favorites
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="ni ni-planet" />
                      <span className="nav-link-inner--text d-lg-none">
                        Another action
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
                      id="navbar-success_dropdown_1"
                      onClick={e => e.preventDefault()}
                      role="button"
                    >
                      <i className="ni ni-settings-gear-65" />
                      <span className="nav-link-inner--text d-lg-none">
                        Settings
                      </span>
                    </NavLink>
                    <DropdownMenu
                      aria-labelledby="navbar-success_dropdown_1"
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
          {/* Navbar danger */}
          <Navbar className="navbar-dark bg-danger mt-4" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Danger Color
              </NavbarBrand>
              <button
                aria-controls="navbar-danger"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#navbar-danger"
                data-toggle="collapse"
                id="navbar-danger"
                type="button"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                id="navbar-danger"
                navbar
                toggler="#navbar-danger"
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
                        aria-controls="navbar-danger"
                        aria-expanded={false}
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#navbar-danger"
                        data-toggle="collapse"
                        id="navbar-danger"
                        type="button"
                      >
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none">
                        Facebook
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                      <span className="nav-link-inner--text d-lg-none">
                        Twitter
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                      <span className="nav-link-inner--text d-lg-none">
                        Google +
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none">
                        Instagram
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          {/* Navbar warning */}
          <Navbar className="navbar-dark bg-warning mt-4" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Warning Color
              </NavbarBrand>
              <button
                aria-controls="navbar-warning"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#navbar-warning"
                data-toggle="collapse"
                id="navbar-warning"
                type="button"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                id="navbar-warning"
                navbar
                toggler="#navbar-warning"
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
                        aria-controls="navbar-warning"
                        aria-expanded={false}
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#navbar-warning"
                        data-toggle="collapse"
                        id="navbar-warning"
                        type="button"
                      >
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none">
                        Share
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                      <span className="nav-link-inner--text d-lg-none">
                        Tweet
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-pinterest" />
                      <span className="nav-link-inner--text d-lg-none">
                        Pin
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          {/* Navbar info */}
          <Navbar className="navbar-dark bg-info mt-4" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Info Color
              </NavbarBrand>
              <button
                aria-controls="navbar-info"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#navbar-info"
                data-toggle="collapse"
                id="navbar-info"
                type="button"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                id="navbar-info"
                navbar
                toggler="#navbar-info"
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
                        aria-controls="navbar-info"
                        aria-expanded={false}
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#navbar-info"
                        data-toggle="collapse"
                        id="navbar-info"
                        type="button"
                      >
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text">Facebook</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                      <span className="nav-link-inner--text">Twitter</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text">Instagram</span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </section>
      </>
    );
  }
}

export default Navbars;
