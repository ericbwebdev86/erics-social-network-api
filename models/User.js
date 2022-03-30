const { Schema, model } = require('mongoose');

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
      required: true
    },
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);


const User = model('Pizza', UserSchema);

module.exports = User;
