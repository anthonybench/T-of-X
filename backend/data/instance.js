//===============================================================//
/* PLACE TEACHER NAME FOR 'USER' DATABASE COLLECTION HERE */
//===============================================================//
const username = "Isaac Yep"; // Teacher username
//===============================================================//


const mongoose = require('mongoose');
const Counter = require('../models/counter.model');
let User = require('../models/user.model');

require('dotenv').config(); //enviornment variables in .env

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const userid = 1; // start user id assignment with teacher as 1
const useristeacher = true;

const newUser = new User({
    username : username,
    id : userid,
    isTeacher : useristeacher
});

const newCounter = new Counter({
    session: 0,
    user: 1
});

try {
    newUser.save();
    newCounter.save();
} catch(err) {
    console.log("Please verify your teacher has been added to the 'users' database collection.");
}