const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  name: { type: String, require: true },
  surname: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  favorites: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }] },
  phone: String,
  address: String,
  birthDay: String
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
