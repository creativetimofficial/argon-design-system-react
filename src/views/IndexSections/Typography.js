/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>
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
                Administration, Ted, Scambos, NSIDClead scentist, puts the
                potentially record maximum.
              </p>
            </div>
          </Col>
        </Row>
        <h3 className="h4 text-success font-weight-bold mt-md">Paragraphs</h3>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <small className="text-uppercase text-muted font-weight-bold">
              Paragraph
            </small>
          </Col>
          <Col sm="9">
            <p>
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
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
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
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
      </>
    );
  }
}

export default Typography;
