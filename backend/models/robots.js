const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var robotsSchema = new Schema(
  {
    _id: { type: Schema.ObjectId, auto: true },
    roboId: { type: String, required: true },
    roboPath: { type: String },
    roboState: { type: String },
    userId: { type: String, required: true },
    startSessionTime: { type: String },
    endSessionTime: { type: String },
  },
  {
    versionKey: false,
  }
);
module.exports = mongoose.model("robots", robotsSchema);
