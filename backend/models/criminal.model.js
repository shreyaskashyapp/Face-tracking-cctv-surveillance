const mongoose = require('mongoose')

const criminalSchema = new mongoose.Schema({
  image_1: {
    type: String,
    required: true
  },
  image_2:{
    type: String,
    required:true
  },
  Status:{
    type:Boolean,
    required:true
  }
})
const Crime = mongoose.model("crimes",criminalSchema);

module.exports = Crime;