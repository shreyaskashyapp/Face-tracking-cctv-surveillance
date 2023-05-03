const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
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

const Images = mongoose.model("Image", imageSchema);

module.exports = Images;