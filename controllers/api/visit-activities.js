const router = require('express').Router();
const { VisitActivity } = require('../../models');

router.post("/", async (req, res) => {
  try {
    const visitActivity = await VisitActivity.create(req.body);
    res.status(200).json(visitActivity);
  }
  catch (err) {
    res.status(400).json(err)
  }
});

module.exports = router;