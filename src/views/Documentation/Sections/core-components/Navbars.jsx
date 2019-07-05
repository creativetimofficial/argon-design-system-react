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
          In our template product, we have just one demo navbar that is used for
          all the present pages. This one is found inside:{" "}
          <code className="highlighter-rouge">
            src/components/Navbars/DemoNavbar.jsx
          </code>
          .
        </p>
        <p>
          It is diveded in two parts, the left one, that is used for logo and
          links inside the app, and the right part with some social buttons and
          a download one.
        </p>
        <p>
          This component does not accept any props. So everything in these two
          components is static. Feel free to change them as you wish. Just
          import them, and render them like normal HTML tags.
        </p>
      </>
    );
  }
}

export default Navbar;
