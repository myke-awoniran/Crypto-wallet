const router = require('express').Router();

const {
    HttpHome,
    HttpGetHomes,
    HttpPostNewHome,
} = require('../controllers/homes');
const Auth = require('../controllers/auth');

router.get('/', HttpHome);

router
    .route('/homes')
    .get(HttpGetHomes)
    .post(Auth.HttpCheckLogin, HttpPostNewHome);

module.exports = router;
