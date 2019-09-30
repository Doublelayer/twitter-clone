import React, { Component } from "react";

import TwitterNavbar from "./parcels/header/header";
import TrendsArea from "./parcels/trends/trends";
import UserTweetArea from "./parcels/tweetArea/tweetArea";
import Tweet from "./parcels/tweet/tweet";
import Copyright from "./parcels/copyright/copyright";
import { Row, Col } from "reactstrap";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TwitterNavbar />
        <div className="app-content">
          <div>
            <Row>
              <Col>
                <Copyright />
              </Col>
              <Col sm="6">
                <div className="tweets-main-section shadow">
                  <UserTweetArea />
                  <hr />
                  <Tweet />
                </div>
              </Col>
              <Col>
                <TrendsArea />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
