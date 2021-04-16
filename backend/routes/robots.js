const router = require("express").Router();
const robots = require("../models/robots.js");

router.get("/", async (req, res) => {
  robots.find((error, result) => {
    // res.end(result);
    console.log("robots", result);
    res.send(result);
    res.end();
  });
});

module.exports = router;
