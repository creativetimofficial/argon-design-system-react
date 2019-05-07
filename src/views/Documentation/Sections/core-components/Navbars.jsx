import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Demo navbars
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          In our template product, we have two demo navbars that can be found
          inside{" "}
          <code className="highlighter-rouge">
            src/components/Navbars/AdminNavbar.jsx
          </code>{" "}
          and{" "}
          <code className="highlighter-rouge">
            src/components/Navbars/AuthNavbar.jsx
          </code>
          .
        </p>
        <h2 id="content">
          <code className="highlighter-rouge">
            src/components/Navbars/AdminNavbar.jsx
          </code>
        </h2>
        <p>
          It is used to create the navbar / header that appears on the{" "}
          <code className="highlighter-rouge">src/layouts/Admin.jsx</code>.
        </p>
        <p>
          It is diveded in two parts, the left one, that is used for the page
          name, and the right part with a search and a user.
        </p>
        <h2 id="content">
          <code className="highlighter-rouge">
            src/components/Navbars/AuthNavbar.jsx
          </code>
        </h2>
        <p>
          It is used to create the navbar / header that appears on the{" "}
          <code className="highlighter-rouge">src/layouts/Auth.jsx</code>.
        </p>
        <p>
          It is diveded in two parts, the left one, that is used for the product
          logo, and the right part with some links to navigate inside the app.
        </p>
      </>
    );
  }
}

export default Navbar;
