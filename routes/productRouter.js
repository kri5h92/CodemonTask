const router = require('express').Router();
const {getProduct, getAllProduct, updateProduct, addProduct} = require('../controllers/productData');
router.get('/show/:_id', getProduct);
router.get('/showall', getAllProduct);
router.patch('/update/:_id', updateProduct);
router.post('/add', addProduct);

module.exports = router;