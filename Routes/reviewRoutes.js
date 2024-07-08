const express = require('express');
const router = express.Router();
const {review, getReviews} = require('../Controllers/ReviewController');
const authMiddleware = require('../middleware/authMiddleware')


// In this provide book id here..
router.post("/books/:id/reviews", authMiddleware, review);

router.get("/books/:id/reviews", getReviews);

module.exports = router;