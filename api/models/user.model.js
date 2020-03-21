const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// setting schema for user model
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: false,
        minlength: 5
    }, 
    firstName: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    bio: {
      type: String,
      trim: true
    },
    messages: {
      type: String,
      trim: true
    }
 }, {
    timestamps: true,
});

userSchema.statics.findByEmail = function(email){
  console.log("HI " + email);
  return this.findOne({email: email})
  .then(user => {
    if (user == null) {
      return Promise.reject("User with email [" + email + "] not found.");
    } else {
      return Promise.resolve(user);
    }
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;