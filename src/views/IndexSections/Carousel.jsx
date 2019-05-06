import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Carousel extends React.Component {
  render() {
    return (
      <>
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
                  you get started faster. You can change the text and images and
                  you're good to go.
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
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
