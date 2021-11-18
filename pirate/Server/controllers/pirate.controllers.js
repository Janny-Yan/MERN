const Product = require("../models/pirate.models");

const addNewPirate = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => console.log(err));
};

const getAllPirates = (req, res) => {
    Product.find()
        .then((allPirates) => res.json(allPirates))
        .catch((err) => console.log(err));
};

const getPirateById = (req, res) => {
    Product.findOne({ _id: req.params._id })
        .then((queriedPirates) => res.json(queriedPirates))
        .catch((err) => console.log(err));
};

const deletePirate = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((result) => res.json(result))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports = {
    addNewPirate,
    getAllPirates,
    getPirateById,
    deletePirate,
};