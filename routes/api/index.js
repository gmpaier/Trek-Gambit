const router = require("express").Router();
const parkRoutes = require("./parks");

router.use("/parks", parkRoutes);

module.exports = router;