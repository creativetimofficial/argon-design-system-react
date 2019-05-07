import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Sidebar from "./Sidebar/Sidebar.jsx";
import Header from "./Header/Header.jsx";

import docRoutes from "documentation.js";

class Documentation extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("docs");
    document.documentElement.classList.toggle("ct-react-docs");
  }
  componentWillUnmount() {
    document.body.classList.toggle("docs");
    document.documentElement.classList.toggle("ct-react-docs");
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <Container fluid>
          <Row className="flex-xl-nowrap">
            <Col xs={12} md={3} xl={2} className="ct-sidebar">
              <Sidebar {...this.props} />
            </Col>
            <Col
              xs={12}
              md={9}
              xl={8}
              className="py-md-3 pl-md-5 ct-content"
              tag="main"
            >
              <Switch>
                {docRoutes.map((prop, key) => {
                  if (prop.redirect)
                    return (
                      <Redirect from={prop.path} to={prop.pathTo} key={key} />
                    );
                  return prop.routes.map((p, k) => {
                    return (
                      <Route path={p.path} component={p.component} key={k} />
                    );
                  });
                })}
              </Switch>
            </Col>
            <Col xl={2} className="d-none d-xl-block ct-toc" />
          </Row>
        </Container>
      </>
    );
  }
}

export default Documentation;
