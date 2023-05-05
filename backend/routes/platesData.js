const router = require('express').Router();
const Plate = require('../models/platedata.model');

router.route('/').get((req, res) => {
  Plate.find()
    .then(images => res.json(images))
    .catch(err => res.status(200).json("Error " + err));
});

router.route('/add').post((req, res) => {
  console.log(req);
  const Name = req.body.Name;
  const Data = req.body.Data;
  const Location= req.body.Location;
  const Time=req.body.Time;

  const newImage = new Images({ Name, Data, Location, Time});
  newImage.save()
    .then(() => res.json("new Image added sucesfully"))
    .catch(err => res.status(200).json("Error " + err));
});

router.route('/delete-all').delete(async (req, res) => {
  try {
    const result = await Plate.deleteMany({});
    res.send(`${result.deletedCount} documents deleted`);
  } catch (error) {
    res.status(500).send(`Error deleting data: ${error}`);
  }
});

module.exports = router;