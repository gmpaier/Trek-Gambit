const router = require('express').Router();
const { ParkActivity, Park, Activity } = require('../../models');

router.post("/bulk", async (req, res) => {
  try {
    console.log("in park activities");
    const parks = req.body;
    for (let i = 0; i < parks.length; i++){
      const parkData = await Park.findOne({ where: { code: parks[i].parkCode }});
      const park = await parkData.get({ plain: true })
      console.log(park);
      if (parks[i].activities){
        for (let j = 0; j < parks[i].activities.length; j++){
          const activityData = await Activity.findOne({ where: { nps_id: parks[i].activities[j] }});
          if (activityData){
            const activity = await activityData.get({ plain: true });
            console.log(activity);
            await ParkActivity.create({ park_id: park.id, activity_id: activity.id});
          }
        }
      }
    }
    res.status(200);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;