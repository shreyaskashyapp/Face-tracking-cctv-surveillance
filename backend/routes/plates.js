const router = require('express').Router();
const Plates = require('../models/numberPlate.model');

router.route('/').get((req,res) => {
  Plates.find()
    .then((items) => res.json(items))
    .catch(err => res.status(200).json("Error "+err))
})

router.route('/add').post((req,res) => {
  const number=req.body.number;
  const Phone=req.body.Phone
  const newPlate = new Plates({number,Phone})
  newPlate.save()
    .then(() => res.json("Added succesfully"))
    .catch(err => res.status(200).json("error" + err))
})

module.exports=router