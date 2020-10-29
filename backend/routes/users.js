const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const userid = Math.floor((Math.random() * 100) + 1); // go through users and get the next id no.
    const username = req.body.username;
    const useristeacher = req.body.isTeacher;

    const newUser = new User({
        username : username,
        id : userid,
        isTeacher : useristeacher
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;