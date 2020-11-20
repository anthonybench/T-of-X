const mongoose = require('mongoose');
let User = require('../models/user.model');
let Session = require('../models/session.model');
let Counter = require('../models/counter.model');
let async = require('async');
require('dotenv').config(); //enviornment variables in .env

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// purge sessions
Session.deleteMany({ id: { $gte: 1 } })
    .then(console.log("All sessions deleted!"))
    .catch(err => console.log("Error: " + err));

// purge all users but teacher
User.deleteMany({ id: { $gte: 2 } })
    .then(console.log("All students deleted!"))
    .catch(err => console.log("Error: " + err));

// reset counter
Counter.updateOne({}, { session: 0, user: 1})
    .then(console.log("counter updated!"))
    .catch(err => console.log("Error: " + err));