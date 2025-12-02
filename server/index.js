const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000 
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const postRoutes = require('./routes/posts')


dotenv.config()
const MONGO_URI = process.env.MONGO_URI 

app.use(express.json())
app.use(cors())




//! Route 
app.use('/posts' , postRoutes)





//! Database Coonection 
mongoose.connect(MONGO_URI).then(()=> console.log('Connection Success ! ⭐️')).catch(error =>
    console.log(error.message)
)




