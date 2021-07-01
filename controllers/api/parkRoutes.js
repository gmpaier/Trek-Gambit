const router = require("express").Router();
const { Park } = require('../../models');

router.get("/", async (req, res) => {
  try {
    const parkData = await Park.findAll();
    const parks = parkData.map((park) => park.get({ plain: true }));
    res.status(200).json(parks);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const parkData = await Park.findOne({where: { code: req.params.id}});
    if (parkData){
      const park = parkData.get({ plain: true })
      res.status(200).json(park);
    }
    res.status(404);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.post("/bulk", async (req, res) => {
  try {
    const parksIn = req.body;
    const parks = await Park.bulkCreate(parksIn);
    res.status(200).json(parks);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;