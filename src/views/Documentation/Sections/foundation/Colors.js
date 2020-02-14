/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Label, Row, Col } from "reactstrap";

class Colors extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Colors
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <hr />
        <h2 id="primary-colors">Primary colors</h2>
        <p>
          Our primary palette is comprised of neutrals, white, and blue. These
          colors are present across most touch points from marketing to product.
        </p>
        <Row>
          <Col lg="4" md="6">
            <div className="color-swatch">
              <div className="color-swatch-header bg-default">
                <div className="pass-fail">
                  <div className="pass-fail-item-wrap">
                    <div className="pass-fail-item-group">
                      <div className="pass-fail-item">
                        <div className="example">A</div>
                        <div className="lozenge">Fail</div>
                      </div>
                    </div>
                    <div className="pass-fail-item-group">
                      <div className="pass-fail-item white small">
                        <div className="example">A</div>
                        <div className="lozenge">Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="color-swatch-body">
                <div className="prop-item-wrap">
                  <div className="prop-item">
                    <Label>Name</Label>
                    <div className="value">Default</div>
                  </div>
                </div>
                <div className="prop-item-wrap">
                  <div className="prop-item">
                    <Label>Hex</Label>
                    <div className="value">#172b4d</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="color-swatch">
              <div className="color-swatch-header bg-primary">
                <div className="pass-fail">
                  <div className="pass-fail-item-wrap">
                    <div className="pass-fail-item-group">
                      <div className="pass-fail-item">
                        <div className="example">A</div>
                        <div className="lozenge">Fail</div>
                      </div>
                    </div>
                    <div className="pass-fail-item-group">
                      <div className="pass-fail-item white small">
                        <div className="example">A</div>
                        <div className="lozenge">Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="color-swatch-body">
                <div className="prop-item-wrap">
                  <div className="prop-item">
                    <Label>Name</Label>
                    <div className="value">Primary</div>
                  </div>
                </div>
                <div className="prop-item-wrap">
                  <div className="prop-item">
                    <Label>Hex</Label>
                    <div className="value">#5e72e4</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="color-swatch">
              <div className="color-swatch-header bg-secondary">
                <div className="pass-fail">
                  <div className="pass-fail-item-wrap">
                    <div className="pass-fail-item-group">
                      <div className="pass-fail-item">
                        <div className="example">A</div>
                        <div className="lozenge">Fail</div>
                      </div>
                    </div>
                    <div className="pass-fail-item-group">
                      <div className="pass-fail-item white small">
                        <div className="example">A</div>
                        <div className="lozenge">Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="color-swatch-body">
                <div className="prop-item-wrap">
                  <div className="prop-item">
                    <Label>Name</Label>
                    <div className="value">Secondary</div>
                  </div>
                </div>
                <div className="prop-item-wrap">
                  <div className="prop-item">
                    <Label>Hex</Label>
                    <div className="value">#f4f5f7</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="color-swatch">
              <div className="color-swatch-header bg-info">
                <div className="pass-fail">
                  <div className="pass-fail-item-wrap">
                    <div className="pass-fail-item-group">
                      <div className="pass-fail-item">
                        <div className="example">A</div>
                        <div className="lozenge">Fail</div>
                      </div>
                    </div>
                    <div className="pass-fail-item-group">
                      <div className="pass-fail-item white small">
                        <div className="example">A</div>
                        <div className="lozenge">Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="color-swatch-body">
                <div className="prop-item-wrap">
                  <div className="prop-item">
                    <Label>Name</Label>
                    <div className="value">Info</div>
                  </div>
                </div>
                <div className="prop-item-wrap">
                  <div className="prop-item">
                    <Label>Hex</Label>
                    <div className="value">#11cdef</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="color-swatch">
              <div className="color-swatch-header bg-success">
                <div className="pass-fail">
                  <div className="pass-fail-item-wrap">
                    <div className="pass-fail-item-group">
                      <div className="pass-fail-item">
                        <div className="example">A</div>
                        <div className="lozenge">Fail</div>
                      </div>
                    </div>
                    <div className="pass-fail-item-group">
                      <div className="pass-fail-item white small">
                        <div className="example">A</div>
                        <div className="lozenge">Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="color-swatch-body">
                <div className="prop-item-wrap">
                  <div className="prop-item">
                    <Label>Name</Label>
                    <div className="value">Success</div>
                  </div>
                </div>
                <div className="prop-item-wrap">
                  <div className="prop-item">
                    <Label>Hex</Label>
                    <div className="value">#2dce89</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="color-swatch">
              <div className="color-swatch-header bg-danger">
                <div className="pass-fail">
                  <div className="pass-fail-item-wrap">
                    <div className="pass-fail-item-group">
                      <div className="pass-fail-item">
                        <div className="example">A</div>
                        <div className="lozenge">Fail</div>
                      </div>
                    </div>
                    <div className="pass-fail-item-group">
                      <div className="pass-fail-item white small">
                        <div className="example">A</div>
                        <div className="lozenge">Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="color-swatch-body">
                <div className="prop-item-wrap">
                  <div className="prop-item">
                    <Label>Name</Label>
                    <div className="value">Danger</div>
                  </div>
                </div>
                <div className="prop-item-wrap">
                  <div className="prop-item">
                    <Label>Hex</Label>
                    <div className="value">#f5365c</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="color-swatch">
              <div className="color-swatch-header bg-warning">
                <div className="pass-fail">
                  <div className="pass-fail-item-wrap">
                    <div className="pass-fail-item-group">
                      <div className="pass-fail-item">
                        <div className="example">A</div>
                        <div className="lozenge">Fail</div>
                      </div>
                    </div>
                    <div className="pass-fail-item-group">
                      <div className="pass-fail-item white small">
                        <div className="example">A</div>
                        <div className="lozenge">Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="color-swatch-body">
                <div className="prop-item-wrap">
                  <div className="prop-item">
                    <Label>Name</Label>
                    <div className="value">Warning</div>
                  </div>
                </div>
                <div className="prop-item-wrap">
                  <div className="prop-item">
                    <Label>Hex</Label>
                    <div className="value">#fb6340</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <h2 id="light-neutrals">Light neutrals</h2>
        <p>
          Light neutrals are helpful for offsetting content in a primarily white
          layout without losing warmth and cleanliness, and are therefore often
          used as a background color for web components.
        </p>
        <table className="table table-colors">
          <tbody>
            <tr>
              <td>
                <div className="swatch" style={{ backgroundColor: "#f6f9fc" }} />
                Gray 100
              </td>
              <td>
                <div className="lozenge">Hex</div>
                #f6f9fc
              </td>
            </tr>
            <tr>
              <td>
                <div className="swatch" style={{ backgroundColor: "#e9ecef" }} />
                Gray 200
              </td>
              <td>
                <div className="lozenge">Hex</div>
                #e9ecef
              </td>
            </tr>
            <tr>
              <td>
                <div className="swatch" style={{ backgroundColor: "#dee2e6" }} />
                Gray 300
              </td>
              <td>
                <div className="lozenge">Hex</div>
                #dee2e6
              </td>
            </tr>
            <tr>
              <td>
                <div className="swatch" style={{ backgroundColor: "#ced4da" }} />
                Gray 400
              </td>
              <td>
                <div className="lozenge">Hex</div>
                #ced4da
              </td>
            </tr>
            <tr>
              <td>
                <div className="swatch" style={{ backgroundColor: "#adb5bd" }} />
                Gray 500
              </td>
              <td>
                <div className="lozenge">Hex</div>
                #adb5bd
              </td>
            </tr>
            <tr>
              <td>
                <div className="swatch" style={{ backgroundColor: "#8898aa" }} />
                Gray 600
              </td>
              <td>
                <div className="lozenge">Hex</div>
                #8898aa
              </td>
            </tr>
            <tr>
              <td>
                <div className="swatch" style={{ backgroundColor: "#525f7f" }} />
                Gray 700
              </td>
              <td>
                <div className="lozenge">Hex</div>
                #525f7f
              </td>
            </tr>
            <tr>
              <td>
                <div className="swatch" style={{ backgroundColor: "#32325d" }} />
                Gray 800
              </td>
              <td>
                <div className="lozenge">Hex</div>
                #32325d
              </td>
            </tr>
            <tr>
              <td>
                <div className="swatch" style={{ backgroundColor: "#212529" }} />
                Gray 900
              </td>
              <td>
                <div className="lozenge">Hex</div>
                #212529
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Colors;
