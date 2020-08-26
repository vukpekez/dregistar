const express = require('express')
const Hospital = require('../models/hospital')
const hospital = require('../models/hospital')

const router = express.Router()

router.get('/', ({ res }) => {
  Hospital.find()
    .select('-__v -doctors')
    .then(hospital => {
      res.status(200).json(hospital)
    })
})

router.get('/:id', (req, res) => {
  Hospital.findById(req.params.id, '-__v')
    .populate([
      {
        path: 'doctors', select: 'specialty fullname email reviews',
        populate: { path: 'reviews', select: 'rating count' }
      },
    ])
    .slice('doctors.specialty', 1)
    .catch(error => res.status(500).json({ message: error }))
    .then(hospital => {
      res.status(200).json(hospital)
    })
})

module.exports = router
