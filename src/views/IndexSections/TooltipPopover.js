/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader
} from "reactstrap";

class TooltipPopover extends React.Component {
  render() {
    return (
      <>
        <h3 className="h4 text-success font-weight-bold mt-md mb-4">
          Tooltips &amp; Popovers
        </h3>
        <Row>
          <Col lg="6">
            <small className="d-block text-uppercase font-weight-bold mb-3">
              Tooltips
            </small>
            <Button
              className="btn-tooltip"
              color="primary"
              id="tooltip38321129"
              size="sm"
            >
              On left
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="left"
              target="tooltip38321129"
              trigger="hover focus"
            >
              Tooltip on left
            </UncontrolledTooltip>
            <Button
              className="btn-tooltip"
              color="primary"
              id="tooltip556394744"
              size="sm"
            >
              On top
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="top"
              target="tooltip556394744"
              trigger="hover focus"
            >
              Tooltip on top
            </UncontrolledTooltip>
            <Button
              className="btn-tooltip"
              color="primary"
              id="tooltip613577679"
              size="sm"
            >
              On bottom
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="bottom"
              target="tooltip613577679"
              trigger="hover focus"
            >
              Tooltip on bottom
            </UncontrolledTooltip>
            <Button
              className="btn-tooltip"
              color="primary"
              id="tooltip476554683"
              size="sm"
            >
              On right
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="right"
              target="tooltip476554683"
              trigger="hover focus"
            >
              Tooltip on right
            </UncontrolledTooltip>
          </Col>
          <Col className="mt-4 mt-lg-0" lg="6">
            <small className="d-block text-uppercase font-weight-bold mb-3">
              Popovers
            </small>
            <Button color="default" id="tooltip391311689" size="sm">
              On left
            </Button>
            <UncontrolledPopover
              trigger="focus"
              placement="left"
              target="tooltip391311689"
            >
              <PopoverHeader>Popover On Left</PopoverHeader>
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </UncontrolledPopover>
            <Button color="default" id="tooltip62844899" size="sm">
              On top
            </Button>
            <UncontrolledPopover
              trigger="focus"
              placement="top"
              target="tooltip62844899"
            >
              <PopoverHeader>Popover on Top</PopoverHeader>
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </UncontrolledPopover>
            <Button color="default" id="tooltip969535472" size="sm">
              On right
            </Button>
            <UncontrolledPopover
              trigger="focus"
              placement="right"
              target="tooltip969535472"
            >
              <PopoverHeader>Popover on Right</PopoverHeader>
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </UncontrolledPopover>
            <Button color="default" id="tooltip60850592" size="sm">
              On bottom
            </Button>
            <UncontrolledPopover
              trigger="focus"
              placement="bottom"
              target="tooltip60850592"
            >
              <PopoverHeader>Popover on Bottom</PopoverHeader>
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </UncontrolledPopover>
          </Col>
        </Row>
      </>
    );
  }
}

export default TooltipPopover;
