var express = require("express");
var router = express.Router();
const pool = require("../utils/mysqlConnection");
const { STATUS_CODE, MESSAGES } = require("../utils/constants");

router.get("/allActiveUsers", async (req, res) => {
  try {
    return await pool.query(
      "select * from user",
      async function (error, result) {
        console.log("resiltAll iusers", result)
        res.status(STATUS_CODE.SUCCESS).send({ status: STATUS_CODE.SUCCESS, payload: result });
      });
  } catch (error) {
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send({ status: STATUS_CODE.INTERNAL_SERVER_ERROR, payload: error });
  }
});

router.get("/allRegUsers", async (req, res) => {
  try {
    return await pool.query(
      "select * from user",
      async function (error, result) {
        console.log("resiltAll iusers", result)
        res.status(STATUS_CODE.SUCCESS).send({ status: STATUS_CODE.SUCCESS, payload: result });
      });
  } catch (error) {
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send({ status: STATUS_CODE.INTERNAL_SERVER_ERROR, payload: error });
  }
});

module.exports = router;
