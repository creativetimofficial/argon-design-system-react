import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Table,
  UncontrolledTooltip
} from "reactstrap";

const codeExamples = `import React from "react";
// reactstrap components
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Table,
  UncontrolledTooltip
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <Table className="align-items-center" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">Project</th>
              <th scope="col">Budget</th>
              <th scope="col">Status</th>
              <th scope="col">Users</th>
              <th scope="col">Completion</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/bootstrap.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      Argon Design System
                    </span>
                  </Media>
                </Media>
              </th>
              <td>$2,500 USD</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i className="bg-warning" />
                  pending
                </Badge>
              </td>
              <td>
                <div className="avatar-group">
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip742438047"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip742438047"
                  >
                    Ryan Tompson
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip941738690"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip941738690"
                  >
                    Romina Hadid
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip804044742"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip804044742"
                  >
                    Alexander Smith
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip996637554"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip996637554"
                  >
                    Jessica Doe
                  </UncontrolledTooltip>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">60%</span>
                  <div>
                    <Progress
                      max="100"
                      value="60"
                      barClassName="bg-danger"
                    />
                  </div>
                </div>
              </td>
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/angular.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      Angular Now UI Kit PRO
                    </span>
                  </Media>
                </Media>
              </th>
              <td>$1,800 USD</td>
              <td>
                <Badge color="" className="badge-dot">
                  <i className="bg-success" />
                  completed
                </Badge>
              </td>
              <td>
                <div className="avatar-group">
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip746418347"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip746418347"
                  >
                    Ryan Tompson
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip102182364"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip102182364"
                  >
                    Romina Hadid
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip406489510"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip406489510"
                  >
                    Alexander Smith
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip476840018"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip476840018"
                  >
                    Jessica Doe
                  </UncontrolledTooltip>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">100%</span>
                  <div>
                    <Progress
                      max="100"
                      value="100"
                      barClassName="bg-success"
                    />
                  </div>
                </div>
              </td>
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/sketch.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      Black Dashboard
                    </span>
                  </Media>
                </Media>
              </th>
              <td>$3,150 USD</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i className="bg-danger" />
                  delayed
                </Badge>
              </td>
              <td>
                <div className="avatar-group">
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip753056318"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip753056318"
                  >
                    Ryan Tompson
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip441753266"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip441753266"
                  >
                    Romina Hadid
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip188462246"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip188462246"
                  >
                    Alexander Smith
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip621168444"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip621168444"
                  >
                    Jessica Doe
                  </UncontrolledTooltip>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">72%</span>
                  <div>
                    <Progress
                      max="100"
                      value="72"
                      barClassName="bg-danger"
                    />
                  </div>
                </div>
              </td>
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/react.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      React Material Dashboard
                    </span>
                  </Media>
                </Media>
              </th>
              <td>$4,400 USD</td>
              <td>
                <Badge color="" className="badge-dot">
                  <i className="bg-info" />
                  on schedule
                </Badge>
              </td>
              <td>
                <div className="avatar-group">
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip875258217"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip875258217"
                  >
                    Ryan Tompson
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip834416663"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip834416663"
                  >
                    Romina Hadid
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip372449339"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip372449339"
                  >
                    Alexander Smith
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip108714769"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip108714769"
                  >
                    Jessica Doe
                  </UncontrolledTooltip>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">90%</span>
                  <div>
                    <Progress
                      max="100"
                      value="90"
                      barClassName="bg-info"
                    />
                  </div>
                </div>
              </td>
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/vue.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      Vue Paper UI Kit PRO
                    </span>
                  </Media>
                </Media>
              </th>
              <td>$2,200 USD</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i className="bg-success" />
                  completed
                </Badge>
              </td>
              <td>
                <div className="avatar-group">
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip664029969"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip664029969"
                  >
                    Ryan Tompson
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip806693074"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip806693074"
                  >
                    Romina Hadid
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip844096937"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip844096937"
                  >
                    Alexander Smith
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip757459971"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip757459971"
                  >
                    Jessica Doe
                  </UncontrolledTooltip>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">100%</span>
                  <div>
                    <Progress
                      max="100"
                      value="100"
                      barClassName="bg-success"
                    />
                  </div>
                </div>
              </td>
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default Tables`;

const codeDarkTable = `import React from "react";
// reactstrap components
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Table,
  UncontrolledTooltip
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <Table
          className="align-items-center table-dark"
          responsive
        >
          <thead className="thead-dark">
            <tr>
              <th scope="col">Project</th>
              <th scope="col">Budget</th>
              <th scope="col">Status</th>
              <th scope="col">Users</th>
              <th scope="col">Completion</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/bootstrap.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      Argon Design System
                    </span>
                  </Media>
                </Media>
              </th>
              <td>$2,500 USD</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i className="bg-warning" />
                  pending
                </Badge>
              </td>
              <td>
                <div className="avatar-group">
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip731399078"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip731399078"
                  >
                    Ryan Tompson
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip491083084"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip491083084"
                  >
                    Romina Hadid
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip528540780"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip528540780"
                  >
                    Alexander Smith
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip237898869"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip237898869"
                  >
                    Jessica Doe
                  </UncontrolledTooltip>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">60%</span>
                  <div>
                    <Progress
                      max="100"
                      value="60"
                      barClassName="bg-warning"
                    />
                  </div>
                </div>
              </td>
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/angular.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      Angular Now UI Kit PRO
                    </span>
                  </Media>
                </Media>
              </th>
              <td>$1,800 USD</td>
              <td>
                <Badge color="" className="badge-dot">
                  <i className="bg-success" />
                  completed
                </Badge>
              </td>
              <td>
                <div className="avatar-group">
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip188614932"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip188614932"
                  >
                    Ryan Tompson
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip66535734"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip66535734"
                  >
                    Romina Hadid
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip427561578"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip427561578"
                  >
                    Alexander Smith
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip904098289"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip904098289"
                  >
                    Jessica Doe
                  </UncontrolledTooltip>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">100%</span>
                  <div>
                    <Progress
                      max="100"
                      value="100"
                      barClassName="bg-success"
                    />
                  </div>
                </div>
              </td>
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/sketch.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      Black Dashboard
                    </span>
                  </Media>
                </Media>
              </th>
              <td>$3,150 USD</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i className="bg-danger" />
                  delayed
                </Badge>
              </td>
              <td>
                <div className="avatar-group">
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip707904950"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip707904950"
                  >
                    Ryan Tompson
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip353988222"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip353988222"
                  >
                    Romina Hadid
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip467171202"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip467171202"
                  >
                    Alexander Smith
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip362118155"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip362118155"
                  >
                    Jessica Doe
                  </UncontrolledTooltip>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">72%</span>
                  <div>
                    <Progress
                      max="100"
                      value="72"
                      barClassName="bg-danger"
                    />
                  </div>
                </div>
              </td>
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/react.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      React Material Dashboard
                    </span>
                  </Media>
                </Media>
              </th>
              <td>$4,400 USD</td>
              <td>
                <Badge color="" className="badge-dot">
                  <i className="bg-info" />
                  on schedule
                </Badge>
              </td>
              <td>
                <div className="avatar-group">
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip226319315"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip226319315"
                  >
                    Ryan Tompson
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip711961370"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip711961370"
                  >
                    Romina Hadid
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip216246707"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip216246707"
                  >
                    Alexander Smith
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip638048561"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip638048561"
                  >
                    Jessica Doe
                  </UncontrolledTooltip>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">90%</span>
                  <div>
                    <Progress
                      max="100"
                      value="90"
                      barClassName="bg-info"
                    />
                  </div>
                </div>
              </td>
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/theme/vue.jpg")}
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      Vue Paper UI Kit PRO
                    </span>
                  </Media>
                </Media>
              </th>
              <td>$2,200 USD</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i className="bg-success" />
                  completed
                </Badge>
              </td>
              <td>
                <div className="avatar-group">
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip781594051"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip781594051"
                  >
                    Ryan Tompson
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip840372212"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip840372212"
                  >
                    Romina Hadid
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip497647175"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip497647175"
                  >
                    Alexander Smith
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip951447946"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip951447946"
                  >
                    Jessica Doe
                  </UncontrolledTooltip>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">100%</span>
                  <div>
                    <Progress
                      max="100"
                      value="100"
                      barClassName="bg-danger"
                    />
                  </div>
                </div>
              </td>
              <td className="text-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default Tables`;

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Tables
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Documentation and examples for opt-in styling of tables (given their
          prevalent use in JavaScript plugins) with Bootstrap.
        </p>
        <hr />
        <h3 id="examples">Examples</h3>
        <div className="ct-example">
          <Table className="align-items-center" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Project</th>
                <th scope="col">Budget</th>
                <th scope="col">Status</th>
                <th scope="col">Users</th>
                <th scope="col">Completion</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/bootstrap.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">Argon Design System</span>
                    </Media>
                  </Media>
                </th>
                <td>$2,500 USD</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-warning" />
                    pending
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip742438047"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip742438047">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip941738690"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip941738690">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip804044742"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip804044742">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip996637554"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip996637554">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">60%</span>
                    <div>
                      <Progress max="100" value="60" barClassName="bg-danger" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/angular.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">
                        Angular Now UI Kit PRO
                      </span>
                    </Media>
                  </Media>
                </th>
                <td>$1,800 USD</td>
                <td>
                  <Badge color="" className="badge-dot">
                    <i className="bg-success" />
                    completed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip746418347"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip746418347">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip102182364"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip102182364">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip406489510"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip406489510">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip476840018"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip476840018">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">100%</span>
                    <div>
                      <Progress
                        max="100"
                        value="100"
                        barClassName="bg-success"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/sketch.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">Black Dashboard</span>
                    </Media>
                  </Media>
                </th>
                <td>$3,150 USD</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-danger" />
                    delayed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip753056318"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip753056318">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip441753266"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip441753266">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip188462246"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip188462246">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip621168444"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip621168444">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">72%</span>
                    <div>
                      <Progress max="100" value="72" barClassName="bg-danger" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/react.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">
                        React Material Dashboard
                      </span>
                    </Media>
                  </Media>
                </th>
                <td>$4,400 USD</td>
                <td>
                  <Badge color="" className="badge-dot">
                    <i className="bg-info" />
                    on schedule
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip875258217"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip875258217">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip834416663"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip834416663">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip372449339"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip372449339">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip108714769"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip108714769">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">90%</span>
                    <div>
                      <Progress max="100" value="90" barClassName="bg-info" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/vue.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">Vue Paper UI Kit PRO</span>
                    </Media>
                  </Media>
                </th>
                <td>$2,200 USD</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-success" />
                    completed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip664029969"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip664029969">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip806693074"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip806693074">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip844096937"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip844096937">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip757459971"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip757459971">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">100%</span>
                    <div>
                      <Progress
                        max="100"
                        value="100"
                        barClassName="bg-success"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamples}
        </SyntaxHighlighter>
        <h3 id="dark-table">Dark table</h3>
        <div className="ct-example">
          <Table className="align-items-center table-dark" responsive>
            <thead className="thead-dark">
              <tr>
                <th scope="col">Project</th>
                <th scope="col">Budget</th>
                <th scope="col">Status</th>
                <th scope="col">Users</th>
                <th scope="col">Completion</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/bootstrap.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">Argon Design System</span>
                    </Media>
                  </Media>
                </th>
                <td>$2,500 USD</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-warning" />
                    pending
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip731399078"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip731399078">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip491083084"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip491083084">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip528540780"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip528540780">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip237898869"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip237898869">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">60%</span>
                    <div>
                      <Progress
                        max="100"
                        value="60"
                        barClassName="bg-warning"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/angular.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">
                        Angular Now UI Kit PRO
                      </span>
                    </Media>
                  </Media>
                </th>
                <td>$1,800 USD</td>
                <td>
                  <Badge color="" className="badge-dot">
                    <i className="bg-success" />
                    completed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip188614932"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip188614932">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip66535734"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip66535734">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip427561578"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip427561578">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip904098289"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip904098289">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">100%</span>
                    <div>
                      <Progress
                        max="100"
                        value="100"
                        barClassName="bg-success"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/sketch.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">Black Dashboard</span>
                    </Media>
                  </Media>
                </th>
                <td>$3,150 USD</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-danger" />
                    delayed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip707904950"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip707904950">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip353988222"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip353988222">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip467171202"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip467171202">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip362118155"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip362118155">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">72%</span>
                    <div>
                      <Progress max="100" value="72" barClassName="bg-danger" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/react.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">
                        React Material Dashboard
                      </span>
                    </Media>
                  </Media>
                </th>
                <td>$4,400 USD</td>
                <td>
                  <Badge color="" className="badge-dot">
                    <i className="bg-info" />
                    on schedule
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip226319315"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip226319315">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip711961370"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip711961370">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip216246707"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip216246707">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip638048561"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip638048561">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">90%</span>
                    <div>
                      <Progress max="100" value="90" barClassName="bg-info" />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Media className="align-items-center">
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/vue.jpg")}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">Vue Paper UI Kit PRO</span>
                    </Media>
                  </Media>
                </th>
                <td>$2,200 USD</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-success" />
                    completed
                  </Badge>
                </td>
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip781594051"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip781594051">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip840372212"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip840372212">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip497647175"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip497647175">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip951447946"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip951447946">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">100%</span>
                    <div>
                      <Progress
                        max="100"
                        value="100"
                        barClassName="bg-danger"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeDarkTable}
        </SyntaxHighlighter>
        <h3 id="examples">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/tables/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap tables documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Tables;
