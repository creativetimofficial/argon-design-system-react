/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
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
                  Design System in React. Start a new project or give an old
                  Bootstrap project a new look!
                </p>
                <div className="btn-wrapper">
                  <Button
                    className="mb-3 mb-sm-0"
                    color="primary"
                    href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                  >
                    Download React
                  </Button>
                </div>
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">
                    Available on these technologies
                  </h4>
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system?ref=adsr-landing-page"
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/vue-argon-design-system?ref=adsr-landing-page"
                        id="tooltip265846671"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip265846671">
                        Vue.js - The progressive javascript framework
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system-angular?ref=adsr-landing-page"
                        id="tooltip233150499"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip233150499">
                        Angular - One framework. Mobile & Desktop
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        id="tooltip308866163"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip308866163">
                        React - A JavaScript library for building user
                        interfaces
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        id="tooltip76119384"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip76119384">
                        Sketch - Digital design toolkit
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        id="tooltip646643508"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip646643508">
                        Adobe Photoshop - Software for digital images
                        manipulation
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
