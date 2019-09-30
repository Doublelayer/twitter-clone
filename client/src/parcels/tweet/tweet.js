import React from "react";
import { Row, Col } from "reactstrap";

import "./tweet.css";

export default class UserTweetArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm="1">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/de/9/9f/Twitter_bird_logo_2012.svg" />
          </Col>
          <Col sm="10">
            <div>
              <span className="user-name">Florin Hamann</span>
              <span className="tweet-details">Lorem ipsum Jan 25.</span>
            </div>
            <div>loremiasdlfjsaodöifnasdlnflksad</div>
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}
