"use strict";
const express = require("express");
const router = express.Router();
const pool = require("../utils/mysqlConnection");
const { STATUS_CODE, MESSAGES } = require("../utils/constants");


router.post("/register", async (req, res) => {
    let user = req.body;
    console.log("backend Register", user);
    let response = {};
    let err = {};
    try {
        pool.query(
            `INSERT INTO user (email, password, first_name, last_name, role) VALUES ('${user.username}', '${user.password}', '${user.firstName}', '${user.lastName}', '${user.role}');`,
            async (err, sqlResult) => {
                if (sqlResult && sqlResult.length > 0) {
                    response.result = sqlResult;
                }
                response.status = STATUS_CODE.CREATED_SUCCESSFULLY;
                response.data = MESSAGES.CREATE_SUCCESSFUL;
                return response;
            }
        );
    } catch (error) {
        err.status = STATUS_CODE.INTERNAL_SERVER_ERROR;
        err.data = MESSAGES.INTERNAL_SERVER_ERROR;
        return err;
    }
});

router.post("/login", async (req, res) => {
    let user = req.body;
    console.log("uuu", user)
    try {
        return await pool.query(
            "select * from user where email = ?",
            [user.username],
            async function (error, result) {
                console.log("aa", result)
                try {
                    return await pool.query(
                        "select * from user where email = ? and password = ?",
                        [user.username, user.password],
                        async function (err, result) {
                            console.log("ressss", result)
                            res.status(STATUS_CODE.SUCCESS).send({ status: STATUS_CODE.SUCCESS, payload: result });
                        }
                    );
                } catch (error) {
                    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send({ status: STATUS_CODE.INTERNAL_SERVER_ERROR, payload: error });
                }
            }
        );
    } catch (error) {
        res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send({ status: STATUS_CODE.INTERNAL_SERVER_ERROR, payload: error });
    }
});


module.exports = router;