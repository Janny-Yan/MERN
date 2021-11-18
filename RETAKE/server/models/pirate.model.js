const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
  pirateName: { 
    type: String,
    required: [true, "Must provide name for Pirate"],
    minlength: [3, "Pirate must have a name of 3 characters"]
  }
}, {timestamps:true})

const Pirate = mongoose.model("Pirate", PirateSchema);
module.exports = Pirate;
