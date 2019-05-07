import React from "react";
import { Nav } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";

import docRoutes from "documentation.js";

class Sidebar extends React.Component {
  render() {
    return (
      <nav className="collapse ct-links" id="ct-docs-nav">
        {docRoutes.map((prop, key) => {
          if (prop.redirect) {
            return null;
          }
          return (
            <div className="ct-toc-item active" key={key}>
              <Link to={prop.path} className="ct-toc-link">
                {prop.name}
              </Link>
              <Nav className="ct-sidenav">
                {prop.routes.map((p, k) => {
                  return (
                    <li
                      key={k}
                      className={classnames({
                        "active ct-sidenav-active":
                          this.props.location.pathname.indexOf(p.path) !== -1
                      })}
                    >
                      <Link to={p.path}>{p.name}</Link>
                    </li>
                  );
                })}
              </Nav>
            </div>
          );
        })}
      </nav>
    );
  }
}

export default Sidebar;
