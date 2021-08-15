const { link } = require('../model');
const { randomString } = require('../../helper');
const mongoose = require('mongoose');

module.exports = (async (url, remoteAddress, headers) => {



    if(!url.includes('https://') && !url.includes('http://')) url = "https://" + url;

    // check to see if we are using https or http
    let http = url.includes('https://') ? 'https://' : 'http://';

    // explode the string on our http type
    let exploded = url.split(http);
    exploded = exploded[1] || exploded[0]
    let path = exploded.split('/');
    let base = path[0];
    
    let queryObject = { url : url };
    
    // if it was already shortend by us then get the query object
    if(base === process.env.APP_HOSTNAME) queryObject = { token : path[1] };
    
    let query = await link.findOne(queryObject);
    
    // Return if someone is trying to put in a key that doesnt exist
    if(!query && base === process.env.APP_HOSTNAME) return;
    if(query) return query.token;

    let token = randomString(process.env.APP_TOKEN_SIZE);
    
    const newLink = new link({
        _id: mongoose.Types.ObjectId(),
        // URL token
        token: token,
        // redirect url
        url: url,
        // IP of the creator
        creator: remoteAddress,
        // Request headers
        headers: headers,
        // How many people have used this url
        visits: 0,
    });
    
    return await newLink.save()
    .then((result) => { return token; })
    .catch((error) => { console.error(error); return; });
});