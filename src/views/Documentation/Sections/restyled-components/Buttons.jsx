import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import { Button } from "reactstrap";

const codeExamples1 = `import React from "react";
// reactstrap components
import { Button } from "reactstrap";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <Button color="primary" type="button">
          Button
        </Button>
        <Button className="btn-icon btn-3" color="primary" type="button">
          <span className="btn-inner--icon">
            <i className="ni ni-bag-17" />
          </span>
          <span className="btn-inner--text">With icon</span>
        </Button>
        <Button className="btn-icon btn-2" color="primary" type="button">
          <span className="btn-inner--icon">
            <i className="ni ni-atom" />
          </span>
        </Button>
      </>
    );
  }
}

export default Buttons;
`;

const codeExamples2 = `import React from "react";
// reactstrap components
import { Button } from "reactstrap";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <Button color="default" type="button">
          Default
        </Button>
        <Button color="primary" type="button">
          Primary
        </Button>
        <Button color="secondary" type="button">
          Secondary
        </Button>
        <Button color="info" type="button">
          Info
        </Button>
        <Button color="success" type="button">
          Success
        </Button>
        <Button color="danger" type="button">
          Danger
        </Button>
        <Button color="warning" type="button">
          Warning
        </Button>
      </>
    );
  }
}

export default Buttons;`;

const codeOutlineButtons = `import React from "react";
// reactstrap components
import { Button } from "reactstrap";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <Button color="default" outline type="button">
          Default
        </Button>
        <Button color="primary" outline type="button">
          Primary
        </Button>
        <Button color="secondary" outline type="button">
          Secondary
        </Button>
        <Button color="info" outline type="button">
          Info
        </Button>
        <Button color="success" outline type="button">
          Success
        </Button>
        <Button color="danger" outline type="button">
          Danger
        </Button>
        <Button color="warning" outline type="button">
          Warning
        </Button>
      </>
    );
  }
}

export default Buttons;`;

const codeSizes1 = `import React from "react";
// reactstrap components
import { Button } from "reactstrap";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <Button color="primary" size="lg" type="button">
          Large button
        </Button>
        <Button color="secondary" size="lg" type="button">
          Large button
        </Button>
      </>
    );
  }
}

export default Buttons;`;

const codeSizes2 = `import React from "react";
// reactstrap components
import { Button } from "reactstrap";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <Button color="primary" size="sm" type="button">
          Small button
        </Button>
        <Button color="secondary" size="sm" type="button">
          Small button
        </Button>
      </>
    );
  }
}

export default Buttons;`;

const codeSizes3 = `import React from "react";
// reactstrap components
import { Button } from "reactstrap";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <Button block color="primary" size="lg" type="button">
          Block level button
        </Button>
        <Button block color="secondary" size="lg" type="button">
          Block level button
        </Button>
      </>
    );
  }
}

export default Buttons;`;

const codeActiveState = `import React from "react";
// reactstrap components
import { Button } from "reactstrap";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <Button
          aria-pressed={true}
          className="active"
          color="primary"
          href="#pablo"
          onClick={e => e.preventDefault()}
          role="button"
          size="lg"
        >
          Primary link
        </Button>
        <Button
          aria-pressed={true}
          className="active"
          color="secondary"
          href="#pablo"
          onClick={e => e.preventDefault()}
          role="button"
          size="lg"
        >
          Link
        </Button>
      </>
    );
  }
}

export default Buttons;`;

const codeDisabledState = `import React from "react";
// reactstrap components
import { Button } from "reactstrap";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <Button color="primary" disabled size="lg" type="button">
          Primary button
        </Button>
        <Button color="secondary" disabled size="lg" type="button">
          Button
        </Button>
      </>
    );
  }
}

export default Buttons;`;

class Buttons extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Buttons
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Use Bootstrap’s custom button styles for actions in forms, dialogs,
          and more with support for multiple sizes, states, and more.
        </p>
        <hr />
        <h2 id="examples">Examples</h2>
        <p>
          Bootstrap includes several predefined button styles, each serving its
          own semantic purpose, with a few extras thrown in for more control.
        </p>
        <div className="ct-example">
          <Button color="primary" type="button">
            Button
          </Button>
          <Button className="btn-icon btn-3" color="primary" type="button">
            <span className="btn-inner--icon">
              <i className="ni ni-bag-17" />
            </span>
            <span className="btn-inner--text">With icon</span>
          </Button>
          <Button className="btn-icon btn-2" color="primary" type="button">
            <span className="btn-inner--icon">
              <i className="ni ni-atom" />
            </span>
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamples1}
        </SyntaxHighlighter>
        <div className="ct-example">
          <Button color="default" type="button">
            Default
          </Button>
          <Button color="primary" type="button">
            Primary
          </Button>
          <Button color="secondary" type="button">
            Secondary
          </Button>
          <Button color="info" type="button">
            Info
          </Button>
          <Button color="success" type="button">
            Success
          </Button>
          <Button color="danger" type="button">
            Danger
          </Button>
          <Button color="warning" type="button">
            Warning
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamples2}
        </SyntaxHighlighter>
        <h2 id="outline-buttons">Outline buttons</h2>
        <p>
          In need of a button, but not the hefty background colors they bring?
          Replace the default modifier classes with the{" "}
          <code className="highlighter-rouge">.btn-outline-*</code>
          ones to remove all background images and colors on any button.
        </p>
        <div className="ct-example">
          <Button color="default" outline type="button">
            Default
          </Button>
          <Button color="primary" outline type="button">
            Primary
          </Button>
          <Button color="secondary" outline type="button">
            Secondary
          </Button>
          <Button color="info" outline type="button">
            Info
          </Button>
          <Button color="success" outline type="button">
            Success
          </Button>
          <Button color="danger" outline type="button">
            Danger
          </Button>
          <Button color="warning" outline type="button">
            Warning
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeOutlineButtons}
        </SyntaxHighlighter>
        <h2 id="sizes">Sizes</h2>
        <p>
          Fancy larger or smaller buttons? Add{" "}
          <code className="highlighter-rouge">.btn-lg</code>
          or <code className="highlighter-rouge">.btn-sm</code>
          for additional sizes.
        </p>
        <div className="ct-example">
          <Button color="primary" size="lg" type="button">
            Large button
          </Button>
          <Button color="secondary" size="lg" type="button">
            Large button
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSizes1}
        </SyntaxHighlighter>
        <div className="ct-example">
          <Button color="primary" size="sm" type="button">
            Small button
          </Button>
          <Button color="secondary" size="sm" type="button">
            Small button
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSizes2}
        </SyntaxHighlighter>
        <p>
          Create block level buttons—those that span the full width of a
          parent—by adding <code className="highlighter-rouge">.btn-block</code>
          .
        </p>
        <div className="ct-example">
          <Button block color="primary" size="lg" type="button">
            Block level button
          </Button>
          <Button block color="secondary" size="lg" type="button">
            Block level button
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSizes3}
        </SyntaxHighlighter>
        <h2 id="active-state">Active state</h2>
        <p>
          Buttons will appear pressed (with a darker background, darker border,
          and inset shadow) when active.{" "}
          <strong>
            There’s no need to add a class to{" "}
            <code className="highlighter-rouge">{`<button>`}</code>s as they use
            a pseudo-class
          </strong>
          . However, you can still force the same active appearance with{" "}
          <code className="highlighter-rouge">.active</code>
          (and include the <code>aria-pressed="true"</code>
          attribute) should you need to replicate the state programmatically.
        </p>
        <div className="ct-example">
          <Button
            aria-pressed={true}
            className="active"
            color="primary"
            href="#pablo"
            onClick={e => e.preventDefault()}
            role="button"
            size="lg"
          >
            Primary link
          </Button>
          <Button
            aria-pressed={true}
            className="active"
            color="secondary"
            href="#pablo"
            onClick={e => e.preventDefault()}
            role="button"
            size="lg"
          >
            Link
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeActiveState}
        </SyntaxHighlighter>
        <h2 id="disabled-state">Disabled state</h2>
        <p>
          Make buttons look inactive by adding the{" "}
          <code className="highlighter-rouge">disabled</code>
          boolean attribute to any{" "}
          <code className="highlighter-rouge">{`<button>`}</code>
          element.
        </p>
        <div className="ct-example">
          <Button color="primary" disabled size="lg" type="button">
            Primary button
          </Button>
          <Button color="secondary" disabled size="lg" type="button">
            Button
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeDisabledState}
        </SyntaxHighlighter>
        <h3 id="examples">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/buttons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap buttons documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Buttons;
