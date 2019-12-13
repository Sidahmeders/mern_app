const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    about: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
