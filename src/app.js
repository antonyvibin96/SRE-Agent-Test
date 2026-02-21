const express = require("express");
const user = require("./services/UserService"); // use relative path
const app = express();

app.get("/id", (req, res) => {
  const userFromRequest = req.user;
  const result = user.getUser();
  res.send(result);
});

app.listen(3000, () => console.log("Running at 3000"));