import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import { Button, Col, UncontrolledTooltip } from "reactstrap";

const codeExample = `import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import { Button, Col, UncontrolledTooltip } from "reactstrap";

class Datepicker extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Col lg="3" md="6">
          <CopyToClipboard
            text={"active-40"}
            onCopy={() => this.setState({ copiedText: "active-40" })}
          >
            <Button
              className="btn-icon-clipboard"
              id="tooltip982655500"
              type="button"
            >
              <div>
                <i className="ni ni-active-40" />
                <span>active-40</span>
              </div>
            </Button>
          </CopyToClipboard>
          <UncontrolledTooltip
            delay={0}
            trigger="hover focus"
            target="tooltip982655500"
          >
            {this.state.copiedText === "active-40"
              ? "Copied"
              : "Copy To Clipboard"}
          </UncontrolledTooltip>
        </Col>
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
            React Copy to Clipboard v5.0.1
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          CopyToClipboard is a simple wrapping component, it does not render any
          tags, so it requires the only child element to be present, which will
          be used to capture clicks.
        </p>
        <hr />
        <h2 id="single-datepicker">Example</h2>
        <div className="ct-example">
          <Col lg="3" md="6">
            <CopyToClipboard
              text={"active-40"}
              onCopy={() => this.setState({ copiedText: "active-40" })}
            >
              <Button
                className="btn-icon-clipboard"
                id="tooltip982655500"
                type="button"
              >
                <div>
                  <i className="ni ni-active-40" />
                  <span>active-40</span>
                </div>
              </Button>
            </CopyToClipboard>
            <UncontrolledTooltip
              delay={0}
              trigger="hover focus"
              target="tooltip982655500"
            >
              {this.state.copiedText === "active-40"
                ? "Copied"
                : "Copy To Clipboard"}
            </UncontrolledTooltip>
          </Col>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h3 id="initialization">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://github.com/nkbt/react-copy-to-clipboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            this plugins documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Datepicker;
