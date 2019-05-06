import React from "react";

// reactstrap components
import { Progress, Col } from "reactstrap";

class ProgressSection extends React.Component {
  render() {
    return (
      <>
        <Col lg="5">
          <h3 className="h4 text-success font-weight-bold mb-4">
            Progress bars
          </h3>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span>Task completed</span>
              </div>
              <div className="progress-percentage">
                <span>40%</span>
              </div>
            </div>
            <Progress max="100" value="25" color="default" />
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
        </Col>
      </>
    );
  }
}

export default ProgressSection;
