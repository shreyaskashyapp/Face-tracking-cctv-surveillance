const router = require('express').Router()
const Refs = require('../models/reference.model')

router.route('/').get((req, res) => {
  Refs.find()
    .then(refs => res.json(refs))
    .catch(err => res.status(200)).json("error " + err)
})

router.route('/add').post((req, res) => {
  console.log(req.body)
  const Name = req.body.Name
  const Data = req.body.Data

  const image = new Refs({ Name, Data })
  image.save()
    .then(() => res.json("Ref added succesfully"))
    .catch(err => res.status(200).json("error "+ err))
})

module.exports = router;