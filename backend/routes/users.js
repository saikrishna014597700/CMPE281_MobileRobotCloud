var express = require("express");
var router = express.Router();
const pool = require("../utils/mysqlConnection");
const { STATUS_CODE, MESSAGES } = require("../utils/constants");

router.get("/allActiveUsers", async (req, res) => {
  try {
    return await pool.query(
      "select * from user where is_active = 1",
      async function (error, result) {
        console.log("active iusers", result)
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


router.post("/updateServiceOperations", async(req,res)=>{
  try {
    let userId = req.body.userId;

    await pool.query(`select count(*) as count from billing_details where  user_id = ${userId} and roboId =${req.body.roboId};`, 
    
    async (error, result) => {
      console.log("count:: ", result , error);

    }) 
    //console.log("count : ", result);
    
    return await pool.query(
      `update billing_details set operations = operations +1, roboId = ${req.body.roboId} where user_id = ${userId}  `,
      async function (error, result) {
        console.log("resiltAll iusers", result, error)
        res.status(STATUS_CODE.SUCCESS).send({ status: STATUS_CODE.SUCCESS, payload: result });
      });
  } catch (error) {
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send({ status: STATUS_CODE.INTERNAL_SERVER_ERROR, payload: error });
  }


})

module.exports = router;
