const router = require("express").Router();
const { Park } = require('../../models');

router.post("/bulk", async (req, res) => {
  try {
    const parksIn = req.body;
    // console.log(parksIn);
    // const parksMap = parksIn.map((park) => {
    //   const parkOut = {
    //     name: park.name,
    //     code: park.parkCode
    //   }
    //   return parkOut;
    // });
    const parks = await Park.bulkCreate(parksIn);
    res.status(200).json(parks);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;