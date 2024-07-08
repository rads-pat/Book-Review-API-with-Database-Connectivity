const express = require('express')
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const connectDB = require('./config/db');
const authRoutes = require('./Routes/auth')
const bookRoutes = require('./Routes/book');
const reviewRoutes = require('./Routes/reviewRoutes')

 connectDB();
// Middleware

const app = express()
const port = 5000

// app.use(bodyParser.json());
app.use(express.json());

//Routes
app.use('/api/user', authRoutes)
app.use('/api', bookRoutes)
app.use('/api', reviewRoutes)

// app.get('/', (req, res) => res.send('Hello from book_review!'))

app.listen(port, () => console.log(`server started on port ${port}!`))