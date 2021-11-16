const ProductController = require("../controller/product.controller");

module.exports = (app) => {
    app.get("/api/product", ProductController.allProduct);
    app.post("/api/product/new", ProductController.addNewProduct);
};