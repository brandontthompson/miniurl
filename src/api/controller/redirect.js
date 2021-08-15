const { redirect } = require('../service');
const { remoteAddress } = require('../../helper');

module.exports = ((req, res) => {
    redirect(req.params.token, remoteAddress(req), req.headers['user-agent'])
    .then((result) => {
        if(!result) return res.status(404).end();

        res.redirect(301, result);

        // @TODO: make redirect page so they can abort
        // res.status(302).send(result);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).end();
    });
});