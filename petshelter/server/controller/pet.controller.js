
const Pet = require("../model/pet.model");

class PetController {
    newPet(req, res) {
        console.log(`creating new pet : ${req.body}`)
        Pet.create(req.body)
            .then(newPet => res.json({ pet: newPet }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };
    findAllPets(req, res) {
        Pet.find().sort("type")
            .then(allPets => res.json({ pet: allPets }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

    findOnePet(req, res) {
        Pet.findOne({ _id: req.params.id })
            .then(onePet => res.json({ pet: onePet }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

    updatePet(req, res) {
        Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(updatePet => res.json({ pet: updatePet }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

    deletePet(req, res) {
        Pet.deleteOne({ _id: req.params.id })
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };
}

module.exports = new PetController();