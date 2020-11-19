const router = require('express').Router();
let Counter = require('../models/counter.model');

router.route('/').get((req, res) => {
    Counter.find()
        .then(counters => res.json(counters))
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;