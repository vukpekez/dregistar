const mongoose = require('mongoose')

const examintaionSchema = mongoose.Schema({
  daysOff: { type: String, require: true },
  workTime: {
    type: {
      start: String,
      end: String
    }, require: true
  },
  examTime: { type: Number, require: true },
  exams: {
    type: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      date: { type: Number, require: true },
      description: String
    }]
  }
})

module.exports = mongoose.model('Examination', examintaionSchema)
