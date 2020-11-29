const router = require('express').Router();
let Session = require('../models/session.model');
let User = require('../models/user.model');
let Counter = require('../models/counter.model');

router.route('/').get((req, res) => {
    Session.find()
        .then(res.header("Access-Control-Allow-Origin", "*"))
        .then(sessions => res.json(sessions))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:uid').get((req, res) => {
    Session.find( { "uid" : req.params.uid } )
        .then(res.header("Access-Control-Allow-Origin", "*"))
        .then(sessions => res.json(sessions))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/user/:username').get((req, res) => {
    User.find( { username : req.params.username } )
        .then(res.header("Access-Control-Allow-Origin", "*"))
        .then(async function(users) {
            if (users.length == 0) {
                let nextId = Counter.find()
                    .then(counters => { return counters[0].user + 1 })
                    .catch(err => res.status(400).json("Error: " + err));
                const userid = await nextId;
                const username = req.params.username;
                const useristeacher = false;

                const newUser = new User({
                    username : username,
                    id : userid,
                    isTeacher : useristeacher
                });

                await Counter.updateOne({}, { $inc: { user: 1 } })
                    .then(console.log("counter updated!"))
                    .catch(err => res.status(400).json("Error: " + err));

                await newUser.save()
                    .then(() => res.json('User added!'))
                    .catch(err => res.status(400).json('Error: ' + err));

                let respkg = {
                    username: username,
                    id: userid
                }
                res.json(respkg);
            } else {
                Session.find( { "uid" : users[0].id } )
                    .then(sessions => res.json(sessions))
                    .catch(err => res.status(400).json('Error: ' + err));
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async function(req, res) {
    let nextSession = Counter.find()
        .then(res.header("Access-Control-Allow-Origin", "*"))
        .then(counters => { return counters[0].session + 1})
        .catch(err => res.status(400).json("Error: " + err));
    const sessionid = await nextSession;
    const sessionuserid = req.body.uid;
    const sessionduration = req.body.duration;
    const sessiondate = req.body.date;

    const newSession = new Session({
        id : sessionid,
        uid : sessionuserid,
        duration : sessionduration,
        date : sessiondate
    });

    await Counter.updateOne({}, { $inc: { session: 1 } })
        .then(res.header("Access-Control-Allow-Origin", "*"))
        .then(console.log("counter updated!"))
        .catch(err => res.status(400).json("Error: " + err));

    await newSession.save()
        .then(res.header("Access-Control-Allow-Origin", "*"))
        .then(() => res.json('Session added!'))
        .catch(err => res.status(400).json('Error: ' + err));

    let respkg = {
        id : sessionid,
        uid: sessionuserid,
        duration: sessionduration,
        date : sessiondate
    }

    res.json(respkg);
});

router.route('/delete').delete( async function (req, res) {
    await Session.deleteOne({ id: req.body.id })
        .then(res.header("Access-Control-Allow-Origin", "*"))
        .then(console.log("Session deleted!"))
        .catch(err => console.log("Error: " + err));

    let respkg = {
        id : req.body.id
    }

    res.json(respkg);
});

module.exports = router;