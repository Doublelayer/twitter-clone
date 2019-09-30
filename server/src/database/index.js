const mongoose = require("mongoose");

function connect(API_URL) {
  return new Promise((resolve, reject) => {
    mongoose.connect(API_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
      () => {
        resolve();
        console.log("Connected to Mongoose...");
      },
      err => {
        console.log("Error while connecting to Mongoose!");
      }
    );
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };
