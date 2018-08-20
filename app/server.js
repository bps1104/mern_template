const express = require("express");
const mongoose = require("mongoose");
const app = express();

/* load routes files
*/
var profilesRouter = require("./routes/api/profiles");
var usersRouter = require("./routes/api/users");
var postsRouter = require("./routes/api/posts");
var adminRouter = require("./routes/api/admin");

/* read config and connect to DB
*/
const db = require("./config/config").client.mongodb.defaultUri;
console.log("./server.js: mongodb url read is " + db);
mongoose
  .connect(db)
  .then(() => console.log("./server.js: mongodb connected"))
  .catch(err => console.log("./server.js: mongodb connect failed"));

/* specify routing
*/
// pass the route to proper routing files inside ROUTES folder
//app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/profiles", profilesRouter);
app.use("/api/admin", adminRouter);

// root route
app.get("/", (req, res) =>
  res.send(
    "Hello there, person from " +
      req.ip +
      " , environment: " +
      process.env.NODE_ENV
  )
);

module.exports = app;
