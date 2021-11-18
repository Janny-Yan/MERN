const PirateController = require("../controllers/pirate.controller");

module.exports = (app) => {
  app.post("/api/pirates", PirateController.addNewPirate);
  app.get("/api/pirates", PirateController.getAllPirates);
  app.get("/api/pirates/:id", PirateController.getPirateById);
  app.delete("/api/pirates/:_id", PirateController.deletePirate);
};