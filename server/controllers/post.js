const Post = require('../model/User')



// ! โชว์ข้อมูลทั้งหมดไปให้  Font-end
const getPosts = async (req , res) =>{
    try{
        const post =  await Post.find()

        res.status(200).json({post})

    }catch(error){
       res.status(404).json({message: error.message})
    }
}