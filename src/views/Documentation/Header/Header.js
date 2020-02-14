/*!

=========================================================
* Argon Design System React - v1.1.0
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
import { Link } from "react-router-dom";
import { Button, NavbarBrand, Navbar, NavItem, NavLink, Nav } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar
        className="navbar-horizontal navbar-expand navbar-dark flex-row align-items-md-center ct-navbar"
        color="info"
        tag="header"
      >
        <NavbarBrand
          aria-label="Bootstrap"
          className="mr-0 mr-md-2"
          to="/documentation/overview"
          tag={Link}
        >
          <img alt="..." src={require("assets/img/brand/white.png")} />
          <sup>Docs</sup>
        </NavbarBrand>
        <Nav className="flex-row mr-auto ml-4 d-none d-md-flex" navbar>
          <NavItem>
            <NavLink to="/" tag={Link}>
              Live Preview
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://github.com/creativetimofficial/argon-design-system-react/issues"
              target="_blank"
            >
              Support
            </NavLink>
          </NavItem>
        </Nav>
        <div className="d-none d-sm-block ml-auto">
          <Nav className="ct-navbar-nav flex-row align-items-center" navbar>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                href="https://www.facebook.com/creativetim?ref=adsr-documentation-header"
                target="_blank"
              >
                <i className="fa fa-facebook-square" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                href="https://twitter.com/creativetim?ref=adsr-documentation-header"
                target="_blank"
              >
                <i className="fa fa-twitter" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                href="https://www.instagram.com/creativetimofficial?ref=adsr-documentation-header"
                target="_blank"
              >
                <i className="fa fa-instagram" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                href="https://www.instagram.com/creativetimofficial?ref=adsr-documentation-header"
                target="_blank"
              >
                <i className="fa fa-dribbble" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                href="https://github.com/creativetimofficial?ref=adsr-documentation-header"
                target="_blank"
              >
                <i className="fa fa-github" />
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Button
          className="btn-icon ml-sm-3 d-none d-md-block"
          color="neutral"
          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-documentation-header"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-cloud-download mr-2" />
          </span>
          <span className="nav-link-inner--text ml-1">Download</span>
        </Button>
        <button
          aria-controls="ct-docs-nav"
          aria-expanded={false}
          aria-label="Toggle docs navigation"
          className="navbar-toggler ct-search-docs-toggle d-block d-md-none ml-auto ml-sm-0"
          data-target="#ct-docs-nav"
          data-toggle="collapse"
          id="ct-docs-nav"
          type="button"
          onClick={() => {
            document
              .getElementsByClassName("ct-links")[0]
              .classList.toggle("show");
          }}
        >
          <span className="navbar-toggler-icon" />
        </button>
      </Navbar>
    );
  }
}

export default Header;
