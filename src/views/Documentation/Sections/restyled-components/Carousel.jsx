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

import { UncontrolledCarousel } from "reactstrap";

const codeExample = `import React from "react";

import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/img-1-1200x1000.jpg"),
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: require("assets/img/theme/img-2-1200x1000.jpg"),
    altText: '',
    caption: '',
    header: ''
  }
];

class Carousels extends React.Component {
  render() {
    return (
      <>
        <UncontrolledCarousel items={items} />
      </>
    );
  }
}

export default Carousels;
`;

const items = [
  {
    src: require("assets/img/theme/img-1-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/img-2-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousels extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Carousel
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          A slideshow component for cycling through elements—images or slides of
          text—like a carousel.
        </p>
        <hr />
        <h2 id="example">Example</h2>
        <UncontrolledCarousel items={items} />
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h3 id="examples">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/carousel/?ref=creativetim"
            target="_blank"
          >
            reactstrap carousel documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Carousels;
