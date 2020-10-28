const mongoose = required('mongoose');

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    id: { type: Number, required: true, uniqui: true},
    uid: { type: Number, required: true, uniqui: true},
    duration: { type: Number, required: true},
    date: { type: Date, required: true},
}, {
    timestamps: true,
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
