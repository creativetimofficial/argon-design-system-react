import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Landing extends React.Component {
  render() {
    return (
      <>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              name="viewport"
            />
            <meta
              content="Start your development with a Design System for Bootstrap 4."
              name="description"
            />
            <meta content="Creative Tim" name="author" />
            <title>
              Argon Design System - Free Design System for Bootstrap 4
            </title>
          </head>
          <body>
            <p>
              {/* Favicon */}
              <link
                href="../assets/img/brand/favicon.png"
                rel="icon"
                type="image/png"
              />
              {/* Fonts */}
              <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
                rel="stylesheet"
              />
              {/* Icons */}
              <link
                href="../assets/vendor/nucleo/css/nucleo.css"
                rel="stylesheet"
              />
              <link
                href="../assets/vendor/font-awesome/css/font-awesome.min.css"
                rel="stylesheet"
              />
              {/* Argon CSS */}
              <link
                href="../assets/css/argon.css?v=1.0.1"
                rel="stylesheet"
                type="text/css"
              />
              {/* Docs CSS */}
              <link
                href="../assets/css/docs.min.css"
                rel="stylesheet"
                type="text/css"
              />
            </p>
            <header className="header-global">
              <Navbar
                className="navbar-main navbar-transparent navbar-light headroom"
                expand="lg"
                id="navbar-main"
              >
                <Container>
                  <NavbarBrand className="mr-lg-5" href="../index.html">
                    <img
                      alt="..."
                      src={require("assets/img/brand/white.png")}
                    />
                  </NavbarBrand>
                  <button
                    aria-controls="navbar_global"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar_global"
                    data-toggle="collapse"
                    id="navbar_global"
                    type="button"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <UncontrolledCollapse
                    id="navbar_global"
                    navbar
                    toggler="#navbar_global"
                  >
                    <div className="navbar-collapse-header">
                      <Row>
                        <Col className="collapse-brand" xs="6">
                          <a href="../index.html">
                            <img
                              alt="..."
                              src={require("assets/img/brand/blue.png")}
                            />
                          </a>
                        </Col>
                        <Col className="collapse-close" xs="6">
                          <button
                            aria-controls="navbar_global"
                            aria-expanded={false}
                            aria-label="Toggle navigation"
                            className="navbar-toggler"
                            data-target="#navbar_global"
                            data-toggle="collapse"
                            id="navbar_global"
                            type="button"
                          >
                            <span />
                            <span />
                          </button>
                        </Col>
                      </Row>
                    </div>
                    <Nav
                      className="navbar-nav-hover align-items-lg-center"
                      navbar
                    >
                      <UncontrolledDropdown nav>
                        <NavLink
                          data-toggle="dropdown"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          role="button"
                        >
                          <i className="ni ni-ui-04 d-lg-none" />
                          <span className="nav-link-inner--text">
                            Components
                          </span>
                        </NavLink>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-inner">
                            <Media
                              className="d-flex align-items-center"
                              href="https://demos.creative-tim.com/argon-design-system/docs/getting-started/overview.html"
                            >
                              <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i className="ni ni-spaceship" />
                              </div>
                              <Media className="ml-3">
                                <h6 className="heading text-primary mb-md-1">
                                  Getting started
                                </h6>
                                <p className="description d-none d-md-inline-block mb-0">
                                  Learn how to use Argon compiling Scss, change
                                  brand colors and more.
                                </p>
                              </Media>
                            </Media>
                            <Media
                              className="d-flex align-items-center"
                              href="https://demos.creative-tim.com/argon-design-system/docs/foundation/colors.html"
                            >
                              <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                <i className="ni ni-palette" />
                              </div>
                              <Media className="ml-3">
                                <h6 className="heading text-primary mb-md-1">
                                  Foundation
                                </h6>
                                <p className="description d-none d-md-inline-block mb-0">
                                  Learn more about colors, typography, icons and
                                  the grid system we used for Argon.
                                </p>
                              </Media>
                            </Media>
                            <Media
                              className="d-flex align-items-center"
                              href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                            >
                              <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i className="ni ni-ui-04" />
                              </div>
                              <Media className="ml-3">
                                <h5 className="heading text-warning mb-md-1">
                                  Components
                                </h5>
                                <p className="description d-none d-md-inline-block mb-0">
                                  Browse our 50 beautiful handcrafted components
                                  offered in the Free version.
                                </p>
                              </Media>
                            </Media>
                          </div>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown nav>
                        <NavLink
                          data-toggle="dropdown"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          role="button"
                        >
                          <i className="ni ni-collection d-lg-none" />
                          <span className="nav-link-inner--text">Examples</span>
                        </NavLink>
                        <DropdownMenu>
                          <DropdownItem href="../examples/landing.html">
                            Landing
                          </DropdownItem>
                          <DropdownItem href="../examples/profile.html">
                            Profile
                          </DropdownItem>
                          <DropdownItem href="../examples/login.html">
                            Login
                          </DropdownItem>
                          <DropdownItem href="../examples/register.html">
                            Register
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                    <Nav className="align-items-lg-center ml-lg-auto" navbar>
                      <NavItem>
                        <NavLink
                          className="nav-link-icon"
                          href="https://www.facebook.com/creativetim"
                          id="tooltip820641633"
                          target="_blank"
                        >
                          <i className="fa fa-facebook-square" />
                          <span className="nav-link-inner--text d-lg-none">
                            Facebook
                          </span>
                        </NavLink>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip820641633"
                        >
                          Like us on Facebook
                        </UncontrolledTooltip>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className="nav-link-icon"
                          href="https://www.instagram.com/creativetimofficial"
                          id="tooltip393009327"
                          target="_blank"
                        >
                          <i className="fa fa-instagram" />
                          <span className="nav-link-inner--text d-lg-none">
                            Instagram
                          </span>
                        </NavLink>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip393009327"
                        >
                          Follow us on Instagram
                        </UncontrolledTooltip>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className="nav-link-icon"
                          href="https://twitter.com/creativetim"
                          id="tooltip247020300"
                          target="_blank"
                        >
                          <i className="fa fa-twitter-square" />
                          <span className="nav-link-inner--text d-lg-none">
                            Twitter
                          </span>
                        </NavLink>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip247020300"
                        >
                          Follow us on Twitter
                        </UncontrolledTooltip>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className="nav-link-icon"
                          href="https://github.com/creativetimofficial/argon-design-system"
                          id="tooltip459241931"
                          target="_blank"
                        >
                          <i className="fa fa-github" />
                          <span className="nav-link-inner--text d-lg-none">
                            Github
                          </span>
                        </NavLink>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip459241931"
                        >
                          Star us on Github
                        </UncontrolledTooltip>
                      </NavItem>
                      <NavItem className="d-none d-lg-block ml-lg-4">
                        <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <span className="btn-inner--icon">
                            <i className="fa fa-cloud-download mr-2" />
                          </span>
                          <span className="nav-link-inner--text">Download</span>
                        </Button>
                      </NavItem>
                    </Nav>
                  </UncontrolledCollapse>
                </Container>
              </Navbar>
            </header>
            <main>
              <div className="position-relative">
                {/* shape Hero */}
                <section className="section section-lg section-shaped pb-250">
                  <div className="shape shape-style-1 shape-default">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <Container className="py-lg-md d-flex">
                    <div className="col px-0">
                      <Row>
                        <Col lg="6">
                          <h1 className="display-3 text-white">
                            A beautiful Design System{" "}
                            <span>completed with examples</span>
                          </h1>
                          <p className="lead text-white">
                            The design system comes with four pre-built pages to
                            help you get started faster. You can change the text
                            and images and you're good to go.
                          </p>
                          <div className="btn-wrapper">
                            <Button
                              className="btn-icon mb-3 mb-sm-0"
                              color="info"
                              href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                            >
                              <span className="btn-inner--icon">
                                <i className="fa fa-code" />
                              </span>
                              <span className="btn-inner--text">
                                Components
                              </span>
                            </Button>
                            <Button
                              className="btn-white btn-icon mb-3 mb-sm-0"
                              color="default"
                              href="https://www.creative-tim.com/product/argon-design-system"
                            >
                              <span className="btn-inner--icon">
                                <i className="ni ni-cloud-download-95" />
                              </span>
                              <span className="btn-inner--text">
                                Download HTML
                              </span>
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                  {/* SVG separator */}
                  <div className="separator separator-bottom separator-skew">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      preserveaspectratio="none"
                      version="1.1"
                      viewbox="0 0 2560 100"
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
                {/* 1st Hero Variation */}
              </div>
              <section className="section section-lg pt-lg-0 mt--200">
                <Container>
                  <Row className="justify-content-center">
                    <Col lg="12">
                      <Row className="row-grid">
                        <Col lg="4">
                          <Card className="card-lift--hover shadow border-0">
                            <CardBody className="py-5">
                              <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                <i className="ni ni-check-bold" />
                              </div>
                              <h6 className="text-primary text-uppercase">
                                Download Argon
                              </h6>
                              <p className="description mt-3">
                                Argon is a great free UI package based on
                                Bootstrap 4 that includes the most important
                                components and features.
                              </p>
                              <div>
                                <Badge color="primary" pill>
                                  design
                                </Badge>
                                <Badge color="primary" pill>
                                  system
                                </Badge>
                                <Badge color="primary" pill>
                                  creative
                                </Badge>
                              </div>
                              <Button
                                className="mt-4"
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Learn more
                              </Button>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="4">
                          <Card className="card-lift--hover shadow border-0">
                            <CardBody className="py-5">
                              <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                <i className="ni ni-istanbul" />
                              </div>
                              <h6 className="text-success text-uppercase">
                                Build Something
                              </h6>
                              <p className="description mt-3">
                                Argon is a great free UI package based on
                                Bootstrap 4 that includes the most important
                                components and features.
                              </p>
                              <div>
                                <Badge color="success" pill>
                                  business
                                </Badge>
                                <Badge color="success" pill>
                                  vision
                                </Badge>
                                <Badge color="success" pill>
                                  success
                                </Badge>
                              </div>
                              <Button
                                className="mt-4"
                                color="success"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Learn more
                              </Button>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="4">
                          <Card className="card-lift--hover shadow border-0">
                            <CardBody className="py-5">
                              <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                <i className="ni ni-planet" />
                              </div>
                              <h6 className="text-warning text-uppercase">
                                Prepare Launch
                              </h6>
                              <p className="description mt-3">
                                Argon is a great free UI package based on
                                Bootstrap 4 that includes the most important
                                components and features.
                              </p>
                              <div>
                                <Badge color="warning" pill>
                                  marketing
                                </Badge>
                                <Badge color="warning" pill>
                                  product
                                </Badge>
                                <Badge color="warning" pill>
                                  launch
                                </Badge>
                              </div>
                              <Button
                                className="mt-4"
                                color="warning"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Learn more
                              </Button>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </section>
              <section className="section section-lg">
                <Container>
                  <Row className="row-grid align-items-center">
                    <Col className="order-md-2" md="6">
                      <img
                        alt="..."
                        className="img-fluid floating"
                        src={require("assets/img/theme/promo-1.png")}
                      />
                    </Col>
                    <Col className="order-md-1" md="6">
                      <div className="pr-md-5">
                        <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                          <i className="ni ni-settings-gear-65" />
                        </div>
                        <h3>Awesome features</h3>
                        <p>
                          The kit comes with three pre-built pages to help you
                          get started faster. You can change the text and images
                          and you're good to go.
                        </p>
                        <ul className="list-unstyled mt-5">
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <Badge
                                  className="badge-circle mr-3"
                                  color="success"
                                >
                                  <i className="ni ni-settings-gear-65" />
                                </Badge>
                              </div>
                              <div>
                                <h6 className="mb-0">
                                  Carefully crafted components
                                </h6>
                              </div>
                            </div>
                          </li>
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <Badge
                                  className="badge-circle mr-3"
                                  color="success"
                                >
                                  <i className="ni ni-html5" />
                                </Badge>
                              </div>
                              <div>
                                <h6 className="mb-0">Amazing page examples</h6>
                              </div>
                            </div>
                          </li>
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <Badge
                                  className="badge-circle mr-3"
                                  color="success"
                                >
                                  <i className="ni ni-satisfied" />
                                </Badge>
                              </div>
                              <div>
                                <h6 className="mb-0">
                                  Super friendly support team
                                </h6>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
              <section className="section bg-secondary">
                <Container>
                  <Row className="row-grid align-items-center">
                    <Col md="6">
                      <Card className="bg-default shadow border-0">
                        <CardImg
                          alt="..."
                          src={require("assets/img/theme/img-1-1200x1000.jpg")}
                          top
                        />
                        <blockquote className="card-blockquote">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-bg"
                            preserveaspectratio="none"
                            viewbox="0 0 583 95"
                          >
                            <polygon
                              className="fill-default"
                              points="0,52 583,95 0,95"
                            />
                            <polygon
                              className="fill-default"
                              opacity=".2"
                              points="0,42 583,95 683,0 0,95"
                            />
                          </svg>
                          <h4 className="display-3 font-weight-bold text-white">
                            Design System
                          </h4>
                          <p className="lead text-italic text-white">
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever happens.
                          </p>
                        </blockquote>
                      </Card>
                    </Col>
                    <Col md="6">
                      <div className="pl-md-5">
                        <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                          <i className="ni ni-settings" />
                        </div>
                        <h3>Our customers</h3>
                        <p className="lead">
                          Don't let your uses guess by attaching tooltips and
                          popoves to any element. Just make sure you enable them
                          first via JavaScript.
                        </p>
                        <p>
                          The kit comes with three pre-built pages to help you
                          get started faster. You can change the text and images
                          and you're good to go.
                        </p>
                        <p>
                          The kit comes with three pre-built pages to help you
                          get started faster. You can change the text and images
                          and you're good to go.
                        </p>
                        <a
                          className="font-weight-bold text-warning mt-5"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          A beautiful UI Kit for impactful websites
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
              <section className="section pb-0 bg-gradient-warning">
                <Container>
                  <Row className="row-grid align-items-center">
                    <Col className="order-lg-2 ml-lg-auto" md="6">
                      <div className="position-relative pl-md-5">
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/img/ill/ill-2.svg")}
                        />
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="6">
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                            <i className="ni ni-building text-primary" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h4 className="display-3 text-white">
                            Modern Interface
                          </h4>
                          <p className="text-white">
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                        </div>
                      </div>
                      <Card className="shadow shadow-lg--hover mt-5">
                        <CardBody>
                          <div className="d-flex px-3">
                            <div>
                              <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                <i className="ni ni-satisfied" />
                              </div>
                            </div>
                            <div className="pl-4">
                              <h5 className="title text-success">
                                Awesome Support
                              </h5>
                              <p>
                                The Arctic Ocean freezes every winter and much
                                of the sea-ice then thaws every summer, and that
                                process will continue whatever.
                              </p>
                              <a
                                className="text-success"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Learn more
                              </a>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                      <Card className="shadow shadow-lg--hover mt-5">
                        <CardBody>
                          <div className="d-flex px-3">
                            <div>
                              <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i className="ni ni-active-40" />
                              </div>
                            </div>
                            <div className="pl-4">
                              <h5 className="title text-warning">
                                Modular Components
                              </h5>
                              <p>
                                The Arctic Ocean freezes every winter and much
                                of the sea-ice then thaws every summer, and that
                                process will continue whatever.
                              </p>
                              <a
                                className="text-warning"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Learn more
                              </a>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew zindex-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveaspectratio="none"
                    version="1.1"
                    viewbox="0 0 2560 100"
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
                  <Row className="justify-content-center text-center mb-lg">
                    <Col lg="8">
                      <h2 className="display-3">The amazing Team</h2>
                      <p className="lead text-muted">
                        According to the National Oceanic and Atmospheric
                        Administration, Ted, Scambos, NSIDClead scentist, puts
                        the potentially record maximum.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mb-5 mb-lg-0" lg="3" md="6">
                      <div className="px-4">
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/team-1-800x800.jpg")}
                          style={{ width: "200px" }}
                        />
                        <div className="pt-4 text-center">
                          <h5 className="title">
                            <span className="d-block mb-1">Ryan Tompson</span>
                            <small className="h6 text-muted">
                              Web Developer
                            </small>
                          </h5>
                          <div className="mt-3">
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="warning"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-twitter" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="warning"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-facebook" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="warning"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-dribbble" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col className="mb-5 mb-lg-0" lg="3" md="6">
                      <div className="px-4">
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/team-2-800x800.jpg")}
                          style={{ width: "200px" }}
                        />
                        <div className="pt-4 text-center">
                          <h5 className="title">
                            <span className="d-block mb-1">Romina Hadid</span>
                            <small className="h6 text-muted">
                              Marketing Strategist
                            </small>
                          </h5>
                          <div className="mt-3">
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-twitter" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-facebook" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-dribbble" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col className="mb-5 mb-lg-0" lg="3" md="6">
                      <div className="px-4">
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/team-3-800x800.jpg")}
                          style={{ width: "200px" }}
                        />
                        <div className="pt-4 text-center">
                          <h5 className="title">
                            <span className="d-block mb-1">
                              Alexander Smith
                            </span>
                            <small className="h6 text-muted">
                              UI/UX Designer
                            </small>
                          </h5>
                          <div className="mt-3">
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-twitter" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-facebook" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-dribbble" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col className="mb-5 mb-lg-0" lg="3" md="6">
                      <div className="px-4">
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/team-4-800x800.jpg")}
                          style={{ width: "200px" }}
                        />
                        <div className="pt-4 text-center">
                          <h5 className="title">
                            <span className="d-block mb-1">John Doe</span>
                            <small className="h6 text-muted">
                              Founder and CEO
                            </small>
                          </h5>
                          <div className="mt-3">
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="success"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-twitter" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="success"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-facebook" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="success"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-dribbble" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
              <section className="section section-lg pt-0">
                <Container>
                  <Card className="bg-gradient-warning shadow-lg border-0">
                    <div className="p-5">
                      <Row className="align-items-center">
                        <Col lg="8">
                          <h3 className="text-white">
                            We made website building easier for you.
                          </h3>
                          <p className="lead text-white mt-3">
                            I will be the leader of a company that ends up being
                            worth billions of dollars, because I got the
                            answers. I understand culture.
                          </p>
                        </Col>
                        <Col className="ml-lg-auto" lg="3">
                          <Button
                            block
                            className="btn-white"
                            color="default"
                            href="https://www.creative-tim.com/product/argon-design-system"
                            size="lg"
                          >
                            Download HTML
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Container>
              </section>
              <section className="section section-lg bg-gradient-default">
                <Container className="pt-lg pb-300">
                  <Row className="text-center justify-content-center">
                    <Col lg="10">
                      <h2 className="display-3 text-white">Build something</h2>
                      <p className="lead text-white">
                        According to the National Oceanic and Atmospheric
                        Administration, Ted, Scambos, NSIDClead scentist, puts
                        the potentially record low maximum sea ice extent tihs
                        year down to low ice.
                      </p>
                    </Col>
                  </Row>
                  <Row className="row-grid mt-5">
                    <Col lg="4">
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-settings text-primary" />
                      </div>
                      <h5 className="text-white mt-3">Building tools</h5>
                      <p className="text-white mt-3">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </Col>
                    <Col lg="4">
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-ruler-pencil text-primary" />
                      </div>
                      <h5 className="text-white mt-3">Grow your market</h5>
                      <p className="text-white mt-3">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </Col>
                    <Col lg="4">
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-atom text-primary" />
                      </div>
                      <h5 className="text-white mt-3">Launch time</h5>
                      <p className="text-white mt-3">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </Col>
                  </Row>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew zindex-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveaspectratio="none"
                    version="1.1"
                    viewbox="0 0 2560 100"
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
              <section className="section section-lg pt-lg-0 section-contact-us">
                <Container>
                  <Row className="justify-content-center mt--300">
                    <Col lg="8">
                      <Card className="bg-gradient-secondary shadow">
                        <CardBody className="p-lg-5">
                          <h4 className="mb-1">Want to work with us?</h4>
                          <p className="mt-0">
                            Your project is very important to us.
                          </p>
                          <FormGroup className="mt-5">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-user-run" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Your name" type="text" />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Email address" type="email" />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="mb-4">
                            <Input
                              className="form-control-alternative"
                              cols="80"
                              name="name"
                              placeholder="Type a message..."
                              rows="4"
                            />
                          </FormGroup>
                          <div>
                            <Button
                              block
                              className="btn-round"
                              color="default"
                              size="lg"
                              type="button"
                            >
                              Send Message
                            </Button>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Container>
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
                        Cause if you do, it can be yours for FREE. Hit the
                        button below to navigate to Creative Tim where you can
                        find the Design System in HTML. Start a new project or
                        give an old Bootstrap project a new look!
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
                              id="tooltip719082543"
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
                              target="tooltip719082543"
                            >
                              Bootstrap 4 - Most popular front-end component
                              library
                            </UncontrolledTooltip>
                          </Col>
                          <Col lg="2" xs="4">
                            <a
                              href=" https://www.creative-tim.com/product/vue-argon-design-system"
                              id="tooltip486885320"
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
                              target="tooltip486885320"
                            >
                              Vue.js - The progressive javascript framework
                            </UncontrolledTooltip>
                          </Col>
                          <Col lg="2" xs="4">
                            <a
                              href=" https://www.sketchapp.com/"
                              id="tooltip983124587"
                              target="_blank"
                            >
                              <img
                                alt="..."
                                className="img-fluid opacity-3"
                                src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip983124587"
                            >
                              [Coming Soon] Sketch - Digital design toolkit
                            </UncontrolledTooltip>
                          </Col>
                          <Col lg="2" xs="4">
                            <a
                              href=" https://www.adobe.com/products/photoshop.html"
                              id="tooltip639096506"
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
                              target="tooltip639096506"
                            >
                              [Coming Soon] Adobe Photoshop - Software for
                              digital images manipulation
                            </UncontrolledTooltip>
                          </Col>
                          <Col lg="2" xs="4">
                            <a
                              href=" https://angularjs.org/"
                              id="tooltip667720522"
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
                              target="tooltip667720522"
                            />
                          </Col>
                          <Col lg="2" xs="4">
                            <a
                              href=" https://angularjs.org/"
                              id="tooltip727451202"
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
                              target="tooltip727451202"
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
            <footer className="footer has-cards">
              <Container className="container-lg">
                <Row>
                  <Col className="mb-5 mb-md-0" md="6">
                    <Card className="card-lift--hover shadow border-0">
                      <a href="../examples/landing.html" title="Landing Page">
                        <CardImg
                          alt="..."
                          src={require("assets/img/theme/landing.jpg")}
                        />
                      </a>
                    </Card>
                  </Col>
                  <Col className="mb-5 mb-lg-0" md="6">
                    <Card className="card-lift--hover shadow border-0">
                      <a href="../examples/profile.html" title="Profile Page">
                        <CardImg
                          alt="..."
                          src={require("assets/img/theme/profile.jpg")}
                        />
                      </a>
                    </Card>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row className="row-grid align-items-center my-md">
                  <Col lg="6">
                    <h3 className="text-primary font-weight-light mb-2">
                      Thank you for supporting us!
                    </h3>
                    <h4 className="mb-0 font-weight-light">
                      Let's get in touch on any of these platforms.
                    </h4>
                  </Col>
                  <Col className="text-lg-center btn-wrapper" lg="6">
                    <Button
                      className="btn-neutral btn-icon-only btn-round"
                      color="twitter"
                      href="https://twitter.com/creativetim"
                      id="tooltip246546952"
                      size="lg"
                      target="_blank"
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip246546952">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-neutral btn-icon-only btn-round"
                      color="facebook"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip906993180"
                      size="lg"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip906993180">
                      Like us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-neutral btn-icon-only btn-round"
                      color="dribbble"
                      href="https://dribbble.com/creativetim"
                      id="tooltip96270198"
                      size="lg"
                      target="_blank"
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip96270198">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-neutral btn-icon-only btn-round"
                      color="github"
                      href="https://github.com/creativetimofficial"
                      id="tooltip133057577"
                      size="lg"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip133057577">
                      Star on Github
                    </UncontrolledTooltip>
                  </Col>
                </Row>
                <hr />
                <Row className="align-items-center justify-content-md-between">
                  <Col md="6">
                    <div className="copyright">
                      © 2018{" "}
                      <a
                        href="https://www.creative-tim.com"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                      .
                    </div>
                  </Col>
                  <Col md="6">
                    <Nav className="nav-footer justify-content-end">
                      <NavItem>
                        <NavLink
                          href="https://www.creative-tim.com"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Creative Tim
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="https://www.creative-tim.com/presentation"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          About Us
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="http://blog.creative-tim.com"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Blog
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          MIT License
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                </Row>
              </Container>
            </footer>
            {/* Core */}
            <script src="../assets/vendor/jquery/jquery.min.js" />
            <script src="../assets/vendor/popper/popper.min.js" />
            <script src="../assets/vendor/bootstrap/bootstrap.min.js" />
            <script src="../assets/vendor/headroom/headroom.min.js" />
            {/* Argon JS */}
            <script src="../assets/js/argon.js?v=1.0.1" />
          </body>
        </html>
      </>
    );
  }
}

export default Landing;
