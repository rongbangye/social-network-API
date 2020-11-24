const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought.controller");

// get all thoughts
router.route("/").get(getAllThoughts);
// create a thoguht
router.route("/:userId").post(createThought);
// get thought by ID
router.route("/:id").get(getThoughtById);
// update a thought and delete a thought
router.route("/:userId/:thoughtId").put(updateThought).delete(deleteThought);

module.exports = router;
