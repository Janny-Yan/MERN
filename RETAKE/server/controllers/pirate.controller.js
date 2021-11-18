const Pirate = require("../models/pirate.model");

const addNewPirate = (req, res) => {
  Pirate.create(req.body)
    .then((newPirate) => res.json(newPirate))
    .catch((err) => console.log(err));
};

const getAllPirates = (req, res) => {
  Pirate.find()
    .then((allPirate) => res.json(allPirate))
    .catch((err) => console.log(err));
};

const getPirateById = (req, res) => {
  Product.findOne({ id: req.params._id })
    .then((queriedPirate) => res.json(queriedPirate))
    .catch((err) => console.log(err));
};

const deletePirate = (req, res) => {
  Pirate.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports = {
  addNewPirate,
  getAllPirates,
  getPirateById,
  deletePirate,
};