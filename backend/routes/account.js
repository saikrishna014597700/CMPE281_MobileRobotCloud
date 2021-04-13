"use strict";
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');


/**
 * to deactivate an account
 * @param req: user_id
 */

router.post("/signup", async (req, res) => {
    let msg = req.body;
    console.log("Req body for signup", req.body);
    msg.route = "sign_up";

});

router.post("/signin", async (req, res) => {
    let msg = req.body;
    console.log("Req body for signin", req.body);
    msg.route = "sign_in";

});


module.exports = router;