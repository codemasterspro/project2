const router = require("express").Router();
var db = require("../../models");

router.post("/", function (req, res) {
  db.User.create({
    user: req.body.user,
    password: req.body.password
  })
    .then(function (dbTrack) {
      console.log(dbTrack);
      res.redirect("/");
    });
});

module.exports = router;