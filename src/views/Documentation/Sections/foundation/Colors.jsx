import React from "react";

// reactstrap components
import { Label, Table, Row, Col } from "reactstrap";

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
        <Table className="table-colors">
          <tbody />
        </Table>
      </>
    );
  }
}

export default Colors;
