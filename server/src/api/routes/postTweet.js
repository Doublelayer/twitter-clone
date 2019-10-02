const express = require("express");
const router = express.Router();

const Tweet = require("../../database/models/tweetSchema");

const faker = require("faker");

const Filter = require("bad-words");
const filter = new Filter();

function isValidTweet(tweet) {
  const name = tweet.name;
  const message = tweet.message;
  return (
    name &&
    name.toString().trim() !== "" &&
    name.toString().trim().length <= 50 &&
    name.toString().trim().length >= 3 &&
    message &&
    message.toString().trim() !== "" &&
    message.toString().trim().length <= 150 &&
    message.toString().trim().length >= 3
  );
}

router.post("/tweet", (req, res, next) => {
  const body = req.body;

  if (isValidTweet(body)) {
    const tweet = {
      name: filter.clean(body.name),
      message: filter.clean(body.message),
      created: new Date(),
      avatarUrl: faker.image.avatar()
    };

    Tweet.insertMany(tweet)
      .then(createdTweet => {
        res.status(201).json(createdTweet);
      })
      .catch(next);
  } else {
    res.status(400).json({
      error:
        "Name and Message are required! name not less than 3 and not longer than 50 Characters! Message not less than 3 and not longer than 150 Characters!"
    });
  }
});

module.exports = router;
