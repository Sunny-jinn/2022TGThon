const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
  img: {
    type: String,
  },
});

module.exports = mongoose.model("Img", imgSchema);
