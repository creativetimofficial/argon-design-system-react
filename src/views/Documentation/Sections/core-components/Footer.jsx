import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            App Footers
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          We've created two demo footers, one used for{" "}
          <code className="highlighter-rouge">src/layouts/Admin.jsx</code> and
          one for{" "}
          <code className="highlighter-rouge">src/layouts/Auth.jsx</code>.
        </p>
        <hr />
        <h2 id="primary-colors">Short description and usage</h2>
        <p>
          These two can be found inside{" "}
          <code className="highlighter-rouge">
            src/components/Footers/AdminFooter.jsx
          </code>{" "}
          and{" "}
          <code className="highlighter-rouge">
            src/components/Footers/AuthFooter.jsx
          </code>
          .
        </p>
        <p>
          Everything in these two components is static. Feel free to change them
          as you wish.
        </p>
        <p>Just import them, and render them like normal HTML tags.</p>
      </>
    );
  }
}

export default Footer;
