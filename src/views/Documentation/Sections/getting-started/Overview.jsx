/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Row, Col } from "reactstrap";

class Overview extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Argon - Design System
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          An user-friendly, open source and beautiful design system based on
          Bootstrap 4 using{" "}
          <a href="https://reactjs.org/?ref=creativetim" target="_blank">
            React
          </a>
          ,{" "}
          <a
            href="https://reactstrap.github.io/?ref=creativetim"
            target="_blank"
          >
            Reactstrap
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/facebook/create-react-app?ref=creativetim"
            target="_blank"
          >
            create-react-app
          </a>
          .
        </p>
        <hr />
        <p>
          We at Creative Tim have always wanted to deliver great tools to all
          the web developers. We want to see better websites and web apps on the
          internet. Argon design
        </p>
        <Row className="mt-5">
          <Col md="4">
            <div className="icon icon-shape bg-gradient-primary rounded-circle text-white mb-3">
              <i className="ni ni-html5" />
            </div>
            <h6>Developer First</h6>
            <p className="description">
              Argon Design System React is a "Developer First" product, with a
              lot of variables for colors, fonts, sizes and other elements.
            </p>
          </Col>
          <Col md="4">
            <div className="icon icon-shape bg-gradient-danger rounded-circle text-white mb-3">
              <i className="ni ni-paper-diploma" />
            </div>
            <h6>High quality before everything</h6>
            <p className="description">
              We are following the latest code standards provided by the guys
              from Bootstrap, so you will love working with this design system.
            </p>
          </Col>
          <Col md="4">
            <div className="icon icon-shape bg-gradient-warning rounded-circle text-white mb-3">
              <i className="ni ni-favourite-28" />
            </div>
            <h6>Community helpers</h6>
            <p className="description">
              Since all our products are built on top of Open Source also Argon
              Design System is released under{" "}
              <a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md">
                MIT License
              </a>
              .
            </p>
          </Col>
        </Row>
        <h3 id="resources-and-credits">Resources and credits</h3>
        <p>
          This Design System is fully coded and built on top of Open Source,
          more details here:
        </p>
        <ul>
          <li>
            <a href="https://www.getbootstrap.com?ref=creativetim">
              Bootstrap 4
            </a>
            - Open source front end framework
          </li>
          <li>
            <a href="https://reactjs.org/?ref=creativetim">React</a>- Easy to
            use React Bootstrap 4 components
          </li>
          <li>
            <a href="https://facebook.github.io/create-react-app/?ref=creativetim">
              create-react-app
            </a>
            - Whether you’re using React or another library, Create React App
            lets you focus on code, not build tools.
          </li>
          <li>
            <a
              href="https://reactstrap.github.io/?ref=creativetim"
              target="_blank"
            >
              Reactstrap
            </a>
            - Easy to use React Bootstrap 4 components
          </li>
          <li>
            <a
              href="https://fonts.google.com/specimen/Open+Sans?ref=creativetim"
              target="_blank"
            >
              Open Sans Font
            </a>
            - Google’s Open Source typefaces
          </li>
          <li>
            <a href="https://github.com/stripe/elements-examples/#example-1?ref=creativetim">
              Stripe Elements
            </a>
            - Forms, Buttons and Elements
          </li>
        </ul>
        <h3 id="learn-more">Learn more</h3>
        <p>
          Stay up to date on the development journey and connect with us on:
        </p>
        <ul>
          <li>
            Follow{" "}
            <a href="https://twitter.com/creativetim?ref=creativetim">
              Creative Tim on Twitter
            </a>
            .
          </li>
          <li>
            Read and subscribe to{" "}
            <a href="http://blog.creative-tim.com?ref=adr-documentation-sidebar">
              The Official Creative Tim Blog
            </a>
            .
          </li>
          <li>
            Follow{" "}
            <a href="https://www.instagram.com/creativetimofficial?ref=creativetim">
              Creative Tim on Instagram
            </a>
            .
          </li>
          <li>
            Follow{" "}
            <a href="https://www.facebook.com/creativetim?ref=creativetim">
              Creative Tim on Facebook
            </a>
            .
          </li>
        </ul>
        <h3 id="quick-start">Quick start</h3>
        <p>
          <Button
            className="my-4"
            color="primary"
            to="/documentation/quick-start"
            tag={Link}
          >
            Quick start here
          </Button>
        </p>
      </>
    );
  }
}

export default Overview;
