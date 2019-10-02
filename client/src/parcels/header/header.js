import React from "react";

import "./header.css";

export default class TwitterNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className="nav-header">
          <div>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/de/9/9f/Twitter_bird_logo_2012.svg" alt="logo" />
            <span>TWITTER-CLONE | FULL STACK DEVELOPMENT</span>
          </div>
        </div>
        <div className="sub-nav-header">
          <h1>#Doublelayer</h1>
        </div>
        <div className="topic-nav">
          <nav>
            <ul>
              <li className="list-item active">
                <a href="/">Top</a>
              </li>
              <li className="list-item">
                <a href="/">Neueste</a>
              </li>
              <li className="list-item">
                <a href="/">Personen</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
