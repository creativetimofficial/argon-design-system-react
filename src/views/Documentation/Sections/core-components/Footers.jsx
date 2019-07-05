/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">Index page</Link> and{" "}
          <Link to="/landing-page">Landing Page</Link> and one for{" "}
          <Link to="/profile-page">Profile Page</Link> and{" "}
          <Link to="/login-page">Login Page</Link> and{" "}
          <Link to="/register-page">Register Page</Link>.
        </p>
        <hr />
        <h2 id="primary-colors">Short description and usage</h2>
        <p>
          These two can be found inside{" "}
          <code className="highlighter-rouge">
            src/components/Footers/CardsFooter.jsx
          </code>{" "}
          and{" "}
          <code className="highlighter-rouge">
            src/components/Footers/SimpleFooter.jsx
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
