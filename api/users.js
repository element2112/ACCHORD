const express = require('express');
const router = express.Router();

// User model
const User = require('./models/user.model');




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
router.post('/registeruser', async (req, res) => {
	console.log("ADDING USER");
	const newUser = new User({
		email: req.body.email,
		password: req.body.password,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		timestamps: true
	});

	// may need to add an error or check if theres a duplicate user
  
  User.findByEmail(req.body.email)
		.then(user => {
        console.log("USER NOT ADDED, FOUND USER IN DB");
    }, err => {
      newUser.save()
      .then(user => {
        console.log("USER ADDED");
        res.json(user)
      });
    });
});

// @route POST api/users
// @desc Create an user
// @access Public - normally private
router.post('/login', async (req, res) => {
	console.log("ATTEMPTING LOGIN");
  console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;
  let login = false;
  await User.findByEmail(email)
		.then(user => {
      console.log("EMAIL MATCH FOUND IN DB");
      console.log(user);
      if (user.password === password) {
        // proceed to login
        console.log("login match! part 1");
        login = true;
      }else{
        console.log("INCORRECT PASSWORD");
      }
    }, err => console.log("ERROR: " + err));
  console.log(login);
  res.json({login: login});
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