const {Thought, User} = require('../models');

const thoughtController = {
    // get all thoughts
    getAllThoughts(req, res) {
      Thought.find({})
        .populate({
          path: 'user',
          select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },
  
    // get one thought via id
    getThoughtById({ params }, res) {
      Thought.findOne({ _id: params.id })
        .populate({
          path: 'user',
          select: '-__v'
        })
        .select('-__v')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },
  
    // create a thought
    createThought({ params, body }, res) {
      Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { username: body.username},
                { $push: { thought: _id } },
                { new: true }
                );
        }).then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No users matching this ID.' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
  
    // update a thought via id
    updateThought({ params, body }, res) {
      Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbThoughtData => {
          if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought matches that id!' });
            return;
          }
          res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },
  
    // delete a thought
    deleteThought({ params, body }, res) {
      Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'No thought matches that ID'})
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },
    //add a reaction
    addReaction ({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reaction: body} },
            { new: true, runValidators: true}
        )
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'No thought matches that ID' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },
    //delete a reaction
    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reaction: {reactionId: params.reactionId } } },
            { new: true, runValidators: true }
        )
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.json(err));
    }
  }

  

module.exports = thoughtController;