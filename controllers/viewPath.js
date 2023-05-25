
const displayPaths = async (req, res) => {
    const product = `Product: /product/show/:id \<br>
                    All Products: /product/showall \<br>
                    Add Products: /product/add \<br>
                    Update Product: /product/update/:id \<br>`;
    res.send(product);
}

module.exports = {displayPaths};