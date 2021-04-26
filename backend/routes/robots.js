const router = require("express").Router();
const robots = require("../models/robots.js");
var ObjectId = require("mongodb").ObjectID;

router.get("/allActiveRobots", async (req, response) => {
  if (req.query.user_id) {
    return robots.find({ "userId": req.query.user_id, "roboState": "Active" })
      .exec()
      .then(robot => {
        response.status(200).json(robot);
      })
      .catch(err => {
        response.status(500).json({ error: err });
      });
  }
  return robots.find({ "roboState": "Active" })
    .exec()
    .then(robot => {
      response.status(200).json(robot);
    })
    .catch(err => {
      response.status(500).json({ error: err });
    });
});

router.get("/allRegRobots", async (req, response) => {
  if (req.query.user_id) {
    return robots.find({ userId: req.query.user_id })
      .exec()
      .then(robot => {
        response.status(200).json(robot);
      })
      .catch(err => {
        response.status(500).json({ error: err });
      });
  }
  return robots.find()
    .exec()
    .then(robot => {
      response.status(200).json(robot);
    })
    .catch(err => {
      response.status(500).json({ error: err });
    });
});

router.post("/createRobot", async (req, response) => {
  var robotId = new ObjectId();
  var robot = new robots({
    _id: robotId,
    roboName: req.body.roboName,
    roboPath: req.body.robotPath,
    roboState: "Active",
    runTime: 0,
    userId: req.body.userId,
    roboId: req.body.robotId,
    startSessionTime: req.body.startSessionTime,
    endSessionTime: req.body.endSessionTime
  });
  return robot.save(function (err, res) {
    if (err) return response.status(500).json({ error: err });
    response.status(200).json(robots);
  });

});

router.post("/changeRobotStatus", async (req, response) => {
  console.log("state", req.body)
  return robots.updateOne({ _id: req.body.id }, { roboState: req.body.roboState })
    .exec()
    .then(robot => {
      response.status(200).json(robot);
    })
    .catch(err => {
      response.status(500).json({ error: err });
    });
});

router.post("/changeRobotPath", async (req, response) => {
  const data = {
    x: req.body.x,
    y: req.body.y,
  }
  return robots.updateOne({ _id: req.body.id }, { $push: { roboPath: data } })
    .exec()
    .then(robot => {
      response.status(200).json(robot);
    })
    .catch(err => {
      response.status(500).json({ error: err });
    });
});

router.get("/getRobot", async (req, response) => {
  const robotId = req.query.robotId;
  return robots.findById(robotId)
    .exec()
    .then(robot => {
      response.status(200).json(robot);
    })
    .catch(err => {
      response.status(500).json({ error: err });
    });
});

module.exports = router;
