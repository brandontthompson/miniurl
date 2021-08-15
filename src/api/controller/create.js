const { create } = require('../service');
const { remoteAddress } = require('../../helper');

module.exports = ((req, res) => {

    //@TODO: need to check if its already a tiny link from this site

    if(!req.body.url) return res.status(400).end();
    create(req.body.url, remoteAddress(req), req.headers['user-agent'])
    .then((result) => {

        if(!result) return res.status(500).end();

        let url = `http://${process.env.APP_HOSTNAME}/${result}`;
        res.status(200).send({ url });
    })
    .catch((error) => {
        console.error(error);
        res.status(500).end();
    });    
});