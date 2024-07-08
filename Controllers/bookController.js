const Book = require('../models/bookModel');

const createBook = async(req,res) => {
    try {
        // console.log("req.body_books", req.body);
        const {title,author,genre} = req.body;
     
        const book = new Book({title,author,genre});
        // console.log("book",book);

        await book.save();
        res.status(200).send({message:"Book Created Successfully"});
    } catch (error) {
        res.status(400).send({message:"Error in Creating  Book data"});
    }
};

const getBooks = async(req,res) =>{
  try {
         const books = await Book.find();
         res.send(books);
  }catch (error) {
        res.status(500).send({message:'Error while fetching books'})
  }
};

const updateBook = async(req,res) => {
    try {
        const id = req.params.id;

        const {title,author,genre} = req.body;
        // console.log("req.body", req.body);

        const book = await Book.findByIdAndUpdate(id, {title,author,genre},{ new: true });
        if(!book){
            return res.status(404).send({message: "Book Not Found"});
        }
        res.send(book);
    } catch (error) {
        res.status(400).send({ message: 'Error updating book' });
    }
}
    const deleteBook = async(req,res) => {
        try {
            console.log("req.params.id deleteBook", req.params.id);

            const id = req.params.id;
            // const {name,description,price,stock} = req.body;
            const book = await Book.findByIdAndDelete(id);
            console.log("deleteBook",book);

            if(!book){
                return res.status(404).send({ message: "Book Not Found" });
            }
            res.send({ message: "Book deleted successfully" });
        } catch (error) {
            res.status(400).send({ message: 'Error deleting book' });
        }
    }

module.exports = {createBook,getBooks,updateBook,deleteBook};