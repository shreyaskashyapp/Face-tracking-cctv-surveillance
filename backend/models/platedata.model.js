const mongoose = require("mongoose");

const plateSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true
    },
    Data: {
      type: String,
      required: true
    },
    Location:{
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Plates = mongoose.model("Plate", plateSchema);

module.exports = Plates;