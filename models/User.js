const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      match: [/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, 'Please enter an email address.']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);


const User = model('Pizza', UserSchema);
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

module.exports = User;
