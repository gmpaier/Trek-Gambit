const router = require('express').Router();
const { ParkActivity, Park, Activity } = require('../../models');

router.post("/bulk", async (req, res) => {
  try {
    const parks = req.body;
    const parkActivities = [];
    for (let i = 0; i < parks.length; i++){
      const park = await Park.findOne({ where: { code: parks[i].parkCode }});
      for (let j = 0; j < parks[i].activities.length; j++){
        const activity = await Activity.findOne({ where: { nps_id: parks[i].activities[j].id }});
        if (park && activity){
          const newPair = await park.addActivity(activity);
          parkActivities.push(newPair);
        }
      }
    }
    res.status(200).json(parkActivities);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;