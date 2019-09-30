const app = require("./app");
const db = require("./database/index");

const API_URL = process.env.DATABASE_URL;
const port = process.env.PORT || 5000;

db.connect(API_URL).then(() => {
  app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);
  });
});
