const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  password: String,
  confirm: String
});

module.exports = mongoose.model('User', userSchema);
