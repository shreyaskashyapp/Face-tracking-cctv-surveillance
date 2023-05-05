const mongoose = require("mongoose");

const plateDataSchema = new mongoose.Schema(
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

const PlateData = mongoose.model("PlateData", plateDataSchema);

module.exports = PlateData;