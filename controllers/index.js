const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashBoardRoutes = require('./dashBoardRoutes');

router.use('/', homeRoutes);
router.use('/dashBoard', dashBoardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
