const express = require("express");
const router = express.Router();

const Tweet = require("../../database/models/tweetSchema");

router.post("/tweets", async (req, res) => {
  await Tweet.find()
    .then(tweets => res.status(200).json(tweets))
    .catch(err => res.status(400).send(err));
});

module.exports = router;
