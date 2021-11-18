const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    Name: String,
});
const Pirate = mongoose.model("Pirate", PirateSchema);
module.exports = Pirate;
