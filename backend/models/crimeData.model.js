const mongoose = require("mongoose");
const crimeDataSchema= new mongoose.Schema({
  image_1: {
    type: String,
    required: true
  },
  image_2:{
    type: String,
    required:true
  },

},
  {
    timestamps: true
  })


  const Plates = mongoose.model("Plates",plateSchema);
  
  module.exports = Plates;