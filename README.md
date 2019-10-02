# #twitterClone
A basic twitter clone to demonstrate the full stack 🥞 (client, server, database).

* You can send new Tweets 👤✉️
* You can see all tweets that have been sent  📢
* :point_right: [Live example](https://twitter-clone-client.doublelayer.now.sh/) :point_left:

## Objectives
📝 Diagram the Full Stack  
🔎 Differentiate between Client and Server  
⌨️ Get user input on the Client  
➡️ Send user input from the client with fetch to the server  
🗃 Store data in a database  
🔍 Retrieve data from a database on the Server  
⬅️ Retrieve data from a server on the client using Fetch  
🙈 Hide/Show elements on the client  
✨ Add elements to the page on the client  
🚀 Deploy the client&server with [now.sh](https://zeit.co)  
🚀 Deploy the database with [mlab](https://mlab.com/)

---

## Client :busts_in_silhouette:

- [written in react](https://reactjs.org/)
- [reactrap](https://reactstrap.github.io/) & [bootstrap](https://react-bootstrap.github.io/)
- [react-highlight-words](https://www.npmjs.com/package/react-highlight-words)
  - React component to highlight words within a larger body of text.
- [moment](https://www.npmjs.com/package/moment)
  - A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates

#### Setup

```
npm install
```

#### Development

```
npm start
```

---
## Server :computer:

#### Includes API Server utilities:

- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [cors](https://www.npmjs.com/package/cors)
  - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [mongoose](https://www.npmjs.com/package/mongoose)
  - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
- [faker](https://www.npmjs.com/package/faker)
  - faker.js - generate massive amounts of fake data in the browser and node.js
- [bad-words](https://www.npmjs.com/package/bad-words)
  - A javascript filter for badwords

#### Development utilities:

- [nodemon](https://www.npmjs.com/package/nodemon)
  - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [eslint](https://www.npmjs.com/package/eslint)
  - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [mocha](https://www.npmjs.com/package/mocha)
  - ☕️ Simple, flexible, fun JavaScript test framework for Node.js & The Browser ☕️
- [supertest](https://www.npmjs.com/package/supertest)
  - HTTP assertions made easy via superagent.
- [snyk](https://www.npmjs.com/package/snyk)
  - Snyk helps you find, fix and monitor known vulnerabilities in Node.js npm dependencies


#### Databse Connection

- add new .env file and add credentials (look at .env.sample)

#### Setup

```
npm install
```

#### Lint

```
npm run lint
```

#### Test

```
npm run test
```

#### Development

```
npm run dev
```

#### Package Audit with snyk

```
npm run audit
```
