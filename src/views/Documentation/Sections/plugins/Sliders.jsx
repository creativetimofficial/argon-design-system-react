import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// plugin that creates slider
import Slider from "nouislider";

const codeSlider = `import React from "react";
// plugin that creates slider
import Slider from "nouislider";

class Sliders extends React.Component {
  componentDidMount() {
    var slider1 = this.refs.slider1;
    Slider.create(slider1, {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
  }
  render() {
    return (
      <>
        <div className="slider" ref="slider1" />
      </>
    );
  }
}

export default Sliders;
`;

const codeRangeSlider = `import React from "react";
// plugin that creates slider
import Slider from "nouislider";

class Sliders extends React.Component {
  componentDidMount() {
    var slider2 = this.refs.slider2;
    Slider.create(slider2, {
      start: [20, 60],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
  }
  render() {
    return (
      <>
        <div className="slider" ref="slider2" />
      </>
    );
  }
}

export default Sliders;
`;

class Sliders extends React.Component {
  componentDidMount() {
    var slider1 = this.refs.slider1;
    var slider2 = this.refs.slider2;
    Slider.create(slider1, {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
    Slider.create(slider2, {
      start: [20, 60],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
  }
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            noUiSlider v13.1.1
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Our customized noUiSlider is a lightweight JavaScript range slider
          library. It offers a wide selection of options and settings, and is
          compatible with a ton of (touch) devices, including those running iOS,
          Android, Windows 8/8.1/10, Windows Phone 8.1 and Windows Mobile 10.
        </p>
        <hr />
        <h2 id="slider">Slider</h2>
        <div className="ct-example">
          <div className="slider" ref="slider1" />
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSlider}
        </SyntaxHighlighter>
        <h2 id="range-slider">Range slider</h2>
        <div className="ct-example">
          <div className="slider" ref="slider2" />
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeRangeSlider}
        </SyntaxHighlighter>
        <h3 id="initialization">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://refreshless.com/nouislider/"
            target="_blank"
            rel="noopener noreferrer"
          >
            noislider's documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Sliders;
