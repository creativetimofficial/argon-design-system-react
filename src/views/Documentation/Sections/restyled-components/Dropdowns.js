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
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

const codeExamples = `import React from "react";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

class Dropdowns extends React.Component {
  render() {
    return (
      <>
        <UncontrolledDropdown>
          <DropdownToggle caret color="secondary">
            Regular
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Another action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Something else here
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown>
          <DropdownToggle caret color="default">
            <img alt="..." src={require("assets/img/icons/flags/US.png")} />
            Flags
          </DropdownToggle>
          <DropdownMenu>
            <li>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  src={require("assets/img/icons/flags/US.png")}
                />
                Deutsch
              </DropdownItem>
            </li>
            <li>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  src={require("assets/img/icons/flags/GB.png")}
                />
                English(UK)
              </DropdownItem>
            </li>
            <li>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  src={require("assets/img/icons/flags/FR.png")}
                />
                Français
              </DropdownItem>
            </li>
          </DropdownMenu>
        </UncontrolledDropdown>
      </>
    );
  }
}

export default Dropdowns;
`;

const codeColors = `import React from "react";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

class Dropdowns extends React.Component {
  render() {
    return (
      <>
        <UncontrolledDropdown group>
          <DropdownToggle caret color="primary">
            Primary
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Another action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Something else here
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Separated link
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown group>
          <DropdownToggle caret color="secondary">
            Secondary
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Another action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Something else here
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Separated link
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown group>
          <DropdownToggle caret color="success">
            Success
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Another action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Something else here
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Separated link
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown group>
          <DropdownToggle caret color="info">
            Info
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Another action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Something else here
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Separated link
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown group>
          <DropdownToggle caret color="warning">
            Warning
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Another action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Something else here
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Separated link
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown group>
          <DropdownToggle caret color="danger">
            Danger
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Another action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Something else here
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Separated link
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

      </>
    );
  }
}

export default Dropdowns;`;

class Dropdowns extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Dropdowns
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Toggle contextual overlays for displaying lists of links and more with
          the Bootstrap dropdown plugin.
        </p>
        <hr />
        <h2 id="examples">Examples</h2>
        <div className="ct-example bg-white">
          <UncontrolledDropdown>
            <DropdownToggle caret color="secondary">
              Regular
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown>
            <DropdownToggle caret color="default">
              <img alt="..." src={require("assets/img/icons/flags/US.png")} />
              Flags
            </DropdownToggle>
            <DropdownMenu>
              <li>
                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                  <img
                    alt="..."
                    src={require("assets/img/icons/flags/US.png")}
                  />
                  Deutsch
                </DropdownItem>
              </li>
              <li>
                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                  <img
                    alt="..."
                    src={require("assets/img/icons/flags/GB.png")}
                  />
                  English(UK)
                </DropdownItem>
              </li>
              <li>
                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                  <img
                    alt="..."
                    src={require("assets/img/icons/flags/FR.png")}
                  />
                  Français
                </DropdownItem>
              </li>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamples}
        </SyntaxHighlighter>
        <h2 id="colors">Colors</h2>
        <p>The best part is you can do this with any button variant, too:</p>
        <div className="ct-example bg-white">
          <UncontrolledDropdown group>
            <DropdownToggle caret color="primary">
              Primary
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown group>
            <DropdownToggle caret color="secondary">
              Secondary
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown group>
            <DropdownToggle caret color="success">
              Success
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown group>
            <DropdownToggle caret color="info">
              Info
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown group>
            <DropdownToggle caret color="warning">
              Warning
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown group>
            <DropdownToggle caret color="danger">
              Danger
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeColors}
        </SyntaxHighlighter>
        <h3 id="examples">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/dropdowns/?ref=creativetim"
            target="_blank"
          >
            reactstrap dropdowns documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Dropdowns;
