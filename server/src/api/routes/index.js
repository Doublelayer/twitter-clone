const express = require("express");
const router = express.Router();

const getTweets = require("./getTweet");
const postTweets = require("./postTweet");

router.get("/", (req, res) => {
  res.json("👋🌎🌍🌏  Hi and welcome to my twitter clone api  :-) for more infos check my github acc: https://github.com/Doublelayer");
});

router.use("/get", getTweets);
router.use("/post", postTweets);

module.exports = router;
