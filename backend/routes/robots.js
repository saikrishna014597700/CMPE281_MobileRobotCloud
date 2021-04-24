const router = require("express").Router();
const robots = require("../models/robots.js");

router.get("/allActiveRobots", async (req, response) => {
  return robots.find({ "roboState": "Active" })
    .exec()
    .then(robot => {
      console.log("Abcc", robot)
      response.status(200).json(robot);
    })
    .catch(err => {
      response.status(500).json({ error: err });
    });
});

router.get("/allRegRobots", async (req, response) => {
  return robots.find()
    .exec()
    .then(robot => {
      console.log("Abcc", robot)
      response.status(200).json(robot);
    })
    .catch(err => {
      response.status(500).json({ error: err });
    });
});

module.exports = router;
