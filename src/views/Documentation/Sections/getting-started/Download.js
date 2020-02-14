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
import React from "react";

class Download extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Download
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Download Argon Design System React to get the compiled CSS and
          JavaScript, source code, or include it with your favorite package
          managers.
        </p>
        <hr />
        <h2 id="download">Download</h2>
        <ul>
          <li>
            <a href="https://github.com/creativetimofficial/argon-design-system-react/archive/master.zip">
              Download from Github
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-download-docs-page">
              Download from Creative Tim
            </a>
          </li>
        </ul>
        <h2 id="package-managers">Package managers</h2>
        <ul>
          <li>
            <p>
              Install with Npm:{" "}
              <code className="highlighter-rouge">
                npm i @creative-tim-official/argon-design-system-react
              </code>
            </p>
          </li>
          <li>
            <p>
              Install with Yarn:{" "}
              <code className="highlighter-rouge">
                yarn add @creative-tim-official/argon-design-system-react
              </code>
            </p>
          </li>
          <li>
            <p>
              Install with Composer:{" "}
              <code className="highlighter-rouge">
                composer create-project
                creativetimofficial/argon-design-system-react
              </code>
            </p>
          </li>
          <li>
            <p>
              Clone from Github:{" "}
              <code className="highlighter-rouge">
                git clone
                https://github.com/creativetimofficial/argon-design-system-react.git
              </code>
            </p>
          </li>
        </ul>
      </>
    );
  }
}

export default Download;
