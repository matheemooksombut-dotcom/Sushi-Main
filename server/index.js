const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000 
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')


dotenv.config()
const MOGO_URI = process.env.MOGO_URI 

app.use(express.json())
app.use(cors())




//! Route 





//! Database Coonection 
mongoose.connect(MOGO_URI).then(()=> console.log('Connection Success ! ⭐️')).catch(error =>
    console.log(error.message)
)




