const express =require('express')
const router = express.Router()
const {
  featchProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
}=require ('../controllers/Product')
const { authenticateJWT } =require( '../middleware/authenticator')
const upload = require('../middleware/multer')

router.route('/').get(featchProducts).post( upload.single("productImage") , createProduct)


// router.route('/:id/reviews').post(protect, createProductReview)
// router.get('/top', getTopProducts)
// router
//   .route('/:id')
//   .get(getProductById)
//   .delete(protect, admin, deleteProduct)
//   .put(protect, admin, updateProduct)

module.exports= router
