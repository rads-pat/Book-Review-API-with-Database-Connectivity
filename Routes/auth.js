
const express = require('express');
const router = express.Router();
 const { register,login } = require('../Controllers/authController')
const {createBook} = require('../Controllers/bookController')


//API'S for USER REGISTER & LOGIN
router.post('/register', register);
router.post('/login', login);








module.exports = router;