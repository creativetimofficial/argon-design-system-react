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
/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <nav>
            <ul>
              <li>
                <a href="https://www.creative-tim.com?ref=adsr-documentation-footer">
                  Creative Tim
                </a>
              </li>
              <li>
                <a href="https://presentation.creative-tim.com?ref=adsr-documentation-footer">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://blog.creative-tim.com?ref=adsr-documentation-footer">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md">
                  MIT License
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            &copy; {new Date().getFullYear()}, Designed by{" "}
            <a href="https://www.invisionapp.com" target="_blank">
              Invision
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=adsr-documentation-footer"
              target="_blank"
            >
              Creative Tim
            </a>
            .
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
