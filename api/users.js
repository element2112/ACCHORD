const express = require('express');
const router = express.Router();

// User model
const User = require('./models/user.model');

// @route GET api/users
// @desc Get all users
// @access Public
router.get('/searchuser', (req, res) => {
	User.find()
		.sort({firstName: 1})
		.then(users => res.json(users))
});

// @route POST api/users
// @desc Create an user
// @access Public - normally private
router.post('/adduser', (req, res) => {
	const newUser = new User({
		email: req.body.email,
		password: req.body.password,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		timestamps: true
	});

	newUser.save().then(user => res.json(user));
});

// @route DELETE api/users/:id
// @desc Delete an user
// @access Public
router.delete('/removeuser/:id', (req, res) => {
	User.findById(req.params.id)
		.then(user => user.remove().then(() => res.json({success: true})))
		.catch(err => res.status(404).json({success: false}));
});

module.exports = router;