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
    }
  },
  {
    timestamps: true
  }
);

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;