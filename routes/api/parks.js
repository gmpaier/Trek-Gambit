const router = require("express").Router();
const parksController = require("../../controllers/booksController.js");

router.route("/")
  .get(parksController.findAll)
  .post(parksController.create);

router.route("/:id")
  .get(parksController.findById)
  .put(parksController.update)
  .delete(parksController.remove);

module.exports = router;