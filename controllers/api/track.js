const router = require("express").Router();
var db = require("../../models");

router.get("/", function(req, res) {
});


router.get("/tracks", function(req, res) {
  db.Track.findAll({
    include: [db.User],
    order: [["track_artist", "ASC"]]
  })
  .then(function(dbTrack) {
      var tObject = {
        track: dbTrack
      };
      return res.render("index", tObject);
    });
});

router.post("/tracks/create", function(req, res) {
  db.Track.create({
    track_name: req.body.track_name
  })
    .then(function(dbTrack) {
      console.log(dbTrack);
      res.redirect("/");
    });
});

router.put("/tracks/update", function(req, res) {
  if (req.body.user) {
    db.User.create({
      user: req.body.user,
      TrackId: req.body.track_id
    })
      .then(function(dbUser) {
        return db.Track.update(
          {
            played: true
          },
          {
            where: {
              id: req.body.track_id
            }
          }
        );
      })
      .then(function(dbTrack) {
        res.json("/");
      });
  }
  else {
    db.Track.update(
      {
        played: true
      },
      {
        where: {
          id: req.body.track_id
        }
      }
    ).then(function(dbTrack) {
      res.json("/");
    });
  }
});

module.exports = router;
