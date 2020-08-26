const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
  rating: Number,
  count: Number,
  reviews: {
    type: [{
      user: { type: mongoose.Schema.Types.ObjectId, require: true },
      content: { type: String, require: true },
      date: { type: Date, default: Date.now },
      rating: { type: Number, require: true }
    }]
  }
})

module.exports = mongoose.model('Review', reviewSchema)
