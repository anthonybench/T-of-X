const router = require('express').Router();
let Session = require('../models/session.model');

router.route('/').get((req, res) => {
    Session.find()
        .then(sessions => res.json(sessions))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const sessionid = Math.floor((Math.random() * 100) + 1); // go through sessions and get the next id no.
    const sessionuserid = req.body.uid;
    const sessionduration = req.body.duration;
    const sessiondate = req.body.date;

    const newSession = new Session({
        id : sessionid,
        uid : sessionuserid,
        duration : sessionduration,
        date : sessiondate
    });

    newSession.save()
        .then(() => res.json('Session added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;