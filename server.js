const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const users = require('./api/users');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/users', users);

// commented out mongoose until db is connected

// in the package.json for backend, I added scripts that do the following
// * npm run dev-server keeps the backend server running on port 4000. everytime you save
// it restarts the server. This is easier so you don't have to run "npm run server" every time you make a change
// * npm run start runs both the frontend and backend servers together

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

const path = require('path');
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});