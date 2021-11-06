const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yearSchema = new Schema({
    year: String,
    videoUrl: [String],
    group: {type: String},
    category: { type: Schema.Types.ObjectId, ref: "Category"},
})

module.exports = mongoose.model('Year', yearSchema);