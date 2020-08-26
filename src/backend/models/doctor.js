const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const doctorSchema = mongoose.Schema({
  fullname: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  specialty: { type: [String], require: true },
  education: [String],
  bio: String,

  workPlace: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', require: true },
  reviews: { type: mongoose.Schema.Types.ObjectId, ref: 'Review', require: true },
  examinations: { type: mongoose.Schema.Types.ObjectId, ref: 'Examination', require: true }
})

doctorSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Doctor', doctorSchema)
