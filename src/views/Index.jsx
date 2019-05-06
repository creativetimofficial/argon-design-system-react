import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  UncontrolledAlert,
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import DemoFooter from "components/Footers/DemoFooter.jsx";

class Index extends React.Component {
  render() {
    return (
      <>
        <DemoNavbar />
        <main>
          <div className="position-relative">
            {/* Hero for FREE version */}
            <section className="section section-lg section-hero section-shaped">
              {/* Background circles */}
              <div className="shape shape-style-1 shape-primary">
                <span className="span-150" />
                <span className="span-50" />
                <span className="span-50" />
                <span className="span-75" />
                <span className="span-100" />
                <span className="span-75" />
                <span className="span-50" />
                <span className="span-100" />
                <span className="span-50" />
                <span className="span-100" />
              </div>
              <Container className="shape-container d-flex align-items-center py-lg">
                <div className="col px-0">
                  <Row className="align-items-center justify-content-center">
                    <Col className="text-center" lg="6">
                      <img
                        alt="..."
                        className="img-fluid"
                        src={require("assets/img/brand/white.png")}
                        style={{ width: "200px" }}
                      />
                      <p className="lead text-white">
                        A beautiful Design System for Bootstrap 4. It's Free and
                        Open Source.
                      </p>
                      <div className="btn-wrapper mt-5">
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system"
                          size="lg"
                        >
                          <span className="btn-inner--icon">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">Download HTML</span>
                        </Button>
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="github"
                          href="https://github.com/creativetimofficial/argon-design-system"
                          rel="noopener noreferrer"
                          size="lg"
                          target="_blank"
                        >
                          <span className="btn-inner--icon">
                            <i className="fa fa-github" />
                          </span>
                          <span className="btn-inner--text">
                            <span className="text-warning">Star us</span>
                            on Github
                          </span>
                        </Button>
                      </div>
                      <div className="mt-5">
                        <small className="text-white font-weight-bold mb-0 mr-2">
                          *proudly coded by
                        </small>
                        <img
                          alt="..."
                          src={require("assets/img/brand/creativetim-white-slim.png")}
                          style={{ height: "28px" }}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew zindex-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>
          <section
            className="section section-components pb-0"
            id="section-components"
          >
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  {/* Basic elements */}
                  <h2 className="mb-5">
                    <span>Basic Elements</span>
                  </h2>
                  {/* Buttons */}
                  <h3 className="h4 text-success font-weight-bold mb-4">
                    Buttons
                  </h3>
                  {/* Button styles */}
                  <div>
                    <Button color="primary" type="button">
                      Button
                    </Button>
                    <Button
                      className="btn-icon btn-3"
                      color="primary"
                      type="button"
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-bag-17" />
                      </span>
                      <span className="btn-inner--text">With icon</span>
                    </Button>
                    <Button
                      className="btn-icon btn-2"
                      color="primary"
                      type="button"
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-bag-17" />
                      </span>
                    </Button>
                    {/* Button wizes */}
                    <div className="mb-3 mt-5">
                      <small className="text-uppercase font-weight-bold">
                        Pick your size
                      </small>
                    </div>
                    <Button color="primary" size="sm" type="button">
                      Small
                    </Button>
                    <Button className="btn-1" color="primary" type="button">
                      Regular
                    </Button>
                    <Button color="primary" size="lg" type="button">
                      Large Button
                    </Button>
                  </div>
                  {/* Button colors */}
                  <div className="mb-3 mt-5">
                    <small className="text-uppercase font-weight-bold">
                      Pick your color
                    </small>
                  </div>
                  <Button className="btn-1" color="primary" type="button">
                    Primary
                  </Button>
                  <Button className="btn-1" color="info" type="button">
                    Info
                  </Button>
                  <Button className="btn-1" color="success" type="button">
                    Success
                  </Button>
                  <Button className="btn-1" color="warning" type="button">
                    Warning
                  </Button>
                  <Button className="btn-1" color="danger" type="button">
                    Danger
                  </Button>
                  <Button
                    className="btn-1 btn-neutral"
                    color="default"
                    type="button"
                  >
                    Neutral
                  </Button>
                  <div className="mb-3 mt-5">
                    <small className="text-uppercase font-weight-bold">
                      Outline
                    </small>
                  </div>
                  <Button
                    className="btn-1"
                    color="primary"
                    outline
                    type="button"
                  >
                    Outline-primary
                  </Button>
                  <Button className="btn-1" color="info" outline type="button">
                    Outline-info
                  </Button>
                  <Button
                    className="btn-1"
                    color="success"
                    outline
                    type="button"
                  >
                    Outline-success
                  </Button>
                  <Button
                    className="btn-1"
                    color="warning"
                    outline
                    type="button"
                  >
                    Outline-warning
                  </Button>
                  <Button
                    className="btn-1"
                    color="danger"
                    outline
                    type="button"
                  >
                    Outline-danger
                  </Button>
                  {/* Button links */}
                  <div className="mb-3 mt-5">
                    <small className="text-uppercase font-weight-bold">
                      Links
                    </small>
                  </div>
                  <Button
                    className="text-default"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Default
                  </Button>
                  <Button
                    className="text-primary"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Primary
                  </Button>
                  <Button
                    className="text-info"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Info
                  </Button>
                  <Button
                    className="text-success"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Success
                  </Button>
                  <Button
                    className="text-warning"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Warning
                  </Button>
                  <Button
                    className="text-danger"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Danger
                  </Button>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 section-components">
            <Container className="mb-5">
              {/* Inputs */}
              <h3 className="h4 text-success font-weight-bold mb-4">Inputs</h3>
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  Form controls
                </small>
              </div>
              <Row>
                <Col lg="4" sm="6">
                  <FormGroup>
                    <Input placeholder="Regular" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-zoom-split-in" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Search" type="text" />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col lg="4" sm="6">
                  <FormGroup>
                    <Input disabled placeholder="Regular" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="mb-4">
                      <Input placeholder="Birthday" type="text" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i className="ni ni-zoom-split-in" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col lg="4" sm="6">
                  <FormGroup className="has-success">
                    <Input
                      className="is-valid"
                      placeholder="Success"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup className="has-danger">
                    <Input
                      className="is-invalid"
                      placeholder="Error Input"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Container>
            <div className="py-5 bg-secondary">
              <Container>
                {/* Inputs (alternative) */}
                <div className="mb-3">
                  <small className="text-uppercase font-weight-bold">
                    Form controls (alternative)
                  </small>
                </div>
                <Row>
                  <Col lg="4" sm="6">
                    <FormGroup>
                      <Input
                        className="form-control-alternative"
                        placeholder="Regular"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-zoom-split-in" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Search" type="text" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col lg="4" sm="6">
                    <FormGroup>
                      <Input
                        className="form-control-alternative"
                        disabled
                        placeholder="Regular"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-4">
                        <Input placeholder="Birthday" type="text" />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <i className="ni ni-zoom-split-in" />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col lg="4" sm="6">
                    <FormGroup className="has-success">
                      <Input
                        className="form-control-alternative is-valid"
                        placeholder="Success"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup className="has-danger">
                      <Input
                        className="form-control-alternative is-invalid"
                        placeholder="Error Input"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
          <section className="section">
            <Container>
              {/* Custom controls */}
              <Row>
                <Col lg="3" md="6">
                  {/* Checkboxes */}
                  <div className="mb-3">
                    <small className="text-uppercase font-weight-bold">
                      Checkboxes
                    </small>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      className="custom-control-input"
                      id="customCheck1"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      <span>Unchecked</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      className="custom-control-input"
                      defaultChecked
                      id="customCheck2"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck2"
                    >
                      <span>Checked</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      className="custom-control-input"
                      disabled
                      id="customCheck3"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck3"
                    >
                      <span>Disabled Unchecked</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      className="custom-control-input"
                      defaultChecked
                      disabled
                      id="customCheck4"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck4"
                    >
                      <span>Disabled Checked</span>
                    </label>
                  </div>
                </Col>
                <Col className="mt-4 mt-md-0" lg="3" sm="6">
                  {/* Radio buttons */}
                  <div className="mb-3">
                    <small className="text-uppercase font-weight-bold">
                      Radios
                    </small>
                  </div>
                  <div className="custom-control custom-radio mb-3">
                    <input
                      className="custom-control-input"
                      id="customRadio1"
                      name="custom-radio-1"
                      type="radio"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio1"
                    >
                      <span>Unchecked</span>
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-3">
                    <input
                      className="custom-control-input"
                      defaultChecked
                      id="customRadio2"
                      name="custom-radio-1"
                      type="radio"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio2"
                    >
                      <span>Checked</span>
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-3">
                    <input
                      className="custom-control-input"
                      disabled
                      id="customRadio3"
                      name="custom-radio-2"
                      type="radio"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio3"
                    >
                      <span>Disabled unchecked</span>
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-3">
                    <input
                      className="custom-control-input"
                      defaultChecked
                      disabled
                      id="customRadio4"
                      name="custom-radio-2"
                      type="radio"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio4"
                    >
                      <span>Disabled checkbox</span>
                    </label>
                  </div>
                </Col>
                <Col className="mt-4 mt-md-0" lg="3" sm="6">
                  {/* Toggle buttons */}
                  <div className="mb-3">
                    <small className="text-uppercase font-weight-bold">
                      Toggle buttons
                    </small>
                  </div>
                  <label className="custom-toggle">
                    <input type="checkbox" />
                    <span className="custom-toggle-slider rounded-circle" />
                  </label>
                  <span className="clearfix" />
                  <label className="custom-toggle">
                    <input defaultChecked type="checkbox" />
                    <span className="custom-toggle-slider rounded-circle" />
                  </label>
                </Col>
                <Col className="mt-4 mt-md-0" lg="3" sm="6">
                  <div className="mb-3">
                    <small className="text-uppercase font-weight-bold">
                      Sliders
                    </small>
                  </div>
                  {/* Simple slider */}
                  <div className="input-slider-container">
                    <div
                      className="input-slider"
                      data-range-value-max="500"
                      data-range-value-min="100"
                      id="input-slider"
                    />
                    {/* Input slider values */}
                    <Row className="mt-3 d-none">
                      <Col xs="6">
                        <span
                          className="range-slider-value"
                          data-range-value-low="100"
                          id="input-slider-value"
                        />
                      </Col>
                    </Row>
                  </div>
                  {/* Range slider */}
                  <div className="mt-5">
                    {/* Range slider container */}
                    <div
                      data-range-value-max="500"
                      data-range-value-min="100"
                      id="input-slider-range"
                    />
                    {/* Range slider values */}
                    <Row className="d-none">
                      <Col xs="6">
                        <span
                          className="range-slider-value value-low"
                          data-range-value-low="200"
                          id="input-slider-range-value-low"
                        />
                      </Col>
                      <Col className="text-right" xs="6">
                        <span
                          className="range-slider-value value-high"
                          data-range-value-high="400"
                          id="input-slider-range-value-high"
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center mt-md">
                <Col lg="12">
                  {/* Menu */}
                  <h3 className="h4 text-success font-weight-bold mb-4">
                    Menu
                  </h3>
                  <Row>
                    <Col lg="6">
                      <div className="mb-3">
                        <small className="text-uppercase font-weight-bold">
                          With text
                        </small>
                      </div>
                      <Navbar
                        className="navbar-dark bg-primary rounded"
                        expand="lg"
                      >
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
                                  Discover{" "}
                                  <span className="sr-only">(current)</span>
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
                      <Navbar
                        className="navbar-dark bg-success rounded"
                        expand="lg"
                      >
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
            </Container>
          </section>
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
          <section className="section section-components">
            <Container>
              <h3 className="h4 text-success font-weight-bold mb-4">
                Tabs
                <Row className="justify-content-center">
                  <Col lg="6">
                    {/* Tabs with icons */}
                    <div className="mb-3">
                      <small className="text-uppercase font-weight-bold">
                        With icons
                      </small>
                    </div>
                    <div className="nav-wrapper">
                      <Nav
                        className="nav-fill flex-column flex-md-row"
                        id="tabs-icons-text"
                        pills
                        role="tablist"
                      >
                        <NavItem>
                          <NavLink
                            aria-controls="tabs-icons-text-1"
                            aria-selected={true}
                            className="mb-sm-3 mb-md-0 active"
                            data-toggle="tab"
                            href="#pablo"
                            id="tabs-icons-text-1-tab"
                            onClick={e => e.preventDefault()}
                            role="tab"
                          >
                            <i className="ni ni-cloud-upload-96 mr-2" />
                            Home
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-controls="tabs-icons-text-2"
                            aria-selected={false}
                            className="mb-sm-3 mb-md-0"
                            data-toggle="tab"
                            href="#pablo"
                            id="tabs-icons-text-2-tab"
                            onClick={e => e.preventDefault()}
                            role="tab"
                          >
                            <i className="ni ni-bell-55 mr-2" />
                            Profile
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-controls="tabs-icons-text-3"
                            aria-selected={false}
                            className="mb-sm-3 mb-md-0"
                            data-toggle="tab"
                            href="#pablo"
                            id="tabs-icons-text-3-tab"
                            onClick={e => e.preventDefault()}
                            role="tab"
                          >
                            <i className="ni ni-calendar-grid-58 mr-2" />
                            Messages
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                    <Card className="shadow">
                      <CardBody>
                        <TabContent id="myTabContent">
                          <TabPane
                            aria-labelledby="tabs-icons-text-1-tab"
                            className="fade show active"
                            id="tabs-icons-text-1"
                            role="tabpanel"
                          >
                            <p className="description">
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse. Mustache cliche
                              tempor, williamsburg carles vegan helvetica.
                              Reprehenderit butcher retro keffiyeh dreamcatcher
                              synth.
                            </p>
                            <p className="description">
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse.
                            </p>
                          </TabPane>
                          <TabPane
                            aria-labelledby="tabs-icons-text-2-tab"
                            className="fade"
                            id="tabs-icons-text-2"
                            role="tabpanel"
                          >
                            <p className="description">
                              Cosby sweater eu banh mi, qui irure terry
                              richardson ex squid. Aliquip placeat salvia cillum
                              iphone. Seitan aliquip quis cardigan american
                              apparel, butcher voluptate nisi qui.
                            </p>
                          </TabPane>
                          <TabPane
                            aria-labelledby="tabs-icons-text-3-tab"
                            className="fade"
                            id="tabs-icons-text-3"
                            role="tabpanel"
                          >
                            <p className="description">
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse. Mustache cliche
                              tempor, williamsburg carles vegan helvetica.
                              Reprehenderit butcher retro keffiyeh dreamcatcher
                              synth.
                            </p>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="mt-5 mt-lg-0" lg="6">
                    {/* Menu */}
                    <div className="mb-3">
                      <small className="text-uppercase font-weight-bold">
                        With text
                      </small>
                    </div>
                    <div className="nav-wrapper">
                      <Nav
                        className="nav-fill flex-column flex-md-row"
                        id="tabs-text"
                        pills
                        role="tablist"
                      >
                        <NavItem>
                          <NavLink
                            aria-controls="tabs-text-1"
                            aria-selected={true}
                            className="mb-sm-3 mb-md-0 active"
                            data-toggle="tab"
                            href="#pablo"
                            id="tabs-text-1-tab"
                            onClick={e => e.preventDefault()}
                            role="tab"
                          >
                            Home
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-controls="tabs-text-2"
                            aria-selected={false}
                            className="mb-sm-3 mb-md-0"
                            data-toggle="tab"
                            href="#pablo"
                            id="tabs-text-2-tab"
                            onClick={e => e.preventDefault()}
                            role="tab"
                          >
                            Profile
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-controls="tabs-text-3"
                            aria-selected={false}
                            className="mb-sm-3 mb-md-0"
                            data-toggle="tab"
                            href="#pablo"
                            id="tabs-text-3-tab"
                            onClick={e => e.preventDefault()}
                            role="tab"
                          >
                            Messages
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                    <Card className="shadow">
                      <CardBody>
                        <TabContent id="myTabContent">
                          <TabPane
                            aria-labelledby="tabs-text-1-tab"
                            className="fade show active"
                            id="tabs-text-1"
                            role="tabpanel"
                          >
                            <p className="description">
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse. Mustache cliche
                              tempor, williamsburg carles vegan helvetica.
                              Reprehenderit butcher retro keffiyeh dreamcatcher
                              synth.
                            </p>
                            <p className="description">
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse.
                            </p>
                          </TabPane>
                          <TabPane
                            aria-labelledby="tabs-text-2-tab"
                            className="fade"
                            id="tabs-text-2"
                            role="tabpanel"
                          >
                            <p className="description">
                              Cosby sweater eu banh mi, qui irure terry
                              richardson ex squid. Aliquip placeat salvia cillum
                              iphone. Seitan aliquip quis cardigan american
                              apparel, butcher voluptate nisi qui.
                            </p>
                          </TabPane>
                          <TabPane
                            aria-labelledby="tabs-text-3-tab"
                            className="fade"
                            id="tabs-text-3"
                            role="tabpanel"
                          >
                            <p className="description">
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse. Mustache cliche
                              tempor, williamsburg carles vegan helvetica.
                              Reprehenderit butcher retro keffiyeh dreamcatcher
                              synth.
                            </p>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row className="row-grid justify-content-between align-items-center mt-lg">
                  <Col lg="5">
                    <h3 className="h4 text-success font-weight-bold mb-4">
                      Progress bars
                    </h3>
                    <div className="progress-wrapper">
                      <div className="progress-info">
                        <div className="progress-label">
                          <span>Task completed</span>
                        </div>
                        <div className="progress-percentage">
                          <span>40%</span>
                        </div>
                      </div>
                      <Progress max="100" value="25" />
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress-info">
                        <div className="progress-label">
                          <span>Task completed</span>
                        </div>
                        <div className="progress-percentage">
                          <span>60%</span>
                        </div>
                      </div>
                      <Progress max="100" value="60" />
                    </div>
                  </Col>
                  <Col lg="5">
                    <h3 className="h4 text-success font-weight-bold mb-5">
                      Pagination
                    </h3>
                    <nav aria-label="Page navigation example" className="mb-4">
                      <Pagination>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="active">
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            4
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            5
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                    <nav aria-label="Page navigation example">
                      <Pagination>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-angle-left" />
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="active">
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            4
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            5
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-angle-right" />
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                  </Col>
                </Row>
                <Row className="row-grid justify-content-between">
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
                  <Col lg="5">
                    <h3 className="h4 text-success font-weight-bold mb-5">
                      Labels
                    </h3>
                    <Badge className="text-uppercase" color="primary" pill>
                      Primary
                    </Badge>
                    <Badge className="text-uppercase" color="success" pill>
                      Success
                    </Badge>
                    <Badge className="text-uppercase" color="danger" pill>
                      Danger
                    </Badge>
                    <Badge className="text-uppercase" color="warning" pill>
                      Warning
                    </Badge>
                    <Badge className="text-uppercase" color="info" pill>
                      Info
                    </Badge>
                  </Col>
                </Row>
                <h3 className="mt-lg mb-4">
                  <span>Alerts</span>
                </h3>
                <UncontrolledAlert color="success" fade={false}>
                  <span className="alert-inner--icon">
                    <i className="ni ni-like-2" />
                  </span>
                  <span className="alert-inner--text">
                    <strong>Success!</strong>
                    This is a success alert—check it out!
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="info" fade={false}>
                  <span className="alert-inner--icon">
                    <i className="ni ni-bell-55" />
                  </span>
                  <span className="alert-inner--text">
                    <strong>Info!</strong>
                    This is an info alert—check it out!
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="warning" fade={false}>
                  <span className="alert-inner--icon">
                    <i className="ni ni-bell-55" />
                  </span>
                  <span className="alert-inner--text">
                    <strong>Warning!</strong>
                    This is a warning alert—check it out!
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="danger" fade={false}>
                  <span className="alert-inner--icon">
                    <i className="ni ni-support-16" />
                  </span>
                  <span className="alert-inner--text">
                    <strong>Danger!</strong>
                    This is an error alert—check it out!
                  </span>
                </UncontrolledAlert>
                {/* Typography */}
                <h2 className="mt-lg mb-5">
                  <span>Typography</span>
                </h2>
                <h3 className="h4 text-success font-weight-bold">Headings</h3>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Heading 1
                    </small>
                  </Col>
                  <Col sm="9">
                    <h1 className="mb-0">Argon Design System</h1>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Heading 2
                    </small>
                  </Col>
                  <Col sm="9">
                    <h2 className="mb-0">Argon Design System</h2>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Heading 3
                    </small>
                  </Col>
                  <Col sm="9">
                    <h3 className="mb-0">Argon Design System</h3>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Heading 4
                    </small>
                  </Col>
                  <Col sm="9">
                    <h4 className="mb-0">Argon Design System</h4>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Heading 5
                    </small>
                  </Col>
                  <Col sm="9">
                    <h5 className="mb-0">Argon Design System</h5>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Heading 6
                    </small>
                  </Col>
                  <Col sm="9">
                    <h6 className="mb-0">Argon Design System</h6>
                  </Col>
                </Row>
                {/* Display titles */}
                <h3 className="h4 text-success font-weight-bold mt-md">
                  Display titles
                </h3>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Display 1
                    </small>
                  </Col>
                  <Col sm="9">
                    <h1 className="display-1 mb-0">Argon Design System</h1>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Display 2
                    </small>
                  </Col>
                  <Col sm="9">
                    <h2 className="display-2 mb-0">Argon Design System</h2>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Display 3
                    </small>
                  </Col>
                  <Col sm="9">
                    <h3 className="display-3 mb-0">Argon Design System</h3>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Display 4
                    </small>
                  </Col>
                  <Col sm="9">
                    <h4 className="display-4 mb-0">Argon Design System</h4>
                  </Col>
                </Row>
                {/* Specialized titles */}
                <h3 className="h4 text-success font-weight-bold mt-md">
                  Specialized titles
                </h3>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Heading
                    </small>
                  </Col>
                  <Col sm="9">
                    <h3 className="heading mb-0">Argon Design System</h3>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Heading title
                    </small>
                  </Col>
                  <Col sm="9">
                    <h3 className="heading-title text-warning mb-0">
                      Argon Design System
                    </h3>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Heading seaction
                    </small>
                  </Col>
                  <Col sm="9">
                    <div>
                      <h2 className="display-3">Header with small subtitle</h2>
                      <p className="lead text-muted">
                        According to the National Oceanic and Atmospheric
                        Administration, Ted, Scambos, NSIDClead scentist, puts
                        the potentially record maximum.
                      </p>
                    </div>
                  </Col>
                </Row>
                {/* Paragraphs */}
                <h3 className="h4 text-success font-weight-bold mt-md">
                  Paragraphs
                </h3>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Paragraph
                    </small>
                  </Col>
                  <Col sm="9">
                    <p>
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at.
                    </p>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Lead text
                    </small>
                  </Col>
                  <Col sm="9">
                    <p className="lead">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at.
                    </p>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Quote
                    </small>
                  </Col>
                  <Col sm="9">
                    <blockquote className="blockquote">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Muted text
                    </small>
                  </Col>
                  <Col sm="9">
                    <p className="text-muted mb-0">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Primary text
                    </small>
                  </Col>
                  <Col sm="9">
                    <p className="text-primary">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Info text
                    </small>
                  </Col>
                  <Col sm="9">
                    <p className="text-info mb-0">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Success text
                    </small>
                  </Col>
                  <Col sm="9">
                    <p className="text-success mb-0">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Warning text
                    </small>
                  </Col>
                  <Col sm="9">
                    <p className="text-warning mb-0">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </Col>
                </Row>
                <Row className="py-3 align-items-center">
                  <Col sm="3">
                    <small className="text-uppercase text-muted font-weight-bold">
                      Danger text
                    </small>
                  </Col>
                  <Col sm="9">
                    <p className="text-danger mb-0">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </Col>
                </Row>
                {/* Images */}
                <h2 className="mt-lg mb-5">
                  <span>Images</span>
                </h2>
                <Row>
                  <Col sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                      Image
                    </small>
                    <img
                      alt="..."
                      className="img-fluid rounded shadow"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "150px" }}
                    />
                  </Col>
                  <Col sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                      Circle Image
                    </small>
                    <img
                      alt="..."
                      className="img-fluid rounded-circle shadow"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                      style={{ width: "150px" }}
                    />
                  </Col>
                  <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                      Raised
                    </small>
                    <img
                      alt="..."
                      className="img-fluid rounded shadow-lg"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "150px" }}
                    />
                  </Col>
                  <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                      Circle Raised
                    </small>
                    <img
                      alt="..."
                      className="img-fluid rounded-circle shadow-lg"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "150px" }}
                    />
                  </Col>
                </Row>
                <h2 className="mt-lg mb-5">
                  <span>Javascript Components</span>
                </h2>
                <h3 className="h4 text-success font-weight-bold mb-4">
                  Modals
                </h3>
                {/* Modals */}
                <Row>
                  <Col md="4">
                    <Button
                      block
                      className="mb-3"
                      color="primary"
                      data-target="#modal-default"
                      data-toggle="modal"
                      type="button"
                    >
                      Default
                    </Button>
                    <Modal>
                      <div className="modal-header">
                        <h6 className="modal-title" id="modal-title-default">
                          Type your modal title
                        </h6>
                        <button
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          type="button"
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.
                        </p>
                        <p>
                          A small river named Duden flows by their place and
                          supplies it with the necessary regelialia. It is a
                          paradisematic country, in which roasted parts of
                          sentences fly into your mouth.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <Button color="primary" type="button">
                          Save changes
                        </Button>
                        <Button
                          className="ml-auto"
                          color="link"
                          data-dismiss="modal"
                          type="button"
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                  </Col>
                  <Col md="4">
                    <Button
                      block
                      className="mb-3"
                      color="warning"
                      data-target="#modal-notification"
                      data-toggle="modal"
                      type="button"
                    >
                      Notification
                    </Button>
                    <Modal contentClassName="bg-gradient-danger">
                      <div className="modal-header">
                        <h6
                          className="modal-title"
                          id="modal-title-notification"
                        >
                          Your attention is required
                        </h6>
                        <button
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          type="button"
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="py-3 text-center">
                          <i className="ni ni-bell-55 ni-3x" />
                          <h4 className="heading mt-4">
                            You should read this!
                          </h4>
                          <p>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia.
                          </p>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <Button
                          className="btn-white"
                          color="default"
                          type="button"
                        >
                          Ok, Got it
                        </Button>
                        <Button
                          className="text-white ml-auto"
                          color="link"
                          data-dismiss="modal"
                          type="button"
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                  </Col>
                  <Col md="4">
                    <Button
                      block
                      color="default"
                      data-target="#modal-form"
                      data-toggle="modal"
                      type="button"
                    >
                      Form
                    </Button>
                    <Modal>
                      <div className="modal-body p-0">
                        <Card className="bg-secondary shadow border-0">
                          <CardHeader className="bg-white pb-5">
                            <div className="text-muted text-center mb-3">
                              <small>Sign in with</small>
                            </div>
                            <div className="btn-wrapper text-center">
                              <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <span className="btn-inner--icon">
                                  <img
                                    alt="..."
                                    src={require("assets/img/icons/common/github.svg")}
                                  />
                                </span>
                                <span className="btn-inner--text">Github</span>
                              </Button>
                              <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <span className="btn-inner--icon">
                                  <img
                                    alt="..."
                                    src={require("assets/img/icons/common/google.svg")}
                                  />
                                </span>
                                <span className="btn-inner--text">Google</span>
                              </Button>
                            </div>
                          </CardHeader>
                          <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                              <small>Or sign in with credentials</small>
                            </div>
                            <Form role="form">
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Email" type="email" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Password"
                                    type="password"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id=" customCheckLogin"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor=" customCheckLogin"
                                >
                                  <span>Remember me</span>
                                </label>
                              </div>
                              <div className="text-center">
                                <Button
                                  className="my-4"
                                  color="primary"
                                  type="button"
                                >
                                  Sign in
                                </Button>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                      </div>
                    </Modal>
                  </Col>
                </Row>
                {/* Datepicker */}
                <h3 className="h4 text-success font-weight-bold mt-md mb-4">
                  Datepicker
                </h3>
                <Row>
                  <Col md="4">
                    <small className="d-block text-uppercase font-weight-bold mb-3">
                      Single date
                    </small>
                    <FormGroup>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <ReactDatetime
                          inputProps={{
                            className: "form-control",
                            placeholder: "Date Picker Here"
                          }}
                          timeFormat={false}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col className="mt-4 mt-md-0" md="8">
                    <small className="d-block text-uppercase font-weight-bold mb-3">
                      Date range
                    </small>
                    <ReactDatetime
                      inputProps={{
                        className: "form-control",
                        placeholder: "Date Picker Here"
                      }}
                      timeFormat={false}
                    >
                      <div className="col">
                        <FormGroup>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              defaultValue="06/18/2018"
                              placeholder="Start date"
                              type="text"
                            />
                          </InputGroup>
                        </FormGroup>
                      </div>
                      <div className="col">
                        <FormGroup>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              defaultValue="06/22/2018"
                              placeholder="End date"
                              type="text"
                            />
                          </InputGroup>
                        </FormGroup>
                      </div>
                    </ReactDatetime>
                  </Col>
                </Row>
                {/* Tooltips and Popovers */}
                <h3 className="h4 text-success font-weight-bold mt-md mb-4">
                  Tooltips &amp; Popovers
                </h3>
                <Row>
                  <Col lg="6">
                    <small className="d-block text-uppercase font-weight-bold mb-3">
                      Tooltips
                    </small>
                    <Button
                      className="btn-tooltip"
                      color="primary"
                      data-animation={true}
                      data-container="body"
                      data-delay="100"
                      data-placement="left"
                      id="tooltip38321129"
                      size="sm"
                      type="button"
                    >
                      On left
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="left"
                      target="tooltip38321129"
                    >
                      Tooltip on left
                    </UncontrolledTooltip>
                    <Button
                      className="btn-tooltip"
                      color="primary"
                      data-animation={true}
                      data-container="body"
                      data-placement="top"
                      id="tooltip556394744"
                      size="sm"
                      type="button"
                    >
                      On top
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="top"
                      target="tooltip556394744"
                    >
                      Tooltip on top
                    </UncontrolledTooltip>
                    <Button
                      className="btn-tooltip"
                      color="primary"
                      data-animation={true}
                      data-container="body"
                      data-placement="bottom"
                      id="tooltip613577679"
                      size="sm"
                      type="button"
                    >
                      On bottom
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target="tooltip613577679"
                    >
                      Tooltip on bottom
                    </UncontrolledTooltip>
                    <Button
                      className="btn-tooltip"
                      color="primary"
                      data-animation={true}
                      data-container="body"
                      data-placement="right"
                      id="tooltip476554683"
                      size="sm"
                      type="button"
                    >
                      On right
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="right"
                      target="tooltip476554683"
                    >
                      Tooltip on right
                    </UncontrolledTooltip>
                  </Col>
                  <Col className="mt-4 mt-lg-0" lg="6">
                    <small className="d-block text-uppercase font-weight-bold mb-3">
                      Popovers
                    </small>
                    <Button
                      color="default"
                      data-container="body"
                      data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      data-placement="left"
                      id="tooltip391311689"
                      size="sm"
                      type="button"
                    >
                      On left
                    </Button>
                    <UncontrolledPopover
                      placement="left"
                      target="tooltip391311689"
                    >
                      <PopoverHeader>Popover On Left</PopoverHeader>
                      <PopoverBody>
                        Vivamus sagittis lacus vel augue laoreet rutrum
                        faucibus.
                      </PopoverBody>
                    </UncontrolledPopover>
                    <Button
                      color="default"
                      data-container="body"
                      data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      data-placement="top"
                      id="tooltip62844899"
                      size="sm"
                      type="button"
                    >
                      On top
                    </Button>
                    <UncontrolledPopover
                      placement="top"
                      target="tooltip62844899"
                    >
                      <PopoverHeader>Popover on Top</PopoverHeader>
                      <PopoverBody>
                        Vivamus sagittis lacus vel augue laoreet rutrum
                        faucibus.
                      </PopoverBody>
                    </UncontrolledPopover>
                    <Button
                      color="default"
                      data-container="body"
                      data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      data-placement="right"
                      id="tooltip969535472"
                      size="sm"
                      type="button"
                    >
                      On right
                    </Button>
                    <UncontrolledPopover
                      placement="right"
                      target="tooltip969535472"
                    >
                      <PopoverHeader>Popover on Right</PopoverHeader>
                      <PopoverBody>
                        Vivamus sagittis lacus vel augue laoreet rutrum
                        faucibus.
                      </PopoverBody>
                    </UncontrolledPopover>
                    <Button
                      color="default"
                      data-container="body"
                      data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      data-placement="bottom"
                      id="tooltip60850592"
                      size="sm"
                      type="button"
                    >
                      On bottom
                    </Button>
                    <UncontrolledPopover
                      placement="bottom"
                      target="tooltip60850592"
                    >
                      <PopoverHeader>Popover on Bottom</PopoverHeader>
                      <PopoverBody>
                        Vivamus sagittis lacus vel augue laoreet rutrum
                        faucibus.
                      </PopoverBody>
                    </UncontrolledPopover>
                  </Col>
                </Row>
              </h3>
            </Container>
          </section>
          <section className="section section-shaped">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-md">
              <Row className="justify-content-between align-items-center">
                <Col className="mb-5 mb-lg-0" lg="5">
                  <h1 className="text-white font-weight-light">
                    Bootstrap carousel
                  </h1>
                  <p className="lead text-white mt-4">
                    Argon Design System comes with four pre-built pages to help
                    you get started faster. You can change the text and images
                    and you're good to go.
                  </p>
                  <Button
                    className="btn-white mt-4"
                    color="default"
                    href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                  >
                    See all components
                  </Button>
                </Col>
                <Col className="mb-lg-auto" lg="6">
                  <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                    <div
                      className="carousel slide"
                      data-ride="carousel"
                      id="carousel_example"
                    >
                      <ol className="carousel-indicators">
                        <li
                          className="active"
                          data-slide-to="0"
                          data-target="#carousel_example"
                        />
                        <li data-slide-to="1" data-target="#carousel_example" />
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            alt="..."
                            className="img-fluid"
                            src={require("assets/img/theme/img-1-1200x1000.jpg")}
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            alt="..."
                            className="img-fluid"
                            src={require("assets/img/theme/img-2-1200x1000.jpg")}
                          />
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        data-slide="prev"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        role="button"
                      >
                        <span
                          aria-hidden={true}
                          className="carousel-control-prev-icon"
                        />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        data-slide="next"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        role="button"
                      >
                        <span
                          aria-hidden={true}
                          className="carousel-control-next-icon"
                        />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg section-nucleo-icons pb-250">
            <Container>
              <Row className="justify-content-center">
                <Col className="text-center" lg="8">
                  <h2 className="display-3">Nucleo Icons</h2>
                  <p className="lead">
                    The official package contains over 21.000 icons which are
                    looking great in combination with Argon Design System. Make
                    sure you check all of them and use those that you like the
                    most.
                  </p>
                  <div className="btn-wrapper">
                    <Button
                      color="primary"
                      href="https://demos.creative-tim.com/argon-design-system/docs/foundation/icons.html"
                    >
                      View demo icons
                    </Button>
                    <Button
                      className="mt-3 mt-md-0"
                      color="default"
                      href="https://nucleoapp.com/?ref=1712"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      View all icons
                    </Button>
                  </div>
                </Col>
              </Row>
              <div className="blur--hover">
                <a href="https://demos.creative-tim.com/argon-design-system/docs/foundation/icons.html">
                  <div
                    className="icons-container blur-item mt-5"
                    data-toggle="on-screen"
                  >
                    {/* Center */}
                    <i className="icon ni ni-diamond" />
                    {/* Right 1 */}
                    <i className="icon icon-sm ni ni-album-2" />
                    <i className="icon icon-sm ni ni-app" />
                    <i className="icon icon-sm ni ni-atom" />
                    {/* Right 2 */}
                    <i className="icon ni ni-bag-17" />
                    <i className="icon ni ni-bell-55" />
                    <i className="icon ni ni-credit-card" />
                    {/* Left 1 */}
                    <i className="icon icon-sm ni ni-briefcase-24" />
                    <i className="icon icon-sm ni ni-building" />
                    <i className="icon icon-sm ni ni-button-play" />
                    {/* Left 2 */}
                    <i className="icon ni ni-calendar-grid-58" />
                    <i className="icon ni ni-camera-compact" />
                    <i className="icon ni ni-chart-bar-32" />
                  </div>
                  <span className="blur-hidden h5 text-success">
                    Eplore all the 21.000+ Nucleo Icons
                  </span>
                </a>
              </div>
            </Container>
          </section>
          <section className="section section-lg section-shaped">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-md">
              <Row className="row-grid justify-content-between align-items-center">
                <Col lg="6">
                  <h3 className="display-3 text-white">
                    A beautiful Design System{" "}
                    <span className="text-white">completed with examples</span>
                  </h3>
                  <p className="lead text-white">
                    The Design System comes with four pre-built pages to help
                    you get started faster. You can change the text and images
                    and you're good to go. More importantly, looking at them
                    will give you a picture of what you can built with this
                    powerful Bootstrap 4 Design System.
                  </p>
                  <div className="btn-wrapper">
                    <Button color="success" href="./examples/login.html">
                      Login Page
                    </Button>
                    <Button
                      className="btn-white"
                      color="default"
                      href="./examples/register.html"
                    >
                      Register Page
                    </Button>
                  </div>
                </Col>
                <Col className="mb-lg-auto" lg="5">
                  <div className="transform-perspective-right">
                    <Card className="bg-secondary shadow border-0">
                      <CardHeader className="bg-white pb-5">
                        <div className="text-muted text-center mb-3">
                          <small>Sign in with</small>
                        </div>
                        <div className="btn-wrapper text-center">
                          <Button
                            className="btn-neutral btn-icon"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <span className="btn-inner--icon">
                              <img
                                alt="..."
                                src={require("assets/img/icons/common/github.svg")}
                              />
                            </span>
                            <span className="btn-inner--text">Github</span>
                          </Button>
                          <Button
                            className="btn-neutral btn-icon"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <span className="btn-inner--icon">
                              <img
                                alt="..."
                                src={require("assets/img/icons/common/google.svg")}
                              />
                            </span>
                            <span className="btn-inner--text">Google</span>
                          </Button>
                        </div>
                      </CardHeader>
                      <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                          <small>Or sign in with credentials</small>
                        </div>
                        <Form role="form">
                          <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Email" type="email" />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Password" type="password" />
                            </InputGroup>
                          </FormGroup>
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customCheckLogin2"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" customCheckLogin2"
                            >
                              <span>Remember me</span>
                            </label>
                          </div>
                          <div className="text-center">
                            <Button
                              className="my-4"
                              color="primary"
                              type="button"
                            >
                              Sign in
                            </Button>
                          </div>
                        </Form>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid justify-content-center">
                <Col className="text-center" lg="8">
                  <h2 className="display-3">
                    Do you love this awesome{" "}
                    <span className="text-success">
                      Design System for Bootstrap 4?
                    </span>
                  </h2>
                  <p className="lead">
                    Cause if you do, it can be yours for FREE. Hit the button
                    below to navigate to Creative Tim where you can find the
                    Design System in HTML. Start a new project or give an old
                    Bootstrap project a new look!
                  </p>
                  <div className="btn-wrapper">
                    <Button
                      className="mb-3 mb-sm-0"
                      color="primary"
                      href="https://www.creative-tim.com/product/argon-design-system"
                    >
                      Download HTML
                    </Button>
                  </div>
                  <div className="text-center">
                    <h4 className="display-4 mb-5 mt-5">
                      Available on these technologies
                    </h4>
                    <Row className="justify-content-center">
                      <Col lg="2" xs="4">
                        <a
                          href="https://www.creative-tim.com/product/argon-design-system"
                          id="tooltip255035741"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid"
                            src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip255035741"
                        >
                          Bootstrap 4 - Most popular front-end component library
                        </UncontrolledTooltip>
                      </Col>
                      <Col lg="2" xs="4">
                        <a
                          href=" https://www.creative-tim.com/product/vue-argon-design-system"
                          id="tooltip265846671"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid"
                            src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip265846671"
                        >
                          Vue.js - The progressive javascript framework
                        </UncontrolledTooltip>
                      </Col>
                      <Col lg="2" xs="4">
                        <a
                          href=" https://www.sketchapp.com/"
                          id="tooltip76119384"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid opacity-3"
                            src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                          />
                        </a>
                        <UncontrolledTooltip delay={0} target="tooltip76119384">
                          [Coming Soon] Sketch - Digital design toolkit
                        </UncontrolledTooltip>
                      </Col>
                      <Col lg="2" xs="4">
                        <a
                          href=" https://www.adobe.com/products/photoshop.html"
                          id="tooltip646643508"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid opacity-3"
                            src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip646643508"
                        >
                          [Coming Soon] Adobe Photoshop - Software for digital
                          images manipulation
                        </UncontrolledTooltip>
                      </Col>
                      <Col lg="2" xs="4">
                        <a
                          href=" https://angularjs.org/"
                          id="tooltip233150499"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid opacity-3"
                            src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip233150499"
                        />
                      </Col>
                      <Col lg="2" xs="4">
                        <a
                          href=" https://angularjs.org/"
                          id="tooltip308866163"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid opacity-3"
                            src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip308866163"
                        >
                          [Coming Soon] React - A JavaScript library for
                          building user interfaces
                        </UncontrolledTooltip>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <DemoFooter />
      </>
    );
  }
}

export default Index;
