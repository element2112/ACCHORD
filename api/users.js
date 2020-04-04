const express = require('express');
const router = express.Router();

// User model
const User = require('./models/user.model');

const chords = require('./chords');

// @route PUT api/users
// @desc Update user
// @access Public
router.put('/updateuser', async (req, res) => {
  console.log("Update User");
  let user;
  console.log(req.body);
  try {
    user = await User.findByEmail(req.body.email);
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.password = req.body.password;
    user.bio = req.body.bio;

    console.log("updated!");
    await user.save();
  }
  catch {
    if (user == null) {
      console.log("no user");
    }
    else {
      console.log("error updating!");
    }
  }
  return user;
});

// @route DELETE api/users
// @desc Delete current user
// @access Public

router.delete('/deleteuser', async (req, res) => {
  console.log("in delete!");

// TODO: check that user was deleted
  console.log(req.body);
  User.findByEmail(req.body.email).then(user => {
    console.log(user);
    user.remove().then(() => {
    });
    
  }, err => {
    console.log(err);
  });

  res.status(200).send();
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
router.post('/registeruser', async (req, res) => {
	console.log("ADDING USER");
	const newUser = new User({
		email: req.body.email,
		password: req.body.password,
		firstName: req.body.firstName,
    lastName: req.body.lastName,
    messages: ['This is a default message.'],
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

// @route POST api/users
// @desc Get songs with chord prog
// @access Public
router.post('/songs', async (req, res) => {
  console.log("GETTING SONGS IN USERS");
  console.log("REQUESTING CP=" + req.body.cp);

  await chords.getSongs(req.body.cp).then(data => res.send(data)).catch(err => console.error(err));
	
});

// @route GET api/users
// @desc Gets user's message
// @access Public
router.post('/messages', (req, res) => {
  console.log("Getting your messages!");
  console.log("This is the req.body: \n" + JSON.stringify(req.body));

  User.findByEmail(req.body.email)
  .then(user => {
    console.log("Here are the messages : " + user.messages);
    res.json(user.messages);
  });
  	
});

// @route POST api/users
// @desc Adds message
// @access Public
router.post('/addmessages', (req, res) => {
  console.log("Leaving a message (route)!");
  console.log("Message : " + JSON.stringify(req.body.newMessage));

  // this should always be found
  User.updateOne({email:req.body.email}, {$push: {messages: req.body.newMessage}})
  .then((success) => {
    User.findByEmail(req.body.email)
    .then(user => {
      console.log("user.messages is now: " + JSON.stringify(user.messages));
      res.json(user.messages);
    });
  })
});

// @route POST api/users
// @desc Removes indexed message
// @access Public
router.post('/removemessages', (req, res) => {
  console.log("Deleting a message (route)!");
  console.log("Message index: " + JSON.stringify(req.body.messageIndex));

  // this should always be found
  User.findByEmail(req.body.email)
    .then(user => {
      let messages = [];
      for (i = 0; i < user.messages.length; i++)
      {
        if (i == req.body.messageIndex) continue;
        messages.push(user.messages[i]);
      }
      user.messages = messages;
      user.save(); //async
      console.log("user.messages is now: " + JSON.stringify(user.messages));
      res.json(user.messages);
    });
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