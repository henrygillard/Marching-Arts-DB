const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yearSchema = new Schema({
    year: String,
    videoUrl: [String],
    
})


const groupSchema = new Schema({
    name: {type: String},
    years: [yearSchema],
    category: {
        type: String,
        default: "DCI"
    }, 
    videoUrl: [String],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true
});


module.exports = mongoose.model('Group', groupSchema);
