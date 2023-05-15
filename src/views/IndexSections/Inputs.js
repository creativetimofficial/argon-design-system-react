/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

class Inputs extends React.Component {
  state = {};
  render() {
    return (
      <>
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
                <FormGroup
                  className={classnames({
                    focused: this.state.searchFocused,
                  })}
                >
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-zoom-split-in" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Search"
                      type="text"
                      onFocus={(e) => this.setState({ searchFocused: true })}
                      onBlur={(e) => this.setState({ searchFocused: false })}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col lg="4" sm="6">
                <FormGroup>
                  <Input disabled placeholder="Regular" type="text" />
                </FormGroup>
                <FormGroup
                  className={classnames({
                    focused: this.state.birthdayFocused,
                  })}
                >
                  <InputGroup className="mb-4">
                    <Input
                      placeholder="Birthday"
                      type="text"
                      onFocus={(e) => this.setState({ birthdayFocused: true })}
                      onBlur={(e) => this.setState({ birthdayFocused: false })}
                    />
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
                  <FormGroup
                    className={classnames({
                      focused: this.state.searchAltFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-zoom-split-in" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Search"
                        type="text"
                        onFocus={(e) =>
                          this.setState({ searchAltFocused: true })
                        }
                        onBlur={(e) =>
                          this.setState({ searchAltFocused: false })
                        }
                      />
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
                  <FormGroup
                    className={classnames({
                      focused: this.state.birthdayAltFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative mb-4">
                      <Input
                        placeholder="Birthday"
                        type="text"
                        onFocus={(e) =>
                          this.setState({ birthdayAltFocused: true })
                        }
                        onBlur={(e) =>
                          this.setState({ birthdayAltFocused: false })
                        }
                      />
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
      </>
    );
  }
}

export default Inputs;
