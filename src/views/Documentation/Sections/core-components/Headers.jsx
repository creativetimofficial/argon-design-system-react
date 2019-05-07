import React from "react";

class PageHeader extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Demo Headers
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          In our template product, we have two demo headers that can be found
          inside{" "}
          <code className="highlighter-rouge">
            src/components/Headers/Header.jsx
          </code>{" "}
          and{" "}
          <code className="highlighter-rouge">
            src/components/Headers/UserHeader.jsx
          </code>
          .
        </p>
        <h2 id="content">
          <code className="highlighter-rouge">
            src/components/Headers/Header.jsx
          </code>
        </h2>
        <p>
          It is used to create the component on which the{" "}
          <code className="highlighter-rouge">
            src/components/Navbars/AdminNavbar.jsx
          </code>{" "}
          sits on top of and it has four stats cards.
        </p>
        <h2 id="content">
          <code className="highlighter-rouge">
            src/components/Headers/UserHeader.jsx
          </code>
        </h2>
        <p>
          It is used to create the component on which the{" "}
          <code className="highlighter-rouge">
            src/components/Navbars/AdminNavbar.jsx
          </code>{" "}
          sits on top of inside the{" "}
          <code className="highlighter-rouge">
            src/views/examples/Profile.jsx
          </code>
          .
        </p>
      </>
    );
  }
}

export default PageHeader;
