import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Datepicker extends React.Component {
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
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    className: "form-control",
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
            <ReactDatetime
              inputProps={{
                className: "form-control",
                placeholder: "Date Picker Here"
              }}
              timeFormat={false}
            >
              <div className="col">
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-calendar-grid-58" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      defaultValue="06/18/2018"
                      placeholder="Start date"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
              </div>
              <div className="col">
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-calendar-grid-58" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      defaultValue="06/22/2018"
                      placeholder="End date"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
              </div>
            </ReactDatetime>
          </Col>
        </Row>
      </>
    );
  }
}

export default Datepicker;
