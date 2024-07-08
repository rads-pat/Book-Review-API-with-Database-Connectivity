const Review = require('../models/review');
const authenticate = require('../middleware/authMiddleware')


const review = async (req, res) => {
  const { id } = req.params;
  const { reviewText } = req.body;
  const userId = req.user.userId;
  try {
      const review = new Review({ book: id, user: userId, reviewText });
      console.log("review", );
      await review.save();
      res.status(201).json({ message: 'Review added successfully', review });
  } catch (error) {
      res.status(400).json({ message: 'Error adding review', error });
  }
};


module.exports = {review}