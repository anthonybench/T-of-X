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

// users params
let usernames = [
    "Eren",
    "Mikasa",
    "Armin",
    "Hannes",
    "Hanje",
    "Levi",
    "Erwin",
    "Jean",
    "Sasha",
    "Conni",
    "Riener",
    "Berthold",
    "Historia"
];
let nameInd = 0;
let username;
let nextId;
let userid;
let newStudent;
// session params
let sessionid;
let sessionuserid = 1;
let sessionduration = 30;
let sessiondateBeg = "2020-12-";
let sessiondateEnd = "T15:42:37.162Z";
let sessiondateDay = 10;
let sessiondate;
let newSession;
// time delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const delay = 1000;


try {
//================================
//============= USERS
//================================

    async.waterfall([
        async function() { //=============Student User 1
            username = usernames[nameInd];
            nameInd++;
            nextId = Counter.find()
                .then(counters => { return counters[0].user + 1 })
                .catch(err => console.log("Error: " + err));
            userid = await nextId;
            newStudent = new User({
                username: username,
                id : userid,
                isTeacher : false
            });
            Counter.updateOne({}, { $inc: { user: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newStudent.save()
                .then(console.log("User Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student User 2
            username = usernames[nameInd];
            nameInd++;
            nextId = Counter.find()
                .then(counters => { return counters[0].user + 1 })
                .catch(err => console.log("Error: " + err));
            userid = await nextId;
            newStudent = new User({
                username: username,
                id : userid,
                isTeacher : false
            });
            Counter.updateOne({}, { $inc: { user: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newStudent.save()
                .then(console.log("User Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student User 3
            username = usernames[nameInd];
            nameInd++;
            nextId = Counter.find()
                    .then(counters => { return counters[0].user + 1 })
                    .catch(err => console.log("Error: " + err));
            userid = await nextId;
            newStudent = new User({
                username: username,
                id : userid,
                isTeacher : false
            });
            Counter.updateOne({}, { $inc: { user: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newStudent.save()
                .then(console.log("User Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student User 4
            username = usernames[nameInd];
            nameInd++;
            nextId = Counter.find()
                    .then(counters => { return counters[0].user + 1 })
                    .catch(err => console.log("Error: " + err));
            userid = await nextId;
            newStudent = new User({
                username: username,
                id : userid,
                isTeacher : false
            });
            Counter.updateOne({}, { $inc: { user: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newStudent.save()
                .then(console.log("User Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student User 5
            username = usernames[nameInd];
            nameInd++;
            nextId = Counter.find()
                    .then(counters => { return counters[0].user + 1 })
                    .catch(err => console.log("Error: " + err));
            userid = await nextId;
            newStudent = new User({
                username: username,
                id : userid,
                isTeacher : false
            });
            Counter.updateOne({}, { $inc: { user: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newStudent.save()
                .then(console.log("User Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student User 6
            username = usernames[nameInd];
            nameInd++;
            nextId = Counter.find()
                    .then(counters => { return counters[0].user + 1 })
                    .catch(err => console.log("Error: " + err));
            userid = await nextId;
            newStudent = new User({
                username: username,
                id : userid,
                isTeacher : false
            });
            Counter.updateOne({}, { $inc: { user: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newStudent.save()
                .then(console.log("User Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student User 7
            username = usernames[nameInd];
            nameInd++;
            nextId = Counter.find()
                    .then(counters => { return counters[0].user + 1 })
                    .catch(err => console.log("Error: " + err));
            userid = await nextId;
            newStudent = new User({
                username: username,
                id : userid,
                isTeacher : false
            });
            Counter.updateOne({}, { $inc: { user: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newStudent.save()
                .then(console.log("User Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student User 8
            username = usernames[nameInd];
            nameInd++;
            nextId = Counter.find()
                    .then(counters => { return counters[0].user + 1 })
                    .catch(err => console.log("Error: " + err));
            userid = await nextId;
            newStudent = new User({
                username: username,
                id : userid,
                isTeacher : false
            });
            Counter.updateOne({}, { $inc: { user: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newStudent.save()
                .then(console.log("User Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student User 9
            username = usernames[nameInd];
            nameInd++;
            nextId = Counter.find()
                    .then(counters => { return counters[0].user + 1 })
                    .catch(err => console.log("Error: " + err));
            userid = await nextId;
            newStudent = new User({
                username: username,
                id : userid,
                isTeacher : false
            });
            Counter.updateOne({}, { $inc: { user: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newStudent.save()
                .then(console.log("User Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student User 10
            username = usernames[nameInd];
            nameInd++;
            nextId = Counter.find()
                    .then(counters => { return counters[0].user + 1 })
                    .catch(err => console.log("Error: " + err));
            userid = await nextId;
            newStudent = new User({
                username: username,
                id : userid,
                isTeacher : false
            });
            Counter.updateOne({}, { $inc: { user: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newStudent.save()
                .then(console.log("User Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student User 11
            username = usernames[nameInd];
            nameInd++;
            nextId = Counter.find()
                    .then(counters => { return counters[0].user + 1 })
                    .catch(err => console.log("Error: " + err));
            userid = await nextId;
            newStudent = new User({
                username: username,
                id : userid,
                isTeacher : false
            });
            Counter.updateOne({}, { $inc: { user: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newStudent.save()
                .then(console.log("User Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student User 12
            username = usernames[nameInd];
            nameInd++;
            nextId = Counter.find()
                    .then(counters => { return counters[0].user + 1 })
                    .catch(err => console.log("Error: " + err));
            userid = await nextId;
            newStudent = new User({
                username: username,
                id : userid,
                isTeacher : false
            });
            Counter.updateOne({}, { $inc: { user: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newStudent.save()
                .then(console.log("User Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student User 13
            username = usernames[nameInd];
            nameInd++;
            nextId = Counter.find()
                    .then(counters => { return counters[0].user + 1 })
                    .catch(err => console.log("Error: " + err));
            userid = await nextId;
            newStudent = new User({
                username: username,
                id : userid,
                isTeacher : false
            });
            Counter.updateOne({}, { $inc: { user: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newStudent.save()
                .then(console.log("User Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        }
    ],

    function(err, result) {
        if (!err) {
            console.log(result);
        }
    }
    );

//================================
//============= SESSIONS
//================================

    async.waterfall([
        async function() { //=============Student Session 1
            sessionuserid++;
            sessiondateDay++;
            sessiondate = `${sessiondateBeg}${sessiondateDay}${sessiondateEnd}`;
            nextSession = Counter.find()
                .then(counters => { return counters[0].session + 1 })
                .catch(err => console.log("Error: " + err));
            sessionid = await nextSession;
            newSession = new Session({
                id : sessionid,
                uid : sessionuserid,
                duration : sessionduration,
                date : sessiondate
            });
            Counter.updateOne({}, { $inc: { session: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newSession.save()
                .then(console.log("Session Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student Session 2
            sessionuserid++;
            sessiondateDay++;
            sessiondate = `${sessiondateBeg}${sessiondateDay}${sessiondateEnd}`;
            nextSession = Counter.find()
                .then(counters => { return counters[0].session + 1 })
                .catch(err => console.log("Error: " + err));
            sessionid = await nextSession;
            newSession = new Session({
                id : sessionid,
                uid : sessionuserid,
                duration : sessionduration,
                date : sessiondate
            });
            Counter.updateOne({}, { $inc: { session: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newSession.save()
                .then(console.log("Session Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student Session 3
            sessionuserid++;
            sessiondateDay++;
            sessiondate = `${sessiondateBeg}${sessiondateDay}${sessiondateEnd}`;
            nextSession = Counter.find()
                .then(counters => { return counters[0].session + 1 })
                .catch(err => console.log("Error: " + err));
            sessionid = await nextSession;
            newSession = new Session({
                id : sessionid,
                uid : sessionuserid,
                duration : sessionduration,
                date : sessiondate
            });
            Counter.updateOne({}, { $inc: { session: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newSession.save()
                .then(console.log("Session Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student Session 4
            sessionuserid++;
            sessiondateDay++;
            sessiondate = `${sessiondateBeg}${sessiondateDay}${sessiondateEnd}`;
            nextSession = Counter.find()
                .then(counters => { return counters[0].session + 1 })
                .catch(err => console.log("Error: " + err));
            sessionid = await nextSession;
            newSession = new Session({
                id : sessionid,
                uid : sessionuserid,
                duration : sessionduration,
                date : sessiondate
            });
            Counter.updateOne({}, { $inc: { session: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newSession.save()
                .then(console.log("Session Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student Session 5
            sessionuserid++;
            sessiondateDay++;
            sessiondate = `${sessiondateBeg}${sessiondateDay}${sessiondateEnd}`;
            nextSession = Counter.find()
                .then(counters => { return counters[0].session + 1 })
                .catch(err => console.log("Error: " + err));
            sessionid = await nextSession;
            newSession = new Session({
                id : sessionid,
                uid : sessionuserid,
                duration : sessionduration,
                date : sessiondate
            });
            Counter.updateOne({}, { $inc: { session: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newSession.save()
                .then(console.log("Session Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student Session 6
            sessionuserid++;
            sessiondateDay++;
            sessiondate = `${sessiondateBeg}${sessiondateDay}${sessiondateEnd}`;
            nextSession = Counter.find()
                .then(counters => { return counters[0].session + 1 })
                .catch(err => console.log("Error: " + err));
            sessionid = await nextSession;
            newSession = new Session({
                id : sessionid,
                uid : sessionuserid,
                duration : sessionduration,
                date : sessiondate
            });
            Counter.updateOne({}, { $inc: { session: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newSession.save()
                .then(console.log("Session Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student Session 7
            sessionuserid++;
            sessiondateDay++;
            sessiondate = `${sessiondateBeg}${sessiondateDay}${sessiondateEnd}`;
            nextSession = Counter.find()
                .then(counters => { return counters[0].session + 1 })
                .catch(err => console.log("Error: " + err));
            sessionid = await nextSession;
            newSession = new Session({
                id : sessionid,
                uid : sessionuserid,
                duration : sessionduration,
                date : sessiondate
            });
            Counter.updateOne({}, { $inc: { session: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newSession.save()
                .then(console.log("Session Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student Session 8
            sessionuserid++;
            sessiondateDay++;
            sessiondate = `${sessiondateBeg}${sessiondateDay}${sessiondateEnd}`;
            nextSession = Counter.find()
                .then(counters => { return counters[0].session + 1 })
                .catch(err => console.log("Error: " + err));
            sessionid = await nextSession;
            newSession = new Session({
                id : sessionid,
                uid : sessionuserid,
                duration : sessionduration,
                date : sessiondate
            });
            Counter.updateOne({}, { $inc: { session: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newSession.save()
                .then(console.log("Session Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student Session 9
            sessionuserid++;
            sessiondateDay++;
            sessiondate = `${sessiondateBeg}${sessiondateDay}${sessiondateEnd}`;
            nextSession = Counter.find()
                .then(counters => { return counters[0].session + 1 })
                .catch(err => console.log("Error: " + err));
            sessionid = await nextSession;
            newSession = new Session({
                id : sessionid,
                uid : sessionuserid,
                duration : sessionduration,
                date : sessiondate
            });
            Counter.updateOne({}, { $inc: { session: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newSession.save()
                .then(console.log("Session Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student Session 10
            sessionuserid++;
            sessiondateDay++;
            sessiondate = `${sessiondateBeg}${sessiondateDay}${sessiondateEnd}`;
            nextSession = Counter.find()
                .then(counters => { return counters[0].session + 1 })
                .catch(err => console.log("Error: " + err));
            sessionid = await nextSession;
            newSession = new Session({
                id : sessionid,
                uid : sessionuserid,
                duration : sessionduration,
                date : sessiondate
            });
            Counter.updateOne({}, { $inc: { session: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newSession.save()
                .then(console.log("Session Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student Session 11
            sessionuserid++;
            sessiondateDay++;
            sessiondate = `${sessiondateBeg}${sessiondateDay}${sessiondateEnd}`;
            nextSession = Counter.find()
                .then(counters => { return counters[0].session + 1 })
                .catch(err => console.log("Error: " + err));
            sessionid = await nextSession;
            newSession = new Session({
                id : sessionid,
                uid : sessionuserid,
                duration : sessionduration,
                date : sessiondate
            });
            Counter.updateOne({}, { $inc: { session: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newSession.save()
                .then(console.log("Session Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student Session 12
            sessionuserid++;
            sessiondateDay++;
            sessiondate = `${sessiondateBeg}${sessiondateDay}${sessiondateEnd}`;
            nextSession = Counter.find()
                .then(counters => { return counters[0].session + 1 })
                .catch(err => console.log("Error: " + err));
            sessionid = await nextSession;
            newSession = new Session({
                id : sessionid,
                uid : sessionuserid,
                duration : sessionduration,
                date : sessiondate
            });
            Counter.updateOne({}, { $inc: { session: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newSession.save()
                .then(console.log("Session Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        },
        async function() { //=============Student Session 13
            sessionuserid++;
            sessiondateDay++;
            sessiondate = `${sessiondateBeg}${sessiondateDay}${sessiondateEnd}`;
            nextSession = Counter.find()
                .then(counters => { return counters[0].session + 1 })
                .catch(err => console.log("Error: " + err));
            sessionid = await nextSession;
            newSession = new Session({
                id : sessionid,
                uid : sessionuserid,
                duration : sessionduration,
                date : sessiondate
            });
            Counter.updateOne({}, { $inc: { session: 1 } })
                .then(console.log("counter updated!"))
                .catch(err => console.log("Error: " + err));
            newSession.save()
                .then(console.log("Session Added!"))
                .catch(err => console.log("Error: " + err));
            await sleep(delay);
        }
    ],

    function(err, result) {
        if (!err) {
            console.log(result);
        }
    }
    );
} catch(err) {
    console.log("Please verify that your test data has populated the database.");
    console.log(`MongoDB Response: ${err}`);
}
