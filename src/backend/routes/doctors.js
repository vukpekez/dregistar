const express = require('express')
const bcrypt = require('bcrypt')
const Doctor = require('../models/doctor')
const Hospital = require('../models/hospital')
const Review = require('../models/review')
const Examination = require('../models/examination')

const router = express.Router()

router.get('/', ({ res }) => {
  Doctor.find()
    .select('-__v -password -education -bio -examinations')
    .slice('specialty', 1)
    .populate([
      { path: 'workPlace', select: 'name address location' },
      { path: 'reviews', select: 'rating count' }
    ])
    .catch(error => res.status(500).json({ message: error }))
    .then(doctors => {
      res.status(200).json(doctors)
    })
})

router.get('/:id', (req, res) => {
  Doctor.findById(req.params.id)
    .select('-__v -password')
    .populate('workPlace', '-_id -overallRating -doctors')
    .catch(error => res.status(500).json({ message: error }))
    .then(doctor => {
      res.status(200).json(doctor)
    })
})

router.patch('/update', (req, res) => {
  const { _id } = req.body
  const { data } = req.body
  Doctor.findByIdAndUpdate(_id, data)
    .catch(error => res.status(400).json({ message: error }))
    .then(() => {
      res.status(200).json()
    })
})

function deleteDocs(hospital, reviews = 0, examinations = 0) {
  if (hospital) Hospital.findByIdAndDelete(hospital)
  if (reviews) Review.findByIdAndDelete(reviews)
  if (examinations) Examination.findByIdAndDelete(examinations)
}

router.post('/new', async (req, res) => {
  const { exists } = req.body.workPlace
  var { hospital } = req.body.workPlace
  var { examinations } = req.body
  var { doctor } = req.body

  if (exists) {
    existsCheck = await Hospital.exists({ _id: hospital._id })
    if (!existsCheck) res.status(404).json({ message: 'Bolnica nije pronađena.' })
  } else {
    hospital = await (new Hospital(hospital)).save()
      .catch(error => { res.status(400).json({ message: error }) })
  }

  var reviews = await (new Review()).save()
    .catch(error => {
      deleteDocs(!exists ? hospital._id : 0)
      res.status(400).json({ message: error })
    })

  examinations = await (new Examination(examinations)).save()
    .catch(error => {
      deleteDocs(!exists ? hospital._id : 0, reviews._id)
      res.status(400).json({ message: error })
    })

  const hash = await bcrypt.hash(req.body.doctor.password, 10)
    .catch(err => {
      deleteDocs(!exists ? hospital._id : 0, reviews._id, examinations._id)
      res.status(400).json(err)
    })

  doctor = await new Doctor({
    ...doctor,
    password: hash,
    workPlace: hospital._id,
    reviews: reviews._id,
    examinations: examinations._id
  })
    .save()
    .catch(error => {
      deleteDocs(!exists ? hospital._id : 0, reviews._id, examinations._id)
      res.status(400).json({ message: error })
    })

  Hospital.findByIdAndUpdate(hospital._id, {
    $push: {
      doctors: doctor._id
    }
  })
    .then(() => {
      res.status(201).json(doctor)
    })
})

module.exports = router
