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
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class BasicElements extends React.Component {
  render() {
    return (
      <>
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
                    className="btn-icon btn-3 ml-1"
                    color="primary"
                    type="button"
                  >
                    <span className="btn-inner--icon mr-1">
                      <i className="ni ni-bag-17" />
                    </span>
                    <span className="btn-inner--text">With icon</span>
                  </Button>
                  <Button
                    className="btn-icon btn-2 ml-1"
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
                  <Button className="btn-1 ml-1" color="primary" type="button">
                    Regular
                  </Button>
                  <Button
                    color="primary"
                    size="lg"
                    type="button"
                    className="ml-1"
                  >
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
                <Button className="btn-1 ml-1" color="info" type="button">
                  Info
                </Button>
                <Button className="btn-1 ml-1" color="success" type="button">
                  Success
                </Button>
                <Button className="btn-1 ml-1" color="warning" type="button">
                  Warning
                </Button>
                <Button className="btn-1 ml-1" color="danger" type="button">
                  Danger
                </Button>
                <Button
                  className="btn-1 btn-neutral ml-1"
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
                <Button className="btn-1" color="primary" outline type="button">
                  Outline-primary
                </Button>
                <Button
                  className="btn-1 ml-1"
                  color="info"
                  outline
                  type="button"
                >
                  Outline-info
                </Button>
                <Button
                  className="btn-1 ml-1"
                  color="success"
                  outline
                  type="button"
                >
                  Outline-success
                </Button>
                <Button
                  className="btn-1 ml-1"
                  color="warning"
                  outline
                  type="button"
                >
                  Outline-warning
                </Button>
                <Button
                  className="btn-1 ml-1"
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
                  onClick={(e) => e.preventDefault()}
                >
                  Default
                </Button>
                <Button
                  className="text-primary ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Primary
                </Button>
                <Button
                  className="text-info ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Info
                </Button>
                <Button
                  className="text-success ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Success
                </Button>
                <Button
                  className="text-warning ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Warning
                </Button>
                <Button
                  className="text-danger ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Danger
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default BasicElements;
