var express = require("express");
var router = express.Router();
const pool = require("../utils/mysqlConnection");

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("Inside  get-users ");
  const sql = `SELECT * from user`;
  pool.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({ responseMessage: "Error Occurred" });
    } else if (result.length > 0) {
      console.log(result);
      res.status(200).send(result);
    } else {
      console.log("crew does not exist");
      res.status(400).send("crew does not exist");
    }
  });
});

module.exports = router;
