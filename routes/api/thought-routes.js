const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controllers');

// /api/thought GET 
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/thought/:id GET PUT and DELETE
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);


// /api/thought/:thoughtId/reactions POST
router
  .route('/:thoughtId/reactions')
  .post(createReaction);

  // /api/thought/:thoughtId/reactions/:reactionId DELETE
  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;