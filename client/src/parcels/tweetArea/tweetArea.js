import React from "react";
import { Label, Input, Collapse, Form, Button } from "reactstrap";
import TweetButton from "../tweetButton/tweetButton";

import PulseLoader from "react-spinners/PulseLoader";

import "./tweetArea.css";

export default class UserTweetArea extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnTweetInputClick = this.handleOnTweetInputClick.bind(this);
    this.updateStillAvailableCharactersCount = this.updateStillAvailableCharactersCount.bind(this);
    this.updateUserNameInput = this.updateUserNameInput.bind(this);
    this.handleTweetSubmit = this.handleTweetSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  state = {
    collapsed: false,
    stillAvailableCharactersCount: 150,
    maxMessageLength: 150,
    showNameError: false,
    showMessageError: false,
    minInputLength: 3,
    form: {
      message: "",
      user: ""
    }
  };

  handleOnTweetInputClick() {
    this.setState({
      collapsed: true
    });
  }

  updateStillAvailableCharactersCount(evt) {
    const input = evt.target.value;
    const inputLength = evt.target.value.length;
    const maxMessageLength = this.state.maxMessageLength;

    const form = { ...this.state.form };
    form.message = input;

    this.setState({
      stillAvailableCharactersCount: maxMessageLength - inputLength,
      form
    });
  }

  updateUserNameInput(evt) {
    const form = { ...this.state.form };
    form.user = evt.target.value;
    this.setState({
      form
    });
  }

  handleTweetSubmit(e) {
    e.preventDefault();
    const userName = this.state.form.user;
    const message = this.state.form.message;

    const isValidName = this.isValidLength(userName);
    const isValidMessage = this.isValidLength(message);
    this.setState({
      showNameError: !isValidName,
      showMessageError: !isValidMessage
    });

    if (isValidName && isValidMessage) {
      this.props.submitForm(this.state.form);
      this.resetForm();
    }
  }

  resetForm() {
    this.setState({
      form: {
        user: "",
        message: ""
      }
    });
  }

  isValidLength(input) {
    if (input.length >= this.state.minInputLength) return true;

    return false;
  }

  render() {
    const { collapsed, stillAvailableCharactersCount, maxMessageLength, showNameError, showMessageError } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleTweetSubmit}>
          <Collapse isOpen={this.state.collapsed}>
            <Label for="whats-happening">Dein Name:</Label>
          </Collapse>
          <Input
            className={showNameError ? "error-form" : ""}
            type="text"
            name="user-tweet"
            id="whatsHappening"
            placeholder="Was passiert gerade bei dir?"
            onChange={this.updateUserNameInput}
            value={this.state.form.user}
            onClick={this.handleOnTweetInputClick}
          />
          <Collapse className="user-name-error" isOpen={showNameError}>
            Das ist kein gültiger Name!
            <span role="img" aria-label="">
              👮
            </span>
            Du hast doch bestimmt mehr als drei Buchstaben!?
            <span role="img" aria-label="">
              😛
            </span>
          </Collapse>
          <Collapse isOpen={collapsed}>
            <Label for="tweet-message">Dein Tweet:</Label>
            <Input
              className={showMessageError ? "error-form" : ""}
              type="textarea"
              name="user-messsage"
              id="tweetMessage"
              placeholder="#Dein Tweet..."
              onClick={this.handleOnTweetInputClick}
              value={this.state.form.message}
              onChange={this.updateStillAvailableCharactersCount}
              maxLength={maxMessageLength}
            />

            <Collapse className="user-name-error" isOpen={showMessageError}>
              Kein Tweet ohne Tweet!
              <span role="img" aria-label="">
                👮
              </span>
              Schau dich auf deiner Tastatur um...findest du 3 Zeichen!?{" "}
              <span role="img" aria-label="">
                😛
              </span>
            </Collapse>
            <div className="tweet-submit-area">
              <span className="character-count">noch {stillAvailableCharactersCount} Zeichen</span>
              {this.props.isFetching ? (
                <span>
                  <PulseLoader color={"#1da1f2"} />
                </span>
              ) : (
                <Button type="submit" color="link" className="btn-submit">
                  <TweetButton />
                </Button>
              )}
            </div>
          </Collapse>
        </Form>
      </div>
    );
  }
}
