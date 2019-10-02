import React from "react";

import "./tweetButton.css";

export default class TweetButton extends React.Component {
  render() {
    return (
      <span>
        <div className="tweet-sub-btn">
          <div className="cell">
            <i></i>
            <span>Tweet</span>
          </div>
        </div>
      </span>
    );
  }
}
