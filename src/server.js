// Require the config (since this is run by dotenv it will do all of the set up and we dont have to save it to a var)
require('./config');

const fs = require('fs');
const privateKey = fs.readFileSync(process.env.CERT_KEY);
const certificate = fs.readFileSync(process.env.CERT_CERT);

const credentials = { key: privateKey, cert: certificate, passphrase: process.env.CERT_PASS };

const express = require('express');
const app = express();
const https = require('https').createServer(credentials, app);
const database = require('./database');

// Load middlewares
require('./api/middleware')(app);
app.use('/', require('./api/router'));

exports.start = ((argv) => {
    let port = process.env.APP_PORT || argv[0]
    database((() => {
        https.listen(port, () => {
            console.log(`Server running! port:${port}`)
        });
    }));    
});
