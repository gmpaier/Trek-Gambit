const router = require('express').Router();
const { Visit, User} = require('../../models');
const sequelize = require('sequelize');


router.get("/", async (req, res) => {
  try {
    const visitData = await Visit.findAll({ include: User });
    const visits = visitData.map((visit) => visit.get({ plain: true }));
    res.status(200).json(visits);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const visitData = await Visit.findByPk(req.params.id);
    const visit =  visitData.get({ plain: true });
    res.status(200).json(visit);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

//currently this requires the parks id that corresponds to our database; perhaps park code would be better
router.get("/park/:id", async (req, res) => {
  try {
    const visitData = await Visit.findAll({where: {park_id: req.params.id} });
    const visits = visitData.map((visit) => visit.get({ plain: true }));
    res.status(200).json(visits);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.get("/myVisits/:id", async (req, res) => {
  try {
    console.log("req.body: "+ req.params.id)
    const visitData = await Visit.findAll({
      include: User,
      where: {
        user_id: req.params.id
      }});
    const visits = visitData.map((visit) => visit.get({ plain: true }));
    res.status(200).json(visits);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.get("/byUser", async (req, res) => {
  try {
    const countData = await User.findAll({
      attributes: { 
        include: [[Sequelize.fn("COUNT", Sequelize.col("visit.id")), "visitCount"]] 
    },
    include: [{
        model: Visit, attributes: []
    }],
  });
    const counts = countData.map((user) => user.get({ plain: true }));
    res.status(200).json(counts);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.get("/byPark", async (req, res) => {
  try {
    console.log("in By Park")
    const visitData = await Visit.findAll({
      attributes: [
        'park',
        [sequelize.fn('COUNT', sequelize.col('id')), 'visitCount']
      ],
      group: ['park'],
      order: [
        [sequelize.fn('COUNT', sequelize.col('id')), 'desc']
      ] 
  });
    const visits = visitData.map((visit) => visit.get({ plain: true }));
    res.status(200).json(visits);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req,res) => {
  try {
    let visitData = req.body;
    console.log(req.body)
    // if (req.session){
    //   visitData.user_id = req.session.user_id
    // }
    await Visit.create(visitData);
    console.log("visit post successful");
    res.status(200).json(visitData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;