import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row
} from "reactstrap";

const codeSingle = `import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row
} from "reactstrap";

class Datepicker extends React.Component {
  state = {};
  render() {
    return (
      <>
        <FormGroup>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-calendar-grid-58" />
              </InputGroupText>
            </InputGroupAddon>
            <ReactDatetime
              inputProps={{
                placeholder: "Date Picker Here"
              }}
              timeFormat={false}
            />
          </InputGroup>
        </FormGroup>
      </>
    );
  }
}

export default Datepicker;
`;

const codeRange = `import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row
} from "reactstrap";

class Datepicker extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    placeholder: "Date Picker Here"
                  }}
                  timeFormat={false}
                  renderDay={(props, currentDate, selectedDate) => {
                    let classes = props.className;
                    if (
                      this.state.startDate &&
                      this.state.endDate &&
                      this.state.startDate._d + "" === currentDate._d + ""
                    ) {
                      classes += " start-date";
                    } else if (
                      this.state.startDate &&
                      this.state.endDate &&
                      new Date(this.state.startDate._d + "") <
                        new Date(currentDate._d + "") &&
                      new Date(this.state.endDate._d + "") >
                        new Date(currentDate._d + "")
                    ) {
                      classes += " middle-date";
                    } else if (
                      this.state.endDate &&
                      this.state.endDate._d + "" === currentDate._d + ""
                    ) {
                      classes += " end-date";
                    }
                    return (
                      <td {...props} className={classes}>
                        {currentDate.date()}
                      </td>
                    );
                  }}
                  onChange={e => this.setState({ startDate: e })}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs={6}>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    placeholder: "Date Picker Here"
                  }}
                  timeFormat={false}
                  renderDay={(props, currentDate, selectedDate) => {
                    let classes = props.className;
                    if (
                      this.state.startDate &&
                      this.state.endDate &&
                      this.state.startDate._d + "" === currentDate._d + ""
                    ) {
                      classes += " start-date";
                    } else if (
                      this.state.startDate &&
                      this.state.endDate &&
                      new Date(this.state.startDate._d + "") <
                        new Date(currentDate._d + "") &&
                      new Date(this.state.endDate._d + "") >
                        new Date(currentDate._d + "")
                    ) {
                      classes += " middle-date";
                    } else if (
                      this.state.endDate &&
                      this.state.endDate._d + "" === currentDate._d + ""
                    ) {
                      classes += " end-date";
                    }
                    return (
                      <td {...props} className={classes}>
                        {currentDate.date()}
                      </td>
                    );
                  }}
                  onChange={e => this.setState({ endDate: e })}
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default Datepicker;
`;

class Datepicker extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            React Datetime v2.16.3
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          A date and time picker in the same React.js component. It can be used
          as a datepicker, timepicker or both at the same time. It is highly
          customizable and it even allows to edit date's milliseconds.
        </p>
        <hr />
        <h2 id="single-datepicker">Single datepicker</h2>
        <div className="ct-example">
          <FormGroup>
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-calendar-grid-58" />
                </InputGroupText>
              </InputGroupAddon>
              <ReactDatetime
                inputProps={{
                  placeholder: "Date Picker Here"
                }}
                timeFormat={false}
              />
            </InputGroup>
          </FormGroup>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSingle}
        </SyntaxHighlighter>
        <h2 id="range-datepicker">Range datepicker</h2>
        <div className="ct-example">
          <Row>
            <Col xs={6}>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-calendar-grid-58" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <ReactDatetime
                    inputProps={{
                      placeholder: "Date Picker Here"
                    }}
                    timeFormat={false}
                    renderDay={(props, currentDate, selectedDate) => {
                      let classes = props.className;
                      if (
                        this.state.startDate &&
                        this.state.endDate &&
                        this.state.startDate._d + "" === currentDate._d + ""
                      ) {
                        classes += " start-date";
                      } else if (
                        this.state.startDate &&
                        this.state.endDate &&
                        new Date(this.state.startDate._d + "") <
                          new Date(currentDate._d + "") &&
                        new Date(this.state.endDate._d + "") >
                          new Date(currentDate._d + "")
                      ) {
                        classes += " middle-date";
                      } else if (
                        this.state.endDate &&
                        this.state.endDate._d + "" === currentDate._d + ""
                      ) {
                        classes += " end-date";
                      }
                      return (
                        <td {...props} className={classes}>
                          {currentDate.date()}
                        </td>
                      );
                    }}
                    onChange={e => this.setState({ startDate: e })}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col xs={6}>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-calendar-grid-58" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <ReactDatetime
                    inputProps={{
                      placeholder: "Date Picker Here"
                    }}
                    timeFormat={false}
                    renderDay={(props, currentDate, selectedDate) => {
                      let classes = props.className;
                      if (
                        this.state.startDate &&
                        this.state.endDate &&
                        this.state.startDate._d + "" === currentDate._d + ""
                      ) {
                        classes += " start-date";
                      } else if (
                        this.state.startDate &&
                        this.state.endDate &&
                        new Date(this.state.startDate._d + "") <
                          new Date(currentDate._d + "") &&
                        new Date(this.state.endDate._d + "") >
                          new Date(currentDate._d + "")
                      ) {
                        classes += " middle-date";
                      } else if (
                        this.state.endDate &&
                        this.state.endDate._d + "" === currentDate._d + ""
                      ) {
                        classes += " end-date";
                      }
                      return (
                        <td {...props} className={classes}>
                          {currentDate.date()}
                        </td>
                      );
                    }}
                    onChange={e => this.setState({ endDate: e })}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeRange}
        </SyntaxHighlighter>
        <h3 id="initialization">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://github.com/YouCanBookMe/react-datetime"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-datetime's documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Datepicker;
