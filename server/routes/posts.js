const express = require('express')


const {
    getPost , 
    createPost
} = require('../controllers/post')


const router = express.Router()

router.get('/' , getPost)
router.post('/' , createPost)


module.exports = router 