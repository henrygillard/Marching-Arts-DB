const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: String,
    year: {type: Schema.Types.ObjectId, ref: "Year"},
});

module.exports = mongoose.model('Category', categorySchema);