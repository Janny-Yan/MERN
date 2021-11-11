const PetController = require("../controller/pet.controller");

module.exports = app => {
    app.post("/api/pets/new", PetController.newPet);
    app.get("/api/pets", PetController.findAllPets);
    app.get("/api/pets/:id", PetController.findOnePet);
    app.put("/api/pets/update/:id", PetController.updatePet);
    app.delete("/api/pets/delete/:id", PetController.deletePet);
};


