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
 }, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;