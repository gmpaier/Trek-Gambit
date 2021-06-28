const router = require('express').Router();
const { Activity } = require('../../models');

router.post("/bulk", async (req, res) => {
  try {
    const activitiesIn = req.body;
    console.log(activitiesIn);
    const activitiesMap = activitiesIn.map((activity) => {
      const actOut = {
        name: activity.name,
        nps_id: activity.id
      }
      return actOut;
    });
    const activities = await Activity.bulkCreate(activitiesMap);
    res.status(200).json(activities);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
