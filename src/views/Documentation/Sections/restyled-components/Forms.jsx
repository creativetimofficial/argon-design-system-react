import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
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

const codeAlternative3 = `import React from "react";


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
        <div className="custom-control custom-control-alternative custom-checkbox mb-3">
          <input
            className="custom-control-input"
            id="customCheck5"
            type="checkbox"
          />
          <label className="custom-control-label" htmlFor="customCheck5">
            Unchecked
          </label>
        </div>
        <div className="custom-control custom-control-alternative custom-checkbox mb-3">
          <input
            className="custom-control-input"
            defaultChecked
            id="customCheck6"
            type="checkbox"
          />
          <label className="custom-control-label" htmlFor="customCheck6">
            Checked
          </label>
        </div>
        <div className="custom-control custom-control-alternative custom-checkbox mb-3">
          <input
            className="custom-control-input"
            disabled
            id="customCheck7"
            type="checkbox"
          />
          <label className="custom-control-label" htmlFor="customCheck7">
            Disabled Unchecked
          </label>
        </div>
        <div className="custom-control custom-control-alternative custom-checkbox mb-3">
          <input
            className="custom-control-input"
            defaultChecked
            disabled
            id="customCheck8"
            type="checkbox"
          />
          <label className="custom-control-label" htmlFor="customCheck8">
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

const codeAlternative4 = `import React from "react";


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
        <div className="custom-control custom-control-alternative custom-radio mb-3">
          <input
            className="custom-control-input"
            id="customRadio1"
            name="custom-radio-1"
            type="radio"
          />
          <label className="custom-control-label" htmlFor="customRadio1">
            Unchecked
          </label>
        </div>
        <div className="custom-control custom-control-alternative custom-radio mb-3">
          <input
            className="custom-control-input"
            defaultChecked
            id="customRadio2"
            name="custom-radio-1"
            type="radio"
          />
          <label className="custom-control-label" htmlFor="customRadio2">
            Checked
          </label>
        </div>
        <div className="custom-control custom-control-alternative custom-radio mb-3">
          <input
            className="custom-control-input"
            disabled
            id="customRadio3"
            name="custom-radio-1"
            type="radio"
          />
          <label className="custom-control-label" htmlFor="customRadio3">
            Disabled unchecked
          </label>
        </div>
        <div className="custom-control custom-control-alternative custom-radio mb-3">
          <input
            className="custom-control-input"
            defaultChecked
            disabled
            id="customRadio4"
            name="custom-radio-1"
            type="radio"
          />
          <label className="custom-control-label" htmlFor="customRadio4">
            Disabled checkbox
          </label>
        </div>
      </>
    );
  }
}

export default Forms;
import React from "react";


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

const codeSliders = ``;

class Forms extends React.Component {
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
        <h3 id="alternative-2">Alternative</h3>
        <div className="ct-example">
          <div className="custom-control custom-control-alternative custom-checkbox mb-3">
            <input
              className="custom-control-input"
              id="customCheck5"
              type="checkbox"
            />
            <label className="custom-control-label" htmlFor="customCheck5">
              Unchecked
            </label>
          </div>
          <div className="custom-control custom-control-alternative custom-checkbox mb-3">
            <input
              className="custom-control-input"
              defaultChecked
              id="customCheck6"
              type="checkbox"
            />
            <label className="custom-control-label" htmlFor="customCheck6">
              Checked
            </label>
          </div>
          <div className="custom-control custom-control-alternative custom-checkbox mb-3">
            <input
              className="custom-control-input"
              disabled
              id="customCheck7"
              type="checkbox"
            />
            <label className="custom-control-label" htmlFor="customCheck7">
              Disabled Unchecked
            </label>
          </div>
          <div className="custom-control custom-control-alternative custom-checkbox mb-3">
            <input
              className="custom-control-input"
              defaultChecked
              disabled
              id="customCheck8"
              type="checkbox"
            />
            <label className="custom-control-label" htmlFor="customCheck8">
              Disabled Checked
            </label>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAlternative3}
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
        <h3 id="alternative-3">Alternative</h3>
        <div className="ct-example">
          <div className="custom-control custom-control-alternative custom-radio mb-3">
            <input
              className="custom-control-input"
              id="customRadio1"
              name="custom-radio-1"
              type="radio"
            />
            <label className="custom-control-label" htmlFor="customRadio1">
              Unchecked
            </label>
          </div>
          <div className="custom-control custom-control-alternative custom-radio mb-3">
            <input
              className="custom-control-input"
              defaultChecked
              id="customRadio2"
              name="custom-radio-1"
              type="radio"
            />
            <label className="custom-control-label" htmlFor="customRadio2">
              Checked
            </label>
          </div>
          <div className="custom-control custom-control-alternative custom-radio mb-3">
            <input
              className="custom-control-input"
              disabled
              id="customRadio3"
              name="custom-radio-1"
              type="radio"
            />
            <label className="custom-control-label" htmlFor="customRadio3">
              Disabled unchecked
            </label>
          </div>
          <div className="custom-control custom-control-alternative custom-radio mb-3">
            <input
              className="custom-control-input"
              defaultChecked
              disabled
              id="customRadio4"
              name="custom-radio-1"
              type="radio"
            />
            <label className="custom-control-label" htmlFor="customRadio4">
              Disabled checkbox
            </label>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAlternative4}
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
          {/* Simple slider */}
          <div className="input-slider-container">
            <div
              className="input-slider"
              data-range-value-max="500"
              data-range-value-min="100"
              id="input-slider"
            />
            {/* Input slider values */}
            <Row className="mt-3 d-none">
              <Col xs="6">
                <span
                  className="range-slider-value"
                  data-range-value-low="100"
                  id="input-slider-value"
                />
              </Col>
            </Row>
          </div>
          <div className="mt-5">
            {/* Range slider container */}
            <div
              data-range-value-max="500"
              data-range-value-min="100"
              id="input-slider-range"
            />
            {/* Range slider values */}
            <Row className="d-none">
              <Col xs="6">
                <span
                  className="range-slider-value value-low"
                  data-range-value-low="200"
                  id="input-slider-range-value-low"
                />
              </Col>
              <Col className="text-right" xs="6">
                <span
                  className="range-slider-value value-high"
                  data-range-value-high="400"
                  id="input-slider-range-value-high"
                />
              </Col>
            </Row>
          </div>
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
            rel="noopener noreferrer"
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
