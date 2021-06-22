const express =require('express')
const router = express.Router()
const { authenticateJWT } =require( '../middleware/authenticator')
const upload = require('../middleware/multer')
const productController = require('../controllers/Product')

router.post('/' , upload.single('productImage') ,
    productController.create
  )
router.get('/' , productController.readAll
  )
router.delete('/:productId' , productController.delete)

router.get('/:productId', productController.read);

router.put(
	'/:productId',
	upload.single('productImage'),
	productController.update
);



module.exports= router
