const mongoose = require('mongoose');


const connectDB = async () => {
   try{
        await mongoose.connect('mongodb://localhost:27017/book_review',{ useNewUrlParser: true, useUnifiedTopology: true });
         console.log('Mongo conneted sucessfully');
   } catch(error){
        console.log('Mongo Not Connected.....', error);
   }
}



module.exports = connectDB;

