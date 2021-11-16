const Product = require("../model/product.model");

module.exports = {

addNewProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => {
            console.log(newProduct);
            res.json(newProduct)
    })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
    })
},

getAllProduct = (req, res) => {
    Product.create(req.body)
        .then((allProduct) => {
            console.log(allProduct);
            res.json(allProduct)
    })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
    })
},

}