const express =require('express')
const router = express.Router()
const {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
}=require ('../controllers/Product')
const { authenticateJWT, admin } =require( '../middleware/authenticator')

router.route('/').get(getProducts).post(authenticateJWT, admin, createProduct)
// router.route('/:id/reviews').post(protect, createProductReview)
// router.get('/top', getTopProducts)
// router
//   .route('/:id')
//   .get(getProductById)
//   .delete(protect, admin, deleteProduct)
//   .put(protect, admin, updateProduct)

module.exports= router
