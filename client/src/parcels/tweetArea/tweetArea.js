import React from "react";
import { Label, Input, Collapse, Button } from "reactstrap";

import "./tweetArea.css";

export default class UserTweetArea extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnTweetInputClick = this.handleOnTweetInputClick.bind(this);
  }

  state = {
    collapsed: false
  };

  handleOnTweetInputClick() {
    this.setState({
      collapsed: true
    });
  }

  render() {
    return (
      <div>
        <Collapse isOpen={this.state.collapsed}>
          <Label for="whats-happening">Dein Name:</Label>
        </Collapse>
        <Input
          type="text"
          name="user-tweet"
          id="whats-happening"
          placeholder="Was passiert gerade bei dir?"
          onClick={this.handleOnTweetInputClick}
        />
        <Collapse isOpen={this.state.collapsed}>
          <Label for="tweet-message">Dein Tweet:</Label>
          <Input
            type="textarea"
            name="user-messsage"
            id="tweet-message"
            placeholder="#Dein Tweet..."
            onClick={this.handleOnTweetInputClick}
          />
          <div className="tweet-submit-area">
            <span>noch 135 Zeichen</span> <Button color="primary">Tweet</Button>
          </div>
        </Collapse>
      </div>
    );
  }
}
