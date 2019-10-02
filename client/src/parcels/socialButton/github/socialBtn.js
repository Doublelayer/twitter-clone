import React from "react";

import "./socialBtn.css";

export default class SocialButton extends React.Component {
  render() {
    return (
      <div className="social-btn-wrapper">
        <div className="social-btn">
          <div>
            <a href="https://github.com/Doublelayer" aria-label="Follow @Doublelayer on GitHub">
              Follow @Doublelayer
            </a>
          </div>
          <div className="cover">
            <div className="inner">
              <img className="git-logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" alt="github" />
            </div>
            <div className="edge"></div>
            <div className="outer">
              <img className="git-logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" alt="github" />
            </div>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    );
  }
}
