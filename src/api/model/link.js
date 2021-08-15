const mongoose = require('mongoose');
const schema = mongoose.Schema;

const linkSchema = new schema({
    _id: mongoose.Schema.Types.ObjectId,
    // id of the URL and the shortened URL
    token: String,
    // redirect url
    url: String,
    // IP of the creator
    creator: String,
    // Request headers
    headers: String,
    // How many people have used this url
    visits: Number,
}, { timestamps: true });

const Link = mongoose.model('Link', linkSchema);
module.exports = Link;