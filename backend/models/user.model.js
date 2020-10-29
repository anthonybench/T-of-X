const mongoose = required('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: Number, required: true, unique: true},
    username: { type: String, required: true },
    isTeacher: { type: Boolean, required: true },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;