const router = require('express').Router();
let User = require('../models/user.model');
let Counter = require('../models/counter.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:uid').get((req, res) => {
    User.find( { "id" : req.params.uid } )
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/add').post(async function(req, res) {
    let nextId = Counter.find()
        .then(counters => { return counters[0].user + 1 })
        .catch(err => res.status(400).json("Error: " + err));
    const userid = await nextId;
    const username = req.body.username;
    const useristeacher = false;

    const newUser = new User({
        username : username,
        id : userid,
        isTeacher : useristeacher
    });

    Counter.updateOne({}, { $inc: { user: 1 } })
        .then(console.log("counter updated!"))
        .catch(err => res.status(400).json("Error: " + err));

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').delete(async function(req, res) {
    User.deleteOne({ id: req.body.id })
        .then(console.log("User deleted!"))
        .catch(err => console.log("Error: " + err));

    res.json(`[{id: ${req.body.id}}]`);
});

module.exports = router;