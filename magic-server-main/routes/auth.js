const express = require('express');
const router = express.Router();
//import controller 
const {signup, signin, activateAccount, googlelogin, facebooklogin} = require ("../controllers/auth");


router.post('/signup', signup);
router.post('/email-activate', activateAccount);

router.post('/signin', signin);

router.post('/googlelogin', googlelogin);
router.post('/facebooklogin', facebooklogin);


module.exports = router;
