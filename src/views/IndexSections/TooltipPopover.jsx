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
              data-animation={true}
              data-container="body"
              data-delay="100"
              data-placement="left"
              id="tooltip38321129"
              size="sm"
              type="button"
            >
              On left
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="left"
              target="tooltip38321129"
            >
              Tooltip on left
            </UncontrolledTooltip>
            <Button
              className="btn-tooltip"
              color="primary"
              data-animation={true}
              data-container="body"
              data-placement="top"
              id="tooltip556394744"
              size="sm"
              type="button"
            >
              On top
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="top"
              target="tooltip556394744"
            >
              Tooltip on top
            </UncontrolledTooltip>
            <Button
              className="btn-tooltip"
              color="primary"
              data-animation={true}
              data-container="body"
              data-placement="bottom"
              id="tooltip613577679"
              size="sm"
              type="button"
            >
              On bottom
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="bottom"
              target="tooltip613577679"
            >
              Tooltip on bottom
            </UncontrolledTooltip>
            <Button
              className="btn-tooltip"
              color="primary"
              data-animation={true}
              data-container="body"
              data-placement="right"
              id="tooltip476554683"
              size="sm"
              type="button"
            >
              On right
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="right"
              target="tooltip476554683"
            >
              Tooltip on right
            </UncontrolledTooltip>
          </Col>
          <Col className="mt-4 mt-lg-0" lg="6">
            <small className="d-block text-uppercase font-weight-bold mb-3">
              Popovers
            </small>
            <Button
              color="default"
              data-container="body"
              data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-placement="left"
              id="tooltip391311689"
              size="sm"
              type="button"
            >
              On left
            </Button>
            <UncontrolledPopover placement="left" target="tooltip391311689">
              <PopoverHeader>Popover On Left</PopoverHeader>
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </UncontrolledPopover>
            <Button
              color="default"
              data-container="body"
              data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-placement="top"
              id="tooltip62844899"
              size="sm"
              type="button"
            >
              On top
            </Button>
            <UncontrolledPopover placement="top" target="tooltip62844899">
              <PopoverHeader>Popover on Top</PopoverHeader>
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </UncontrolledPopover>
            <Button
              color="default"
              data-container="body"
              data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-placement="right"
              id="tooltip969535472"
              size="sm"
              type="button"
            >
              On right
            </Button>
            <UncontrolledPopover placement="right" target="tooltip969535472">
              <PopoverHeader>Popover on Right</PopoverHeader>
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </UncontrolledPopover>
            <Button
              color="default"
              data-container="body"
              data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-placement="bottom"
              id="tooltip60850592"
              size="sm"
              type="button"
            >
              On bottom
            </Button>
            <UncontrolledPopover placement="bottom" target="tooltip60850592">
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
