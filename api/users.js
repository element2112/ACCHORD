const express = require('express');
const router = express.Router();

// User model
const User = require('./models/user.model');

const chords = require('./chords');


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
        res.status(500).json({error: "Email already registered."});
    }, err => {
      newUser.save()
      .then(user => {
        console.log("USER ADDED");
        res.json(user)
      });
    });
});

// @route POST api/users
// @desc Attempt login as existing user
// @access Public - normally private
router.post('/login', async (req, res) => {
	console.log("ATTEMPTING LOGIN");
  console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;
  let returnJson = {login: false, user: {}};
  await User.findByEmail(email)
		.then(user => {
  // TODO: use req.body.remember to remember user
      if (user.password === password) {
        // proceed to login
        returnJson.login = true;
        
        // for security, we don't return the whole user object from db
        returnJson.user.email = user.email;
        returnJson.user.password = user.password;
        returnJson.user.firstName = user.firstName;
        returnJson.user.lastName = user.lastName;
      }else{
        // handle password incorrect (no action necessary)
      }
    }, err => {
      // handle email not found error (no action necessary)
      console.log("ERROR: " + err);
  });
  // end await
  res.json(returnJson);
});

// @route GET api/users
// @desc Get all users
// @access Public
router.get('/songs', async (req, res) => {
  console.log("GETTING SONGS IN USERS");
  console.log("REQUESTING CP=" + req.body.cp);

  await chords.getSongs(req.body.cp).then(data => res.send(data));
	
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