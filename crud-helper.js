// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
// const User = require('./models/user');
// const Item = require('./models/item');
const Group = require('./models/group');


(async function getAllYears() {
    const allYears = await Group.find({name: 'Blue Devils'})
    console.log(allYears)
})()

