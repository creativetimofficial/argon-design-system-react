import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import { Link } from "react-router-dom";

const codeUsage = `import React from "react";
...other code
// core components
...other code
import Sidebar from "components/Sidebar/Sidebar.jsx";
...other code
import routes from "routes.js";
...other code
class Admin extends React.Component {
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("assets/img/brand/argon-react.png"),
            imgAlt: "..."
          }}
        />
      ...other code
      </>
    );
  }
}

export default Admin;`;

const codeProps = `Sidebar.defaultProps = {
  routes: [{}]
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired
  })
};`;

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            App Sidebar
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          This is the left menu that only appears inside the{" "}
          <code className="highlighter-rouge">src/layouts/Admin.jsx</code>.
        </p>
        <hr />
        <h2 id="primary-colors">Short description and usage</h2>
        <p>
          This component has some static and some dynamic stuff rendered inside
          it.
        </p>
        <p>
          The dynamic stuff is rendered via props. The links that appears inside
          it (minus the ones for the documentation - which are static) are
          dynamic. Also, the brand logo is dynamic, and can be rendered as an
          inner link, or an outter link.
        </p>
        <p>
          To see how the links should look like (since they are an object),
          please refer to our{" "}
          <Link to="/documentation/routing-system">routing system</Link>.
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeUsage}
        </SyntaxHighlighter>
        <h2 id="primary-colors">Props</h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeProps}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default Sidebar;
