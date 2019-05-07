import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

class Variables extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Variables
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          To make our demo pages (pages found in{" "}
          <code className="highlighter-rouge">src/views/{`*`}</code>) a bit more
          easy to understand and to have less code, we've created some special
          files with variables, variables which we import where we need them.
        </p>
        <hr />
        <p />
        <p>
          You will find all the variables regarding the charts in{" "}
          <code className="highlighter-rouge">src/variables/charts.jsx</code>.
        </p>
        <p>
          At the end of this file, you will find the exports with comments for
          you to know where each variables is used.
        </p>
        <p>To use any of these variables you need to import them like so:</p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { variableName } from 'variables/charts.jsx';`}</SyntaxHighlighter>
      </>
    );
  }
}

export default Variables;
