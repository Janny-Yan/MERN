const ProductController = require("../controllers/pirate.controllers");

module.exports = (app) => {
  app.post("/api/pirates", PirateControllers.addNewPirate);
  app.get("/api/pirates", PirateControllers.getAllPirates);
  app.get("/api/pirates/:_id", PirateControllers.getPirateById);
  app.delete("/api/pirates/:id", PirateControllers.deletePirate);
};