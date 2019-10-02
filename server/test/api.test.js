const request = require("supertest");

const app = require("../src/app");

describe("GET /api/v1", () => {
  it("responds with a json message", function(done) {
    request(app)
      .get("/api/v1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          message: "API - 👋🌎🌍🌏"
        },
        done
      );
  });
});

describe("POST /api/v1/post/tweet", () => {
  it("responds with a json message and given input", function(done) {
    request(app)
      .post("/api/v1/post/tweet")
      .send({ input: "SUPERTEST" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});

describe("GET /api/v1/get/tweets", () => {
  it("responds with a json message", function(done) {
    request(app)
      .get("/api/v1/get/tweets")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
