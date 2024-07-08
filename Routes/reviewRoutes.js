const express = require('express');
const router = express.Router();
const {review} = require('../Controllers/ReviewController');
const authMiddleware = require('../middleware/authMiddleware')


router.post("/books/:id/reviews", authMiddleware, review);

module.exports = router;