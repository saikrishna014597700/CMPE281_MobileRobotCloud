"use strict";
const config = {
  secret: "Your passport secret key",
  frontendURI: "http://localhost:3000",
  mysqlUser: "admin",
  mysqlPassword: "cloudcomputing",
  mysqlHost: "Database-1.c0gg1m1honux.us-west-2.rds.amazonaws.com",
  mysqlDatabase: "MobileRobotCloud",
  mongoDBURI:
    "mongodb+srv://mobileCloudUser:cloudcomputing@cluster0.knqrf.mongodb.net/MobileRobotCloud?retryWrites=true&w=majority",
};

module.exports = config;
