const PirateController = require("../controllers/pirate.controllers");

module.exports = (app) => {
    app.post("/api/pirates", PirateController.addNewPirate);
    app.get("/api/pirates", PirateController.getAllPirates);
    app.get("/api/pirates/:_id", PirateController.getPirateById);
    app.delete("/api/pirates/:id", PirateController.deletePirate);
};