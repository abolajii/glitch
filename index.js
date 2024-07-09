const express = require("express");

const port = 5990;

const app = express();

const router = express.Router();

router.get("/", function (req, res) {
  res.send("App is running");
});

app.use("/api", router);

app.listen(port, console.log("Server running on port " + port));

// module.exports.handler = serverless(app);
