/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Badge, Col } from "reactstrap";

class Labels extends React.Component {
  render() {
    return (
      <>
        <Col lg="5">
          <h3 className="h4 text-success font-weight-bold mb-5">Labels</h3>
          <Badge className="text-uppercase" color="primary" pill>
            Primary
          </Badge>
          <Badge className="text-uppercase" color="success" pill>
            Success
          </Badge>
          <Badge className="text-uppercase" color="danger" pill>
            Danger
          </Badge>
          <Badge className="text-uppercase" color="warning" pill>
            Warning
          </Badge>
          <Badge className="text-uppercase" color="info" pill>
            Info
          </Badge>
        </Col>
      </>
    );
  }
}

export default Labels;
