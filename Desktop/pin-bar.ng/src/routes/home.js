const router = require('express').Router();

const {
   HttpHome,
   undefinedRoutes,
   HttpGetHomes,
   HttpPostNewHome,
} = require('../controllers/homes');

router.get('/', HttpHome);
router.route('/homes').get(HttpGetHomes).post(HttpPostNewHome);
router.use('*', undefinedRoutes);

module.exports = router;
