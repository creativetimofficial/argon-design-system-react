import React from "react";

// reactstrap components
import {
  Button,
  Card,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
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

class Profile extends React.Component {
  render() {
    return (
      <>
        <html>
<head>
<meta charset="utf-8">
</meta>
<meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
</meta>
<meta content="Start your development with a Design System for Bootstrap 4." name="description">
</meta>
<meta content="Creative Tim" name="author">
</meta>
<title>
Argon Design System - Free Design System for Bootstrap 4
</title>
</head>
<body>
<p>
 {/* Favicon */}
 <link href="../assets/img/brand/favicon.png" rel="icon" type="image/png">
</link>
 {/* Fonts */}
 <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
</link>
 {/* Icons */}
 <link href="../assets/vendor/nucleo/css/nucleo.css" rel="stylesheet">
</link>
<link href="../assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet">
</link>
 {/* Argon CSS */}
 <link href="../assets/css/argon.css?v=1.0.1" rel="stylesheet" type="text/css">
</link>
 {/* Docs CSS */}
 <link href="../assets/css/docs.min.css" rel="stylesheet" type="text/css">
</link>
</p>
<header className=" header-global">
<Navbar className=" navbar-main navbar-transparent navbar-light headroom" expand="lg" id="navbar-main">
<Container>
<NavbarBrand className=" mr-lg-5" href="../index.html">
<img alt="..." src={require("assets/img/brand/white.png")}>
</img>
</NavbarBrand>
<button aria-controls="navbar_global" aria-expanded={false} aria-label="Toggle navigation" className=" navbar-toggler" data-target="#navbar_global" data-toggle="collapse" id="navbar_global" type="button">
<span className=" navbar-toggler-icon">
</span>
</button>
<UncontrolledCollapse id="navbar_global" navbar toggler="#navbar_global">
<div className=" navbar-collapse-header">
<Row>
<Col className=" collapse-brand" xs="6">
<a href="../index.html">
<img alt="..." src={require("assets/img/brand/blue.png")}>
</img>
</a>
</Col>
<Col className=" collapse-close" xs="6">
<button aria-controls="navbar_global" aria-expanded={false} aria-label="Toggle navigation" className=" navbar-toggler" data-target="#navbar_global" data-toggle="collapse" id="navbar_global" type="button">
<span>
</span>
<span>
</span>
</button>
</Col>
</Row>
</div>
<Nav className=" navbar-nav-hover align-items-lg-center" navbar>
<UncontrolledDropdown nav>
<NavLink data-toggle="dropdown" href="#pablo" onClick={e =>
 e.preventDefault()} role="button">
<i className=" ni ni-ui-04 d-lg-none">
</i>
<span className=" nav-link-inner--text">
Components
</span>
</NavLink>
<DropdownMenu className=" dropdown-menu-xl">
<div className=" dropdown-menu-inner">
<Media className=" d-flex align-items-center" href="https://demos.creative-tim.com/argon-design-system/docs/getting-started/overview.html">
<div className=" icon icon-shape bg-gradient-primary rounded-circle text-white">
<i className=" ni ni-spaceship">
</i>
</div>
<Media className=" ml-3">
<h6 className=" heading text-primary mb-md-1">
Getting started
</h6>
<p className=" description d-none d-md-inline-block mb-0">
Learn how to use Argon compiling Scss, change brand colors and more.
</p>
</Media>
</Media>
<Media className=" d-flex align-items-center" href="https://demos.creative-tim.com/argon-design-system/docs/foundation/colors.html">
<div className=" icon icon-shape bg-gradient-success rounded-circle text-white">
<i className=" ni ni-palette">
</i>
</div>
<Media className=" ml-3">
<h6 className=" heading text-primary mb-md-1">
Foundation
</h6>
<p className=" description d-none d-md-inline-block mb-0">
Learn more about colors, typography, icons and the grid system we used for Argon.
</p>
</Media>
</Media>
<Media className=" d-flex align-items-center" href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html">
<div className=" icon icon-shape bg-gradient-warning rounded-circle text-white">
<i className=" ni ni-ui-04">
</i>
</div>
<Media className=" ml-3">
<h5 className=" heading text-warning mb-md-1">
Components
</h5>
<p className=" description d-none d-md-inline-block mb-0">
Browse our 50 beautiful handcrafted components offered in the Free version.
</p>
</Media>
</Media>
</div>
</DropdownMenu>
</UncontrolledDropdown>
<UncontrolledDropdown nav>
<NavLink data-toggle="dropdown" href="#pablo" onClick={e =>
 e.preventDefault()} role="button">
<i className=" ni ni-collection d-lg-none">
</i>
<span className=" nav-link-inner--text">
Examples
</span>
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
<Nav className=" align-items-lg-center ml-lg-auto" navbar>
<NavItem>
<NavLink className=" nav-link-icon" href="https://www.facebook.com/creativetim" id="tooltip527402225" target="_blank">
<i className=" fa fa-facebook-square">
</i>
<span className=" nav-link-inner--text d-lg-none">
Facebook
</span>
</NavLink>
<UncontrolledTooltip delay={0} target="tooltip527402225">
Like us on Facebook
</UncontrolledTooltip>
</NavItem>
<NavItem>
<NavLink className=" nav-link-icon" href="https://www.instagram.com/creativetimofficial" id="tooltip102028523" target="_blank">
<i className=" fa fa-instagram">
</i>
<span className=" nav-link-inner--text d-lg-none">
Instagram
</span>
</NavLink>
<UncontrolledTooltip delay={0} target="tooltip102028523">
Follow us on Instagram
</UncontrolledTooltip>
</NavItem>
<NavItem>
<NavLink className=" nav-link-icon" href="https://twitter.com/creativetim" id="tooltip190489639" target="_blank">
<i className=" fa fa-twitter-square">
</i>
<span className=" nav-link-inner--text d-lg-none">
Twitter
</span>
</NavLink>
<UncontrolledTooltip delay={0} target="tooltip190489639">
Follow us on Twitter
</UncontrolledTooltip>
</NavItem>
<NavItem>
<NavLink className=" nav-link-icon" href="https://github.com/creativetimofficial/argon-design-system" id="tooltip444236033" target="_blank">
<i className=" fa fa-github">
</i>
<span className=" nav-link-inner--text d-lg-none">
Github
</span>
</NavLink>
<UncontrolledTooltip delay={0} target="tooltip444236033">
Star us on Github
</UncontrolledTooltip>
</NavItem>
<NavItem className=" d-none d-lg-block ml-lg-4">
<Button className=" btn-neutral btn-icon" color="default" href="https://www.creative-tim.com/product/argon-design-system" rel="noopener noreferrer" target="_blank">
<span className=" btn-inner--icon">
<i className=" fa fa-cloud-download mr-2">
</i>
</span>
<span className=" nav-link-inner--text">
Download
</span>
</Button>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
</header>
<main className=" profile-page">
<section className=" section-profile-cover section-shaped my-0">
 {/* Circles background */}
 <div className=" shape shape-style-1 shape-primary alpha-4">
<span>
</span>
<span>
</span>
<span>
</span>
<span>
</span>
<span>
</span>
<span>
</span>
<span>
</span>
</div>
 {/* SVG separator */}
 <div className=" separator separator-bottom separator-skew">
<svg xmlns="http://www.w3.org/2000/svg" preserveaspectratio="none" version="1.1" viewbox="0 0 2560 100" x="0" y="0">
<polygon className=" fill-white" points="2560 0 2560 100 0 100">
</polygon>
</svg>
</div>
</section>
<section className=" section">
<Container>
<Card className=" card-profile shadow mt--300">
<div className=" px-4">
<Row className=" justify-content-center">
<Col className=" order-lg-2" lg="3">
<div className=" card-profile-image">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
<img alt="..." className=" rounded-circle" src={require("assets/img/theme/team-4-800x800.jpg")}>
</img>
</a>
</div>
</Col>
<Col className=" order-lg-3 text-lg-right align-self-lg-center" lg="4">
<div className=" card-profile-actions py-4 mt-lg-0">
<Button className=" mr-4" color="info" href="#pablo" onClick={e =>
 e.preventDefault()} size="sm">
Connect
</Button>
<Button className=" float-right" color="default" href="#pablo" onClick={e =>
 e.preventDefault()} size="sm">
Message
</Button>
</div>
</Col>
<Col className=" order-lg-1" lg="4">
<div className=" card-profile-stats d-flex justify-content-center">
<div>
<span className=" heading">
22
</span>
<span className=" description">
Friends
</span>
</div>
<div>
<span className=" heading">
10
</span>
<span className=" description">
Photos
</span>
</div>
<div>
<span className=" heading">
89
</span>
<span className=" description">
Comments
</span>
</div>
</div>
</Col>
</Row>
<div className=" text-center mt-5">
<h3>
Jessica Jones <span className=" font-weight-light">
, 27
</span>
</h3>
<div className=" h6 font-weight-300">
<i className=" ni location_pin mr-2">
</i>
Bucharest, Romania
</div>
<div className=" h6 mt-4">
<i className=" ni business_briefcase-24 mr-2">
</i>
Solution Manager - Creative Tim Officer
</div>
<div>
<i className=" ni education_hat mr-2">
</i>
University of Computer Science
</div>
</div>
<div className=" mt-5 py-5 border-top text-center">
<Row className=" justify-content-center">
<Col lg="9">
<p>
An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.
</p>
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Show more
</a>
</Col>
</Row>
</div>
</div>
</Card>
</Container>
</section>
</main>
<footer className=" footer">
<Container>
<Row className=" row-grid align-items-center mb-5">
<Col lg="6">
<h3 className=" text-primary font-weight-light mb-2">
Thank you for supporting us!
</h3>
<h4 className=" mb-0 font-weight-light">
Let's get in touch on any of these platforms.
</h4>
</Col>
<Col className=" text-lg-center btn-wrapper" lg="6">
<Button className=" btn-neutral btn-icon-only btn-round" color="twitter" href="https://twitter.com/creativetim" id="tooltip334022615" size="lg" target="_blank">
<i className=" fa fa-twitter">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip334022615">
Follow us
</UncontrolledTooltip>
<Button className=" btn-neutral btn-icon-only btn-round" color="facebook" href="https://www.facebook.com/creativetim" id="tooltip993450692" size="lg" target="_blank">
<i className=" fa fa-facebook-square">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip993450692">
Like us
</UncontrolledTooltip>
<Button className=" btn-neutral btn-icon-only btn-round" color="dribbble" href="https://dribbble.com/creativetim" id="tooltip579047645" size="lg" target="_blank">
<i className=" fa fa-dribbble">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip579047645">
Follow us
</UncontrolledTooltip>
<Button className=" btn-neutral btn-icon-only btn-round" color="github" href="https://github.com/creativetimofficial" id="tooltip806533529" size="lg" target="_blank">
<i className=" fa fa-github">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip806533529">
Star on Github
</UncontrolledTooltip>
</Col>
</Row>
<hr>
</hr>
<Row className=" align-items-center justify-content-md-between">
<Col md="6">
<div className=" copyright">
 © 2018 <a href="https://www.creative-tim.com" rel="noopener noreferrer" target="_blank">
Creative Tim
</a>
. 
</div>
</Col>
<Col md="6">
<Nav className=" nav-footer justify-content-end">
<NavItem>
<NavLink href="https://www.creative-tim.com" rel="noopener noreferrer" target="_blank">
Creative Tim
</NavLink>
</NavItem>
<NavItem>
<NavLink href="https://www.creative-tim.com/presentation" rel="noopener noreferrer" target="_blank">
About Us
</NavLink>
</NavItem>
<NavItem>
<NavLink href="http://blog.creative-tim.com" rel="noopener noreferrer" target="_blank">
Blog
</NavLink>
</NavItem>
<NavItem>
<NavLink href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md" rel="noopener noreferrer" target="_blank">
MIT License
</NavLink>
</NavItem>
</Nav>
</Col>
</Row>
</Container>
</footer>
 {/* Core */}
 <script src="../assets/vendor/jquery/jquery.min.js">
</script>
<script src="../assets/vendor/popper/popper.min.js">
</script>
<script src="../assets/vendor/bootstrap/bootstrap.min.js">
</script>
<script src="../assets/vendor/headroom/headroom.min.js">
</script>
 {/* Argon JS */}
 <script src="../assets/js/argon.js?v=1.0.1">
</script>
</body>
</html>

      </>
    );
  }
}

export default Profile;