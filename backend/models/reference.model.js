const mongoose = require('mongoose')
const refeSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true
    },
    Data: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

const References = mongoose.model("Refs",refeSchema);

module.exports = References;