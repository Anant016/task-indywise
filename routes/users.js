const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/find", (req, res) => {
  User.find({ id: req.body.id }).then((data) => {
    res.send(data);
  });
});

router.post("/toggle", (req, res) => {
  User.find({ id: req.body.id }).then((data) => {
    if (data.length == 0) {
      //new
      console.log("new");
      let newUser = User({
        id: req.body.id,
        booked: !req.body.booked,
        date: req.body.date,
        time: req.body.time,
      });
      newUser.save().then(res.send(newUser));
    } else {
      //update
      User.findOneAndUpdate(
        { id: req.body.id },
        {
          id: req.body.id,
          booked: !req.body.booked,
          date: req.body.date,
          time: req.body.time,
        },
        { upsert: true },
        function (err, doc) {
          if (err) return res.send(500, { error: err });
          User.find({ id: req.body.id }).then((data) => {
            res.send(data[0]);
          });
        }
      );
    }
  });
});
module.exports = router;
