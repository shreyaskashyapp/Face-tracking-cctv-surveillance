const Crimes = require('../models/criminal.model')
const router = require('express').Router()

router.route('/').get((req,res)=>{
  Crimes.find()
    .then(items => res.json(items))
    .catch(err => res.status(200).json("Error "+err))
})

router.route('/add').post((req,res)=>{
  const Status=req.body.Status;
  const newCrime = new Crimes({Status});

  newCrime.save()
    .then(()=>res.json("new crime added"))
    .catch(err => res.status(200).json("Error "+err))
})

router.route('/delete-all').delete(async (req, res) => {
  try {
    const result = await Crimes.deleteMany({});
    res.send(`${result.deletedCount} documents deleted`);
  } catch (error) {
    res.status(500).send(`Error deleting data: ${error}`);
  }
});

module.exports =router