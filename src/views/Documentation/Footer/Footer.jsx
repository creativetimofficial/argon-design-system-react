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
                <a href="https://www.creative-tim.com">Creative Tim</a>
              </li>
              <li>
                <a href="https://presentation.creative-tim.com">About Us</a>
              </li>
              <li>
                <a href="https://blog.creative-tim.com">Blog</a>
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
            <a
              href="https://www.invisionapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Invision
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com"
              target="_blank"
              rel="noopener noreferrer"
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
