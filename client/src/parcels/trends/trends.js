import React from "react";

import "./trends.css";

export default class TrendsArea extends React.Component {
  render() {
    return (
      <div className="trends-area shadow">
        <h5>Trends</h5>
        <hr />
        <div className="trend">
          <div className="trends-hashtag">#doublelayer</div>
          <div className="trends-counter">145 Tweets</div>
        </div>
        <div className="trend">
          <div className="trends-hashtag">#sfGoHH</div>
          <div className="trends-counter">1254 Tweets</div>
        </div>
      </div>
    );
  }
}
