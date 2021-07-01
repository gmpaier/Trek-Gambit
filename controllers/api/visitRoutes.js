const router = require('express').Router();
const { Visit, VisitActivity } = require('../../models');

router.get("/", async (req, res) => {
  try {
    const visitData = await Visit.findAll({ include: VisitActivity });
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
    const visitData = await Visit.findAll({where: {park_id: req.params.id}, include: VisitActivity});
    const visits = visitData.map((visit) => visit.get({ plain: true }));
    res.status(200).json(visits);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.get("/myVisits", async (req, res) => {
  try {
    const visitData = await Visit.findAll({where: { user_id: req.session.user_id}, include: VisitActivity});
    const visits = visitData.map((visit) => visit.get({ plain: true }));
    res.status(200).json(visits);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req,res) => {
  try {
    const visitData = await Visit.create({user_id: req.session.user_id, park_id: req.body.park_id, body: req.session.body});
    const visit = await visitData.get({ plain: true });
    res.status(200).json(visit);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;