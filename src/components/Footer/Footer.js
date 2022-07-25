import React, { Component } from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="social">
          <a
            className="social-github"
            href="https://github.com/plandriel"
            target="blank"
          >
            <GitHub
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
          <a
            className="social-linkedin"
            href="https://www.linkedin.com/in/pedro-landriel/"
            target="blank"
          >
            <LinkedIn
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
        </div>

        <div className="copyright">
          © 2022 Copyright
          <a href="https://eduardo-gonzalez-portafolio.now.sh/" target="blank">
            {" "}
            Pedro Landriel
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
