import React, { Component } from "react";

import TwitterNavbar from "./parcels/header/header";
import TrendsArea from "./parcels/trends/trends";
import UserTweetArea from "./parcels/tweetArea/tweetArea";
import Tweet from "./parcels/tweet/tweet";
import Copyright from "./parcels/copyright/copyright";
import { Row, Col } from "reactstrap";
import loadingSpinner from "./assets/spinner-dots.gif";
import { Alert } from "reactstrap";

import api from "./api";

import "./App.css";

const API_URL = window.location.hostname === "local#host" ? "http://localhost:5000/api/v1/" : "http://192.168.2.123:5000/api/v1/";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.toggleIsFetching = this.toggleIsFetching.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  state = {
    tweets: [],
    isFetching: false,
    fetchingError: false
  };

  componentDidMount() {
    this.fetchTweets();
  }

  toggleIsFetching() {
    this.setState(prevState => ({
      isFetching: !prevState.isFetching
    }));
  }

  toggleFetchingError() {
    this.setState(prevStae => ({
      fetchingError: !prevStae.fetchingError
    }));
  }

  fetchTweets() {
    this.toggleIsFetching();
    fetch(api.get)
      .then(res => res.json())
      .then(tweets => {
        this.setState({
          tweets: tweets
        });
        this.toggleIsFetching();
      });
  }

  submitForm(formData) {
    this.toggleIsFetching();

    const tweet = {
      name: formData.user.trim(),
      message: formData.message.trim()
    };
    fetch(api.post, {
      method: "POST",
      body: JSON.stringify(tweet),
      headers: { "content-type": "application/json" }
    }).then(respone => {
      if (!respone.ok) {
        this.setState(prevState => ({ fetchingError: !prevState.fetchingError }));
      }
      this.fetchTweets();
    });

    this.toggleIsFetching();
  }

  render() {
    const { tweets, isFetching, fetchingError } = this.state;
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
                  <UserTweetArea submitForm={this.submitForm} isFetching={isFetching} />
                  <hr />
                  {isFetching ? (
                    <div className="loading-spinner">
                      <img alt="loading..." src={loadingSpinner} />
                    </div>
                  ) : (
                    ""
                  )}

                  {tweets.map(tweets => (
                    <Tweet
                      key={tweets._id}
                      avatarUrl={tweets.avatarUrl}
                      name={tweets.name}
                      created={tweets.created}
                      message={tweets.message}
                    />
                  ))}
                </div>
              </Col>
              <Col>
                <TrendsArea />
              </Col>
            </Row>
          </div>
        </div>
        {fetchingError ? (
          <Alert color="danger">
            <span role="img" aria-label="">
              🥞
            </span>
            Oh mist...
            <span role="img" aria-label="">
              🐤
            </span>
            Der Vogel ist ausgeflogen...Versuche es später erneut!
          </Alert>
        ) : (
          ""
        )}
      </div>
    );
  }
}
