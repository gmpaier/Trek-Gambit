const router = require('express').Router();
const { Activity, Park } = require('../../models');

router.get("/", async (req, res) => {
  try {
    const activityData = await Activity.findAll();
    const activities = activityData.map((activity) => activity.get({ plain: true }));
    res.status(200).json(activities);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.get("/park/:id", async (req, res) => {
  try {
    const park = await Park.findOne({where: {code: req.params.id}});
    if (park){
      const activityData = await park.getActivities();
      if (activityData){
        const activities = activityData.map((activity) => activity.get({ plain: true }));
        res.status(200).json(activities);
      }
      else {
        res.status(200).json("no activities associated with this park.")
      }
    }
    else {
      res.status(404)
    }
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.post("/bulk", async (req, res) => {
  try {
    const activitiesIn = req.body;
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
