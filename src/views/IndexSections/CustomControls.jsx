import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

class CustomControls extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col lg="3" md="6">
            {/* Checkboxes */}
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Checkboxes
              </small>
            </div>
            <div className="custom-control custom-checkbox mb-3">
              <input
                className="custom-control-input"
                id="customCheck1"
                type="checkbox"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                <span>Unchecked</span>
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
                <span>Checked</span>
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
                <span>Disabled Unchecked</span>
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
                <span>Disabled Checked</span>
              </label>
            </div>
          </Col>
          <Col className="mt-4 mt-md-0" lg="3" sm="6">
            {/* Radio buttons */}
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">Radios</small>
            </div>
            <div className="custom-control custom-radio mb-3">
              <input
                className="custom-control-input"
                id="customRadio1"
                name="custom-radio-1"
                type="radio"
              />
              <label className="custom-control-label" htmlFor="customRadio1">
                <span>Unchecked</span>
              </label>
            </div>
            <div className="custom-control custom-radio mb-3">
              <input
                className="custom-control-input"
                defaultChecked
                id="customRadio2"
                name="custom-radio-1"
                type="radio"
              />
              <label className="custom-control-label" htmlFor="customRadio2">
                <span>Checked</span>
              </label>
            </div>
            <div className="custom-control custom-radio mb-3">
              <input
                className="custom-control-input"
                disabled
                id="customRadio3"
                name="custom-radio-2"
                type="radio"
              />
              <label className="custom-control-label" htmlFor="customRadio3">
                <span>Disabled unchecked</span>
              </label>
            </div>
            <div className="custom-control custom-radio mb-3">
              <input
                className="custom-control-input"
                defaultChecked
                disabled
                id="customRadio4"
                name="custom-radio-2"
                type="radio"
              />
              <label className="custom-control-label" htmlFor="customRadio4">
                <span>Disabled checkbox</span>
              </label>
            </div>
          </Col>
          <Col className="mt-4 mt-md-0" lg="3" sm="6">
            {/* Toggle buttons */}
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Toggle buttons
              </small>
            </div>
            <label className="custom-toggle">
              <input type="checkbox" />
              <span className="custom-toggle-slider rounded-circle" />
            </label>
            <span className="clearfix" />
            <label className="custom-toggle">
              <input defaultChecked type="checkbox" />
              <span className="custom-toggle-slider rounded-circle" />
            </label>
          </Col>
          <Col className="mt-4 mt-md-0" lg="3" sm="6">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">Sliders</small>
            </div>
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
            {/* Range slider */}
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
          </Col>
        </Row>
      </>
    );
  }
}

export default CustomControls;
