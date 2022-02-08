const{Router} =require('express');
const router = Router();

const {getProduct, createProduct, getProductById, deleteProduct, updateProduct} = require('../controller/product.controller')

router.route('/')
     
    .get(getProduct)
    .post(createProduct)
router.route('/:id')    

    .get(getProductById)
    .delete(deleteProduct)
    .put(updateProduct)

module.exports = router;   


