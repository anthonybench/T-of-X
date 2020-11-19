const router = require('express').Router();
let Session = require('../models/session.model');
let User = require('../models/user.model');
let Counter = require('../models/counter.model');

router.route('/').get((req, res) => {
    // console.log(req.params);
    Session.find()
        .then(sessions => res.json(sessions))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:uid').get((req, res) => {
    Session.find( { "uid" : req.params.uid } )
        .then(sessions => res.json(sessions))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async function(req, res){
    let nextSession = Counter.find()
        .then(counters => { return counters[0].session + 1})
        .catch(err => res.status(400).json("Error: " + err));
    const sessionid = await nextSession;
    const sessionuserid = req.body.uid; // need another way to get uid
    const sessionduration = req.body.duration;
    const sessiondate = req.body.date;

    const newSession = new Session({
        id : sessionid,
        uid : sessionuserid,
        duration : sessionduration,
        date : sessiondate
    });

    Counter.updateOne({}, { $inc: { session: 1 } })
        .then(console.log("counter updated!"))
        .catch(err => res.status(400).json("Error: " + err));

    newSession.save()
        .then(() => res.json('Session added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;