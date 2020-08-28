const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  booked: {
    type: Boolean,
    default: 0,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
