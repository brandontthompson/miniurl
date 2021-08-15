const { link, visit } = require('../model');
const mongoose = require('mongoose');

module.exports = (async (token, remoteAddress, headers) => { 
    let query = await link.findOne({ 'token' : token });

    if(!query) return;

    await link.findByIdAndUpdate(query._id, { visits: ++query.visits, });

    let newVisit = new visit({
        _id : mongoose.Types.ObjectId(),
        visitor: remoteAddress,
        headers: headers,
        token: token,
    });

    await newVisit.save();
    return query.url;
});