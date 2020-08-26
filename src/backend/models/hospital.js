const mongoose = require('mongoose')

const hospitalSchema = mongoose.Schema({
  name: { type: String, require: true },
  address: { type: String, require: true, unique: true },
  phone: { type: String, require: true, unique: true },
  location: {
    type: {
      lat: Number,
      lon: Number
    }, require: true
  },
  overallRating: Number,

  doctors: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }] }
})

module.exports = mongoose.model('Hospital', hospitalSchema)
