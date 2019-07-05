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
import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// reactstrap components
import { Row, Col } from "reactstrap";

class CustomControls extends React.Component {
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

export default CustomControls;
