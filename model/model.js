const mongoose = require("mongoose");
const Mschema = mongoose.Schema(
  {
   
    name: {
      type: String,
      required: [true],
    },
    actor: {
      type: String,
      required: [true],
    },
      year: {
      type: Number,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

const movie = mongoose.model("Movie", Mschema);

module.exports = movie;
