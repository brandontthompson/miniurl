const router = require('express').Router();
const { debug, create, redirect } = require('../controller');

router.get('/', debug);
router.get('/:token', redirect);
router.post('/', create);

module.exports = router;