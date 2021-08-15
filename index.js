require('dotenv').config();
(() => {
    require('./src/server').start(process.argv.slice(2));
})();