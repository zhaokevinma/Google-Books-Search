// ------ Dependencies ------

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


// ------ Schema ------

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: [{
        type: String,
        required: true
    }],
    description: {
        type: String
    },
    image: {
        type: String,
        trim: true
    },
    link: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('Book', BookSchema);


// ------ Export Book ------
module.exports = Book;
