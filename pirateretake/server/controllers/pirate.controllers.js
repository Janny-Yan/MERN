const Pirate = require("../models/pirate.models");

const addNewPirate = (req, res) => {
    deletePirate.create(req.body)
        .then((newPirate) => res.json(newPirate))
        .catch((err) => console.log(err));
};

const getAllPirates = (req, res) => {
    Pirate.find()
        .then((allPirates) => res.json(allPirates))
        .catch((err) => console.log(err));
};

const getPirateById = (req, res) => {
    Pirate.findOne({ _id: req.params._id })
        .then((queriedPirates) => res.json(queriedPirates))
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