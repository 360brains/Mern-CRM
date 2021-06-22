const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
      productName: {
        type: String,
        required: true,
      },
      fileName: {
        type: String,
        required: true,
      },
      productQty:{
      type:Number,
      require:true  
      },
      productDesc: {
        type: String,
        required: true,
      },
      productPrice: {
        type: String,
        required: true,

      },
    
    },
    {
      timestamps: true,
    }
  )
  
  const Product = mongoose.model('Product', productSchema)
  
module.exports = Product
  