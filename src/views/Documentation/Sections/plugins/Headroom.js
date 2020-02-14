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
/*eslint-disable*/
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
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Headroom
          </h1>
        </div>
        <div className="avatar-group mt-3" />
        <p className="ct-lead">
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
          <a href="https://wicky.nillia.ms/headroom.js/" target="_blank">
            headrooms's documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default HeadroomDocs;
