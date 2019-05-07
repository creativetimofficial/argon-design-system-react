import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeSample = `import React from "react";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

class HeadroomSample extends React.Component {
  ...
  componentDidMount() {
    // note that the domElement should be a valid dom element
    // something like document.getElementById("my-id")
    let headroom = new Headroom(domElement);
    // initialise
    headroom.init();
  }
  ...
}

export default HeadroomSample;
`;

class HeadroomDocs extends React.Component {
  render() {
    return (
      <>
        <div class="ct-page-title">
          <h1 class="ct-title" id="content">
            Headroom
          </h1>
        </div>
        <div class="avatar-group mt-3" />
        <p class="ct-lead">
          Give your pages some headroom. Hide your header until you need it.
        </p>
        <hr />
        <h2 id="usage">
          <div>Usage and Initialization</div>
        </h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSample}
        </SyntaxHighlighter>
        <h3 id="initialization">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://wicky.nillia.ms/headroom.js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            headrooms's documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default HeadroomDocs;
