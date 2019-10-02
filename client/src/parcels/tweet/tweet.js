import React from "react";
import { Row, Col } from "reactstrap";
import Moment from "moment";
import Highlighter from "react-highlight-words";

import "./tweet.css";

export default class UserTweetArea extends React.Component {
  render() {
    Moment.locale("de");

    return (
      <div>
        <Row>
          <Col sm="1">
            <img className="avatar" src={this.props.avatarUrl} alt="logo" />
          </Col>
          <Col sm="10">
            <div>
              <span className="user-name">{this.props.name}</span>
              <span className="tweet-created">{Moment(this.props.created).format("LLL")}</span>
            </div>
            <Highlighter
              highlightStyle={{
                backgroundColor: "transparent",
                color: "#2ec8fa"
              }}
              searchWords={["#"]}
              autoEscape={true}
              textToHighlight={this.props.message}
            />
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}
