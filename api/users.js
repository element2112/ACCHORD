const express = require('express');
const router = express.Router();

// User model
const User = require('./models/user.model');


router.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// @route GET api/users
// @desc Get all users
// @access Public
router.get('/searchuser', (req, res) => {
	console.log("GETTING ALL USERS");
	User.find()
		.sort({lastName: 1})
		.then(users => res.json(users))
});

// @route POST api/users
// @desc Create an user
// @access Public - normally private
router.post('/registeruser', (req, res) => {
	console.log("ADDING USER");
	const newUser = new User({
		email: req.body.email,
		password: req.body.password,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		timestamps: true
	});

	newUser.save().then(user => res.json(user));
	console.log("USER ADDED");
});

// @route DELETE api/users/:id
// @desc Delete an user
// @access Public
router.delete('/removeuser/:id', (req, res) => {
	console.log("DELETING USER");
	User.findById(req.params.id)
		.then(user => user.remove().then(() => res.json({success: true})))
		.catch(err => res.status(404).json({success: false}));
});

module.exports = router;