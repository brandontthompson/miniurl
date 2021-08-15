const mongoose = require('mongoose');
const schema = mongoose.Schema;

const visitSchema = new schema({
    _id: mongoose.Schema.Types.ObjectId,
    // this is the IP of the visitor
    visitor: String,
    // Request headers
    headers: String,
    // URL they visit
    token: String,
});

const visit = mongoose.model('Visit', visitSchema);
module.exports = visit;
