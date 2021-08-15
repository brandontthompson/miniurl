const mongoose = require('mongoose');

module.exports = ((next) => {
    // let uri = `${ process.env.DB_DRIVER }://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    let uri = `${ process.env.DB_DRIVER }://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    console.log(uri);
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        .then((result) => { 
            console.log(`Database connection successful!\nNAME:${process.env.DB_NAME}\nPORT:${process.env.DB_PORT}`);
            next();
        })
        .catch((error) => { console.error(error); });
});