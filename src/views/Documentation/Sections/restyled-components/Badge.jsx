import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import { Badge, Button } from "reactstrap";

const codeExample = `import React from "react";
// reactstrap components
import { Badge, Button } from "reactstrap";

class Badges extends React.Component {
  render() {
    return (
      <>
        <Button color="primary" type="button">
          <span>Notifications</span>
          <Badge className="badge-white">4</Badge>
        </Button>
      </>
    );
  }
}

export default Badges;
`;

const codeContextualVariations = `import React from "react";
// reactstrap components
import { Badge } from "reactstrap";

class Badges extends React.Component {
  render() {
    return (
      <>
        <Badge className="badge-default">Default</Badge>
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="warning">Warning</Badge>
      </>
    );
  }
}

export default Badges;
`;

const codePillBadges = `import React from "react";
// reactstrap components
import { Badge } from "reactstrap";

class Badges extends React.Component {
  render() {
    return (
      <>
        <Badge className="badge-default" pill>
          Default
        </Badge>
        <Badge color="primary" pill>
          Primary
        </Badge>
        <Badge color="secondary" pill>
          Secondary
        </Badge>
        <Badge color="info" pill>
          Info
        </Badge>
        <Badge color="success" pill>
          Success
        </Badge>
        <Badge color="danger" pill>
          Danger
        </Badge>
        <Badge color="warning" pill>
          Warning
        </Badge>
      </>
    );
  }
}

export default Badges;
`;

const codeLinks = `import React from "react";
// reactstrap components
import { Badge } from "reactstrap";

class Badges extends React.Component {
  render() {
    return (
      <>
        <Badge
          className="badge-default"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          Default
        </Badge>
        <Badge
          color="primary"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          Primary
        </Badge>
        <Badge
          color="secondary"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          Secondary
        </Badge>
        <Badge color="info" href="#pablo" onClick={e => e.preventDefault()}>
          Info
        </Badge>
        <Badge
          color="success"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          Success
        </Badge>
        <Badge color="danger" href="#pablo" onClick={e => e.preventDefault()}>
          Danger
        </Badge>
        <Badge
          color="warning"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          Warning
        </Badge>
      </>
    );
  }
}

export default Badges;
`;

class Badges extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Badges
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Documentation and examples for badges, our small count and labeling
          component.
        </p>
        <hr />
        <h2 id="example">Example</h2>
        <p>
          Badges can be used as part of links or buttons to provide a counter.
        </p>
        <div className="ct-example">
          <Button color="primary" type="button">
            <span>Notifications</span>
            <Badge className="badge-white">4</Badge>
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h2 id="contextual-variations">Contextual variations</h2>
        <p>
          Add any of the below mentioned modifier classes to change the
          appearance of a badge.
        </p>
        <div className="ct-example">
          <Badge className="badge-default">Default</Badge>
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary">Secondary</Badge>
          <Badge color="info">Info</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="danger">Danger</Badge>
          <Badge color="warning">Warning</Badge>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeContextualVariations}
        </SyntaxHighlighter>
        <h2 id="pill-badges">Pill badges</h2>
        <p>
          Use the <code className="highlighter-rouge">.badge-pill</code>
          modifier class to make badges more rounded (with a larger{" "}
          <code className="highlighter-rouge">border-radius</code>
          and additional horizontal{" "}
          <code className="highlighter-rouge">padding</code>
          ). Useful if you miss the badges from v3.
        </p>
        <div className="ct-example">
          <Badge className="badge-default" pill>
            Default
          </Badge>
          <Badge color="primary" pill>
            Primary
          </Badge>
          <Badge color="secondary" pill>
            Secondary
          </Badge>
          <Badge color="info" pill>
            Info
          </Badge>
          <Badge color="success" pill>
            Success
          </Badge>
          <Badge color="danger" pill>
            Danger
          </Badge>
          <Badge color="warning" pill>
            Warning
          </Badge>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePillBadges}
        </SyntaxHighlighter>
        <h2 id="links">Links</h2>
        <p>
          Using the contextual{" "}
          <code className="highlighter-rouge">.badge-*</code>
          classes on an <code className="highlighter-rouge">{`<a>`}</code>
          element quickly provide <em>actionable</em>
          badges with hover and focus states.
        </p>
        <div className="ct-example">
          <Badge
            className="badge-default"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Default
          </Badge>
          <Badge
            color="primary"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Primary
          </Badge>
          <Badge
            color="secondary"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Secondary
          </Badge>
          <Badge color="info" href="#pablo" onClick={e => e.preventDefault()}>
            Info
          </Badge>
          <Badge
            color="success"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Success
          </Badge>
          <Badge color="danger" href="#pablo" onClick={e => e.preventDefault()}>
            Danger
          </Badge>
          <Badge
            color="warning"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Warning
          </Badge>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeLinks}
        </SyntaxHighlighter>
        <h3 id="examples">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/badge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap badges documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Badges;
