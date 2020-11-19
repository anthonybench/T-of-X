const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const counterSchema = new Schema({
    session: { type: Number, required: true, unique: true},
    user: { type: Number, required: true, unique: true}
}, {
    timestamps: true,
});

const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;