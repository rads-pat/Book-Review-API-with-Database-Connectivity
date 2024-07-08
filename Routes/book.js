const express = require('express');
const router = express.Router();
const {createBook,getBooks,updateBook,deleteBook} = require('../Controllers/bookController');


// router.use('/reviews', require('./review'));

//API'S for BOOKS 
router.post('/books', createBook);
router.get('/getbooks', getBooks);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook); 

module.exports = router;