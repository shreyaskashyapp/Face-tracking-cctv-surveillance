const router = require('express').Router()
const Images = require('../models/images.models')

router.route('/').get((req,res) => {
  Images.find()
    .then(images => res.json(images))
    .catch(err => res.status(200).json("Error "+err))
});

router.route('/add').post((req,res) => {
  // console.log(req.body)
  const contentType = req.body.contentType;
  const Data = req.body.Data;

  const newImage =new Images({contentType,Data})
  newImage.save()
    .then(() => res.json("new Image added sucesfully"))
    .catch(err => res.status(200).json("Error "+err))
})

module.exports =router;