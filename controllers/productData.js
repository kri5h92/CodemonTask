const Product = require('../models/Product');

const getProduct = (async (req, res) => {
    try {
        const product = await Product.findById({ _id: req.params._id });
        if (product.length === 0) throw err;
        res.status(200).json(product);
    }
    catch (err) {
        // console.log(err);
        return res.status(404).json({ message: `Product with ID: ${_id} doesn't exist` });
    }
});

const getAllProduct = (async (req, res) => {
    try {
        const products = await Product.find({});
        if (products.length === 0) throw err;
        res.status(200).json(products);
    }
    catch (err) {
        // console.log(err);
        return res.status(404).json({ message: "No products in the database" });
    }
});

const updateProduct = (async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate({ _id: req.params._id }, { price: req.body.price }, { new: true });
        if (product.length === 0) throw err;
        await product.save();
        res.status(201).json(product);
    }
    catch (err) {
        return res.status(500).send(err);
    }
});

const addProduct = (async (req, res) => {

    const { name, description, price } = req.body;
    const product = new Product({ name, description, price });
    try {
        await product.save();
    }
    catch (err) {
        return res.status(500).send(err);
    }
    return res.status(201).json(product);
})


module.exports = { getProduct, getAllProduct, updateProduct, addProduct };
