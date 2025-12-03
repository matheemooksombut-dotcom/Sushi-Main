// ./model/User.js
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  username: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  confirm: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);
