import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Datepicker extends React.Component {
  state = {};
  render() {
    return (
      <>
        <h3 className="h4 text-success font-weight-bold mt-md mb-4">
          Datepicker
        </h3>
        <Row>
          <Col md="4">
            <small className="d-block text-uppercase font-weight-bold mb-3">
              Single date
            </small>
            <FormGroup className="focused">
              <InputGroup>
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
          </Col>
          <Col className="mt-4 mt-md-0" md="8">
            <small className="d-block text-uppercase font-weight-bold mb-3">
              Date range
            </small>
            <Row>
              <Col xs={6}>
                <FormGroup className="focused">
                  <InputGroup>
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
                <FormGroup className="focused">
                  <InputGroup>
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
          </Col>
        </Row>
      </>
    );
  }
}

export default Datepicker;
