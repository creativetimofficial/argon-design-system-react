import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import { Progress } from "reactstrap";

const codeExample = `import React from "react";
// reactstrap components
import { Progress } from "reactstrap";

class Progresses extends React.Component {
  render() {
    return (
      <>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="default" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="secondary" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="info" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="success" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="danger" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="warning" />
        </div>
      </>
    );
  }
}

export default Progresses;
`;

class Progresses extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Progress
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Documentation and examples for adding custom Bootstrap tooltips with
          CSS and JavaScript using CSS3 for animations and data-attributes for
          local title storage.
        </p>
        <hr />
        <h2 id="example">Example</h2>
        <div className="ct-example">
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span>Task completed</span>
              </div>
              <div className="progress-percentage">
                <span>60%</span>
              </div>
            </div>
            <Progress max="100" value="60" color="default" />
          </div>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span>Task completed</span>
              </div>
              <div className="progress-percentage">
                <span>60%</span>
              </div>
            </div>
            <Progress max="100" value="60" />
          </div>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span>Task completed</span>
              </div>
              <div className="progress-percentage">
                <span>60%</span>
              </div>
            </div>
            <Progress max="100" value="60" color="secondary" />
          </div>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span>Task completed</span>
              </div>
              <div className="progress-percentage">
                <span>60%</span>
              </div>
            </div>
            <Progress max="100" value="60" color="info" />
          </div>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span>Task completed</span>
              </div>
              <div className="progress-percentage">
                <span>60%</span>
              </div>
            </div>
            <Progress max="100" value="60" color="success" />
          </div>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span>Task completed</span>
              </div>
              <div className="progress-percentage">
                <span>60%</span>
              </div>
            </div>
            <Progress max="100" value="60" color="danger" />
          </div>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span>Task completed</span>
              </div>
              <div className="progress-percentage">
                <span>60%</span>
              </div>
            </div>
            <Progress max="100" value="60" color="warning" />
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h3 id="examples">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/progress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap progress documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Progresses;
