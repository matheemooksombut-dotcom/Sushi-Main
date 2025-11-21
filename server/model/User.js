const mongoose = require('mongoose')


// ! UserSchema  

const postSchema = mongoose.Schema({
    Username: String  , 
    Firstname: String , 
    Lastaname: String , 
    Password: Number , 
    Confrime: Number 
})


const Post = mongoose.model('Post' , postSchema)

module.exports = Post