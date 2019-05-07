import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import { Card, CardBody } from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.jsx";

const codeExample = `import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import { Card, CardBody } from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample2
} from "variables/charts.jsx";

class Charts extends React.Component {
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <Card>
          <CardBody>
            <div className="chart">
              {/* Chart wrapper */}
              <Bar
                data={chartExample2.data}
                options={chartExample2.options}
              />
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Charts;
`;

const codeDarkCardWithChart = `import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import { Card, CardBody } from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1
} from "variables/charts.jsx";

class Charts extends React.Component {
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <Card className="bg-default">
          <CardBody>
            <div className="chart">
              {/* Chart wrapper */}
              <Line
                data={chartExample1.data1}
                options={chartExample1.options}
                getDatasetAtEvent={e => console.log(e)}
              />
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Charts;
`;

class Charts extends React.Component {
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            React wrapper (v2.7.4) for Chart.js (v2.7.3)
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Simple yet flexible React charting for designers &amp; developers.
          Made by{" "}
          <a
            href="https://github.com/jerairrest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jeremy Ayerst
          </a>{" "}
          over the{" "}
          <a
            href="https://www.chartjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Charts.js
          </a>{" "}
          Javascript plugin. Please check the{" "}
          <a
            href="https://www.chartjs.org/docs/latest/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Charts.js full documentation
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/jerairrest/react-chartjs-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-chartjs-2 full documentation
          </a>
          .
        </p>
        <hr />
        <h2 id="example">Example</h2>
        <div className="ct-example">
          <Card>
            <CardBody>
              <div className="chart">
                {/* Chart wrapper */}
                <Bar
                  data={chartExample2.data}
                  options={chartExample2.options}
                />
              </div>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h2 id="dark-card-with-chart">Dark card with chart</h2>
        <div className="ct-example">
          <Card className="bg-default">
            <CardBody>
              <div className="chart">
                {/* Chart wrapper */}
                <Line
                  data={chartExample1.data1}
                  options={chartExample1.options}
                  getDatasetAtEvent={e => console.log(e)}
                />
              </div>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeDarkCardWithChart}
        </SyntaxHighlighter>
        <h3 id="examples">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="http://jerairrest.github.io/react-chartjs-2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-chartjs-2 documentation
          </a>{" "}
          or{" "}
          <a
            href="https://www.chartjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            chart.js documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Charts;
