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

// /api/thoughts GET 
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/thoughts/:id GET PUT and DELETE
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:userId POST
// router
// .route('/:userId');


// /api/thoughts/:thoughtId/reactions POST
router
  .route('/:thoughtId/reactions')
  .post(createReaction);

  // /api/thoughts/:thoughtId/reactions/:reactionId DELETE
  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;