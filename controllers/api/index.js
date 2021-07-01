const router = require("express").Router();
const parkRoutes = require("./parkRoutes");
const activityRoutes = require("./activityRoutes");
const parkActivities = require("./park-activities");
const userRoutes = require("./userRoutes");
const visitRoutes = require("./visitRoutes");

router.use("/parks", parkRoutes);
router.use("/activities", activityRoutes);
router.use("/users", userRoutes);
router.use("/visits", visitRoutes);
router.use("/park-activities", parkActivities);

module.exports = router;