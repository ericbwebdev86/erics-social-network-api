const { User, Thought } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
      User.find()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },
  
    // get one user via id
    getUserById({ params }, res) {
      User.findOne({ _id: params.id })
        .populate({
          path: 'thoughts',
          select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
          })
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
              }
              res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
  
    // create a user
    createUser({ body }, res) {
      User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },
  
    // update user by id
    updateUser({ params, body }, res) {
      User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
  
    // delete user
    deleteUser({ params }, res) {
      User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
    },
    //create a friend
    createFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id},
            { $push: { friend: params.friendId } }, 
            { new: true})
            .populate({
                path: 'friends',
                select: '-__v'
              })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                  }
                  res.json(dbUserData);
                })
                .catch(err => res.json(err));
    },
    //delete a friend
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id},
            { $pull: { friend: params.friendId } }, 
            { new: true})
            .populate({
                path: 'friends',
                select: '-__v'
              })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                  }
                  res.json(dbUserData);
                })
                .catch(err => res.json(err));
    }
  };

module.exports = userController;