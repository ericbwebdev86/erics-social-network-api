const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend
} = require('../../controllers/user-controller');

// /api/user GET and POST
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/user/:id GET PUT and DELETE
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  // /api/users/:userId/friends/:userId (friend) POST and DELETE
  router
  .route('/:id/friends/:friendId')
  .post(createFriend)
  .delete(deleteFriend);

module.exports = router;
