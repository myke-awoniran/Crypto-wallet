const router = require('express').Router();
const { HttpSignUp, HttpLogin } = require('../controllers/auth');

router.post('/signup', HttpSignUp);
router.post('/login', HttpLogin);

module.exports = router;
