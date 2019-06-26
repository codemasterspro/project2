const router = require("express").Router();
const trackRoutes = require("./track");

// Book routes
router.use("/track", trackRoutes);

module.exports = router;
