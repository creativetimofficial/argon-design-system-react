/*!

=========================================================
* Argon Design System React - v1.0.0
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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// plugin that creates slider
import Slider from "nouislider";
// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

const codeFormControls = `import React from "react";


// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Row>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input disabled placeholder="Regular" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
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
            <Col md="6">
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
          </Row>
          <Row>
            <Col md="6">
              <FormGroup className="has-success">
                <Input
                  className="is-valid"
                  placeholder="Success"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup className="has-danger">
                <Input
                  className="is-invalid"
                  placeholder="Error Input"
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

export default Forms;`;

const codeAlternative1 = `import React from "react";


// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Row>
            <Col md="6">
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  disabled
                  placeholder="Regular"
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-4">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="form-control-alternative"
                    placeholder="Search"
                    type="text"
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md="6">
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
          </Row>
          <Row>
            <Col md="6">
              <FormGroup className="has-success">
                <Input
                  className="form-control-alternative is-valid"
                  placeholder="Success"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup className="has-danger">
                <Input
                  className="form-control-alternative is-invalid"
                  placeholder="Error Input"
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

export default Forms;
`;

const codeTextarea = `import React from "react";


// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Input
            id="exampleFormControlTextarea1"
            placeholder="Write a large text here ..."
            rows="3"
            type="textarea"
          />
        </Form>
      </>
    );
  }
}

export default Forms;
`;

const codeAlternative2 = `import React from "react";


// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Input
            className="form-control-alternative"
            placeholder="Write a large text here ..."
            rows="3"
            type="textarea"
          />
        </Form>
      </>
    );
  }
}

export default Forms;
`;

const codeCheckboxes = `import React from "react";


// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
        <div className="custom-control custom-checkbox mb-3">
          <input
            className="custom-control-input"
            id="customCheck1"
            type="checkbox"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Unchecked
          </label>
        </div>
        <div className="custom-control custom-checkbox mb-3">
          <input
            className="custom-control-input"
            defaultChecked
            id="customCheck2"
            type="checkbox"
          />
          <label className="custom-control-label" htmlFor="customCheck2">
            Checked
          </label>
        </div>
        <div className="custom-control custom-checkbox mb-3">
          <input
            className="custom-control-input"
            disabled
            id="customCheck3"
            type="checkbox"
          />
          <label className="custom-control-label" htmlFor="customCheck3">
            Disabled Unchecked
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
          <label className="custom-control-label" htmlFor="customCheck4">
            Disabled Checked
          </label>
        </div>
      </>
    );
  }
}

export default Forms;
`;

const codeRadioButtons = `import React from "react";


// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
        <div className="custom-control custom-radio mb-3">
          <input
            className="custom-control-input"
            id="customRadio5"
            name="custom-radio-2"
            type="radio"
          />
          <label className="custom-control-label" htmlFor="customRadio5">
            Unchecked
          </label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input
            className="custom-control-input"
            defaultChecked
            id="customRadio6"
            name="custom-radio-2"
            type="radio"
          />
          <label className="custom-control-label" htmlFor="customRadio6">
            Checked
          </label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input
            className="custom-control-input"
            disabled
            id="customRadio7"
            name="custom-radio-2"
            type="radio"
          />
          <label className="custom-control-label" htmlFor="customRadio7">
            Disabled unchecked
          </label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input
            className="custom-control-input"
            defaultChecked
            disabled
            id="customRadio8"
            name="custom-radio-2"
            type="radio"
          />
          <label className="custom-control-label" htmlFor="customRadio8">
            Disabled checkbox
          </label>
        </div>
      </>
    );
  }
}

export default Forms;
`;

const codeToggleButtons = `import React from "react";


// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
        <label className="custom-toggle">
          <input type="checkbox" />
          <span className="custom-toggle-slider rounded-circle" />
        </label>
        <span className="clearfix" />
        <label className="custom-toggle">
          <input defaultChecked type="checkbox" />
          <span className="custom-toggle-slider rounded-circle" />
        </label>
      </>
    );
  }
}

export default Forms;
`;

const codeSliders = `import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

class Forms extends React.Component {
  state = {
    simpleValue: 100.0,
    rangeLow: 200.0,
    rangeHigh: 400.0
  };
  componentDidMount() {
    // slider1 init
    var slider1 = this.refs.slider1;
    Slider.create(slider1, {
      start: [0.0],
      connect: [true, false],
      step: 0.01,
      range: { min: 100.0, max: 500.0 }
    }).on(
      "update",
      function(values, handle) {
        this.setState({ simpleValue: values[0] });
      }.bind(this)
    );

    // slider2 init
    var slider2 = this.refs.slider2;
    Slider.create(slider2, {
      start: [200.0, 400.0],
      connect: [false, true, false],
      step: 0.01,
      range: { min: 100.0, max: 500.0 }
    }).on(
      "update",
      function(values, handle) {
        this.setState({ rangeLow: values[0], rangeHigh: values[1] });
      }.bind(this)
    );
  }
  render() {
    return (
      <>
        <Row>
          <Col className="mt-4 mt-md-0">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">Sliders</small>
            </div>
            {/* Simple slider */}
            <div className="input-slider-container">
              <div className="slider" ref="slider1" />
              <Row className="mt-3 d-none">
                <Col xs="6">
                  <span className="range-slider-value">
                    {this.state.simpleValue}
                  </span>
                </Col>
              </Row>
            </div>
            {/* Range slider */}
            <div className="mt-5">
              {/* Range slider container */}
              <div className="slider" ref="slider2" />
              <Row className="d-none">
                <Col xs="6">
                  <span className="range-slider-value value-low">
                    {this.state.rangeLow}
                  </span>
                </Col>
                <Col className="text-right" xs="6">
                  <span className="range-slider-value value-high">
                    {this.state.rangeHigh}
                  </span>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Forms;
`;

class Forms extends React.Component {
  state = {
    simpleValue: 100.0,
    rangeLow: 200.0,
    rangeHigh: 400.0
  };
  componentDidMount() {
    // slider1 init
    var slider1 = this.refs.slider1;
    Slider.create(slider1, {
      start: [0.0],
      connect: [true, false],
      step: 0.01,
      range: { min: 100.0, max: 500.0 }
    }).on(
      "update",
      function(values, handle) {
        this.setState({ simpleValue: values[0] });
      }.bind(this)
    );

    // slider2 init
    var slider2 = this.refs.slider2;
    Slider.create(slider2, {
      start: [200.0, 400.0],
      connect: [false, true, false],
      step: 0.01,
      range: { min: 100.0, max: 500.0 }
    }).on(
      "update",
      function(values, handle) {
        this.setState({ rangeLow: values[0], rangeHigh: values[1] });
      }.bind(this)
    );
  }
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Forms
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Examples and usage guidelines for form control styles, layout options,
          and custom components for creating a wide variety of forms.
        </p>
        <hr />
        <h2 id="form-controls">Form controls</h2>
        <div className="ct-example">
          <Form>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Input
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    type="email"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Input disabled placeholder="Regular" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
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
              <Col md="6">
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
            </Row>
            <Row>
              <Col md="6">
                <FormGroup className="has-success">
                  <Input
                    className="is-valid"
                    placeholder="Success"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup className="has-danger">
                  <Input
                    className="is-invalid"
                    placeholder="Error Input"
                    type="email"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeFormControls}
        </SyntaxHighlighter>
        <h3 id="alternative">Alternative</h3>
        <div className="ct-example">
          <Form>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    type="email"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    disabled
                    placeholder="Regular"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-zoom-split-in" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className="form-control-alternative"
                      placeholder="Search"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col md="6">
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
            </Row>
            <Row>
              <Col md="6">
                <FormGroup className="has-success">
                  <Input
                    className="form-control-alternative is-valid"
                    placeholder="Success"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup className="has-danger">
                  <Input
                    className="form-control-alternative is-invalid"
                    placeholder="Error Input"
                    type="email"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAlternative1}
        </SyntaxHighlighter>
        <h2 id="textarea">Textarea</h2>
        <div className="ct-example">
          <Form>
            <Input
              id="exampleFormControlTextarea1"
              placeholder="Write a large text here ..."
              rows="3"
              type="textarea"
            />
          </Form>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeTextarea}
        </SyntaxHighlighter>
        <h3 id="alternative-1">Alternative</h3>
        <div className="ct-example">
          <Form>
            <Input
              className="form-control-alternative"
              placeholder="Write a large text here ..."
              rows="3"
              type="textarea"
            />
          </Form>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAlternative2}
        </SyntaxHighlighter>
        <h2 id="checkboxes">Checkboxes</h2>
        <div className="ct-example">
          <div className="custom-control custom-checkbox mb-3">
            <input
              className="custom-control-input"
              id="customCheck1"
              type="checkbox"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Unchecked
            </label>
          </div>
          <div className="custom-control custom-checkbox mb-3">
            <input
              className="custom-control-input"
              defaultChecked
              id="customCheck2"
              type="checkbox"
            />
            <label className="custom-control-label" htmlFor="customCheck2">
              Checked
            </label>
          </div>
          <div className="custom-control custom-checkbox mb-3">
            <input
              className="custom-control-input"
              disabled
              id="customCheck3"
              type="checkbox"
            />
            <label className="custom-control-label" htmlFor="customCheck3">
              Disabled Unchecked
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
            <label className="custom-control-label" htmlFor="customCheck4">
              Disabled Checked
            </label>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeCheckboxes}
        </SyntaxHighlighter>
        <h2 id="radio-buttons">Radio buttons</h2>
        <div className="ct-example">
          <div className="custom-control custom-radio mb-3">
            <input
              className="custom-control-input"
              id="customRadio5"
              name="custom-radio-2"
              type="radio"
            />
            <label className="custom-control-label" htmlFor="customRadio5">
              Unchecked
            </label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <input
              className="custom-control-input"
              defaultChecked
              id="customRadio6"
              name="custom-radio-2"
              type="radio"
            />
            <label className="custom-control-label" htmlFor="customRadio6">
              Checked
            </label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <input
              className="custom-control-input"
              disabled
              id="customRadio7"
              name="custom-radio-2"
              type="radio"
            />
            <label className="custom-control-label" htmlFor="customRadio7">
              Disabled unchecked
            </label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <input
              className="custom-control-input"
              defaultChecked
              disabled
              id="customRadio8"
              name="custom-radio-2"
              type="radio"
            />
            <label className="custom-control-label" htmlFor="customRadio8">
              Disabled checkbox
            </label>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeRadioButtons}
        </SyntaxHighlighter>
        <h2 id="toggle-buttons">Toggle buttons</h2>
        <div className="ct-example">
          <label className="custom-toggle">
            <input type="checkbox" />
            <span className="custom-toggle-slider rounded-circle" />
          </label>
          <span className="clearfix" />
          <label className="custom-toggle">
            <input defaultChecked type="checkbox" />
            <span className="custom-toggle-slider rounded-circle" />
          </label>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeToggleButtons}
        </SyntaxHighlighter>
        <h2 id="sliders">Sliders</h2>
        <div className="ct-example">
          <Row>
            <Col className="mt-4 mt-md-0">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  Sliders
                </small>
              </div>
              {/* Simple slider */}
              <div className="input-slider-container">
                <div className="slider" ref="slider1" />
                <Row className="mt-3 d-none">
                  <Col xs="6">
                    <span className="range-slider-value">
                      {this.state.simpleValue}
                    </span>
                  </Col>
                </Row>
              </div>
              {/* Range slider */}
              <div className="mt-5">
                {/* Range slider container */}
                <div className="slider" ref="slider2" />
                <Row className="d-none">
                  <Col xs="6">
                    <span className="range-slider-value value-low">
                      {this.state.rangeLow}
                    </span>
                  </Col>
                  <Col className="text-right" xs="6">
                    <span className="range-slider-value value-high">
                      {this.state.rangeHigh}
                    </span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSliders}
        </SyntaxHighlighter>
        <h3 id="examples">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/form/"
            target="_blank"
          >
            reactstrap forms documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Forms;
