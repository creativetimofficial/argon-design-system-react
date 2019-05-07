import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import { Button, PopoverBody, UncontrolledPopover } from "reactstrap";

const codeExample = `import React from "react";
// reactstrap components
import { Button, PopoverBody, UncontrolledPopover } from "reactstrap";

class Popovers extends React.Component {
  render() {
    return (
      <>
        <Button color="default" id="tooltip876279349" type="button">
          Popover on top
        </Button>
        <UncontrolledPopover placement="top" target="tooltip876279349">
          <PopoverBody>
            This is a very beautiful popover, show some love.
          </PopoverBody>
        </UncontrolledPopover>
        <Button color="default" id="tooltip641002859" type="button">
          Popover on right
        </Button>
        <UncontrolledPopover placement="right" target="tooltip641002859">
          <PopoverBody>
            This is a very beautiful popover, show some love.
          </PopoverBody>
        </UncontrolledPopover>
        <Button color="default" id="tooltip765206973" type="button">
          Popover on bottom
        </Button>
        <UncontrolledPopover placement="bottom" target="tooltip765206973">
          <PopoverBody>
            Vivamussagittis lacus vel augue laoreet rutrum faucibus.
          </PopoverBody>
        </UncontrolledPopover>
        <Button color="default" id="tooltip523914989" type="button">
          Popover on left
        </Button>
        <UncontrolledPopover placement="left" target="tooltip523914989">
          <PopoverBody>
            This is a very beautiful popover, show some love.
          </PopoverBody>
        </UncontrolledPopover>
      </>
    );
  }
}

export default Popovers;
`;

const codeVariations = `import React from "react";
// reactstrap components
import { Button, PopoverBody, UncontrolledPopover } from "reactstrap";

class Popovers extends React.Component {
  render() {
    return (
      <>
        <Button color="default" id="tooltip348236073" type="button">
          Default popover
        </Button>
        <UncontrolledPopover
          placement="top"
          target="tooltip348236073"
          className="popover-default"
        >
          <PopoverBody>
            This is a very beautiful popover, show some love.
          </PopoverBody>
        </UncontrolledPopover>
        <Button color="primary" id="tooltip165342254" type="button">
          Primary popover
        </Button>
        <UncontrolledPopover
          placement="top"
          target="tooltip165342254"
          className="popover-primary"
        >
          <PopoverBody>
            This is a very beautiful popover, show some love.
          </PopoverBody>
        </UncontrolledPopover>
        <Button color="secondary" id="tooltip538314748" type="button">
          Secondary popover
        </Button>
        <UncontrolledPopover
          placement="top"
          target="tooltip538314748"
          className="popover-secondary"
        >
          <PopoverBody>
            This is a very beautiful popover, show some love.
          </PopoverBody>
        </UncontrolledPopover>
        <Button color="info" id="tooltip751185789" type="button">
          Info popover
        </Button>
        <UncontrolledPopover
          placement="top"
          target="tooltip751185789"
          className="popover-info"
        >
          <PopoverBody>
            This is a very beautiful popover, show some love.
          </PopoverBody>
        </UncontrolledPopover>
        <Button color="success" id="tooltip518437705" type="button">
          Success popover
        </Button>
        <UncontrolledPopover
          placement="top"
          target="tooltip518437705"
          className="popover-success"
        >
          <PopoverBody>
            This is a very beautiful popover, show some love.
          </PopoverBody>
        </UncontrolledPopover>
        <Button color="danger" id="tooltip75038580" type="button">
          Danger popover
        </Button>
        <UncontrolledPopover
          placement="top"
          target="tooltip75038580"
          className="popover-danger"
        >
          <PopoverBody>
            This is a very beautiful popover, show some love.
          </PopoverBody>
        </UncontrolledPopover>
        <Button color="warning" id="tooltip783693128" type="button">
          Warning popover
        </Button>
        <UncontrolledPopover
          placement="top"
          target="tooltip783693128"
          className="popover-warning"
        >
          <PopoverBody>
            This is a very beautiful popover, show some love.
          </PopoverBody>
        </UncontrolledPopover>
      </>
    );
  }
}

export default Popovers;
`;

class Popovers extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Popovers
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Documentation and examples for adding Bootstrap popovers, like those
          found in iOS, to any element on your site.
        </p>
        <hr />
        <h2 id="example">Example</h2>
        <div className="ct-example">
          <Button color="default" id="tooltip876279349" type="button">
            Popover on top
          </Button>
          <UncontrolledPopover placement="top" target="tooltip876279349">
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button color="default" id="tooltip641002859" type="button">
            Popover on right
          </Button>
          <UncontrolledPopover placement="right" target="tooltip641002859">
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button color="default" id="tooltip765206973" type="button">
            Popover on bottom
          </Button>
          <UncontrolledPopover placement="bottom" target="tooltip765206973">
            <PopoverBody>
              Vivamussagittis lacus vel augue laoreet rutrum faucibus.
            </PopoverBody>
          </UncontrolledPopover>
          <Button color="default" id="tooltip523914989" type="button">
            Popover on left
          </Button>
          <UncontrolledPopover placement="left" target="tooltip523914989">
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h2 id="variations">Variations</h2>
        <div className="ct-example">
          <Button color="default" id="tooltip348236073" type="button">
            Default popover
          </Button>
          <UncontrolledPopover
            placement="top"
            target="tooltip348236073"
            className="popover-default"
          >
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button color="primary" id="tooltip165342254" type="button">
            Primary popover
          </Button>
          <UncontrolledPopover
            placement="top"
            target="tooltip165342254"
            className="popover-primary"
          >
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button color="secondary" id="tooltip538314748" type="button">
            Secondary popover
          </Button>
          <UncontrolledPopover
            placement="top"
            target="tooltip538314748"
            className="popover-secondary"
          >
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button color="info" id="tooltip751185789" type="button">
            Info popover
          </Button>
          <UncontrolledPopover
            placement="top"
            target="tooltip751185789"
            className="popover-info"
          >
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button color="success" id="tooltip518437705" type="button">
            Success popover
          </Button>
          <UncontrolledPopover
            placement="top"
            target="tooltip518437705"
            className="popover-success"
          >
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button color="danger" id="tooltip75038580" type="button">
            Danger popover
          </Button>
          <UncontrolledPopover
            placement="top"
            target="tooltip75038580"
            className="popover-danger"
          >
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
          <Button color="warning" id="tooltip783693128" type="button">
            Warning popover
          </Button>
          <UncontrolledPopover
            placement="top"
            target="tooltip783693128"
            className="popover-warning"
          >
            <PopoverBody>
              This is a very beautiful popover, show some love.
            </PopoverBody>
          </UncontrolledPopover>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeVariations}
        </SyntaxHighlighter>
        <h3 id="examples">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/popovers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap popovers documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Popovers;
