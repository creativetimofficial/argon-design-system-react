import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

const codeNavPills = `import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Navs extends React.Component {
  state = {
    navPills: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <Nav
          className="nav-fill flex-column flex-sm-row"
          id="tabs-text"
          pills
          role="tablist"
        >
          <NavItem>
            <NavLink
              aria-selected={this.state.navPills === 1}
              className={classnames("mb-sm-3 mb-md-0", {
                active: this.state.navPills === 1
              })}
              onClick={e => this.toggleNavs(e, "navPills", 1)}
              href="#pablo"
              role="tab"
            >
              UI/UX Design
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.navPills === 2}
              className={classnames("mb-sm-3 mb-md-0", {
                active: this.state.navPills === 2
              })}
              onClick={e => this.toggleNavs(e, "navPills", 2)}
              href="#pablo"
              role="tab"
            >
              Programming
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.navPills === 3}
              className={classnames("mb-sm-3 mb-md-0", {
                active: this.state.navPills === 3
              })}
              onClick={e => this.toggleNavs(e, "navPills", 3)}
              href="#pablo"
              role="tab"
            >
              Graphic
            </NavLink>
          </NavItem>
        </Nav>
      </>
    );
  }
}

export default Navs;
`;

const codeCircledNavPills = `import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Navs extends React.Component {
  state = {
    circledNavPills: 3
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <Nav className="nav-pills-circle" id="tabs_2" pills role="tablist">
          <NavItem>
            <NavLink
              aria-selected={this.state.circledNavPills === 1}
              className={classnames("rounded-circle", {
                active: this.state.circledNavPills === 1
              })}
              onClick={e => this.toggleNavs(e, "circledNavPills", 1)}
              href="#pablo"
              role="tab"
            >
              <span className="nav-link-icon d-block">
                <i className="ni ni-atom" />
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.circledNavPills === 2}
              className={classnames("rounded-circle", {
                active: this.state.circledNavPills === 2
              })}
              onClick={e => this.toggleNavs(e, "circledNavPills", 2)}
              href="#pablo"
              role="tab"
            >
              <span className="nav-link-icon d-block">
                <i className="ni ni-chat-round" />
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              aria-selected={this.state.circledNavPills === 3}
              className={classnames("rounded-circle", {
                active: this.state.circledNavPills === 3
              })}
              onClick={e => this.toggleNavs(e, "circledNavPills", 3)}
              href="#pablo"
              role="tab"
            >
              <span className="nav-link-icon d-block">
                <i className="ni ni-cloud-download-95" />
              </span>
            </NavLink>
          </NavItem>
        </Nav>
      </>
    );
  }
}

export default Navs;
`;

const codeTabs = `import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Navs extends React.Component {
  state = {
    tabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 1
                })}
                onClick={e => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-cloud-upload-96 mr-2" />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 2
                })}
                onClick={e => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-bell-55 mr-2" />
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 3
                })}
                onClick={e => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-calendar-grid-58 mr-2" />
                Messages
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <p className="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth.
                </p>
                <p className="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse.
                </p>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                  Cosby sweater eu banh mi, qui irure terry richardson ex
                  squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                  quis cardigan american apparel, butcher voluptate nisi qui.
                </p>
              </TabPane>
              <TabPane tabId="tabs3">
                <p className="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth.
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Navs;
`;

class Navs extends React.Component {
  state = {
    navPills: 1,
    circledNavPills: 3,
    tabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Modal
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Documentation and examples for how to use Bootstrap’s included
          navigation components.
        </p>
        <hr />
        <h3 id="nav-pills">Nav pills</h3>
        <div className="ct-example">
          <Nav
            className="nav-fill flex-column flex-sm-row"
            id="tabs-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={this.state.navPills === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.navPills === 1
                })}
                onClick={e => this.toggleNavs(e, "navPills", 1)}
                href="#pablo"
                role="tab"
              >
                UI/UX Design
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.navPills === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.navPills === 2
                })}
                onClick={e => this.toggleNavs(e, "navPills", 2)}
                href="#pablo"
                role="tab"
              >
                Programming
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.navPills === 3}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.navPills === 3
                })}
                onClick={e => this.toggleNavs(e, "navPills", 3)}
                href="#pablo"
                role="tab"
              >
                Graphic
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeNavPills}
        </SyntaxHighlighter>
        <h2 id="circled-nav-pills">Circled nav pills</h2>
        <div className="ct-example">
          <Nav className="nav-pills-circle" id="tabs_2" pills role="tablist">
            <NavItem>
              <NavLink
                aria-selected={this.state.circledNavPills === 1}
                className={classnames("rounded-circle", {
                  active: this.state.circledNavPills === 1
                })}
                onClick={e => this.toggleNavs(e, "circledNavPills", 1)}
                href="#pablo"
                role="tab"
              >
                <span className="nav-link-icon d-block">
                  <i className="ni ni-atom" />
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.circledNavPills === 2}
                className={classnames("rounded-circle", {
                  active: this.state.circledNavPills === 2
                })}
                onClick={e => this.toggleNavs(e, "circledNavPills", 2)}
                href="#pablo"
                role="tab"
              >
                <span className="nav-link-icon d-block">
                  <i className="ni ni-chat-round" />
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.circledNavPills === 3}
                className={classnames("rounded-circle", {
                  active: this.state.circledNavPills === 3
                })}
                onClick={e => this.toggleNavs(e, "circledNavPills", 3)}
                href="#pablo"
                role="tab"
              >
                <span className="nav-link-icon d-block">
                  <i className="ni ni-cloud-download-95" />
                </span>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeCircledNavPills}
        </SyntaxHighlighter>
        <h2 id="tabs">Tabs</h2>
        <div className="ct-example">
          <div className="nav-wrapper">
            <Nav
              className="nav-fill flex-column flex-md-row"
              id="tabs-icons-text"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  aria-selected={this.state.tabs === 1}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: this.state.tabs === 1
                  })}
                  onClick={e => this.toggleNavs(e, "tabs", 1)}
                  href="#pablo"
                  role="tab"
                >
                  <i className="ni ni-cloud-upload-96 mr-2" />
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={this.state.tabs === 2}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: this.state.tabs === 2
                  })}
                  onClick={e => this.toggleNavs(e, "tabs", 2)}
                  href="#pablo"
                  role="tab"
                >
                  <i className="ni ni-bell-55 mr-2" />
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={this.state.tabs === 3}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: this.state.tabs === 3
                  })}
                  onClick={e => this.toggleNavs(e, "tabs", 3)}
                  href="#pablo"
                  role="tab"
                >
                  <i className="ni ni-calendar-grid-58 mr-2" />
                  Messages
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <Card className="shadow">
            <CardBody>
              <TabContent activeTab={"tabs" + this.state.tabs}>
                <TabPane tabId="tabs1">
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse.
                  </p>
                </TabPane>
                <TabPane tabId="tabs2">
                  <p className="description">
                    Cosby sweater eu banh mi, qui irure terry richardson ex
                    squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                    quis cardigan american apparel, butcher voluptate nisi qui.
                  </p>
                </TabPane>
                <TabPane tabId="tabs3">
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeTabs}
        </SyntaxHighlighter>
        <h3 id="examples">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/navs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap navs documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Navs;
