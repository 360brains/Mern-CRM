
import axios from 'axios';


export const createProduct = async (productData) => {

    const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

    const response = await axios.post('/api/product' , productData, config)

    return response
}



export const getProduct = async () => {
             
    const response = await axios.get('/api/product' )
    return response
}


export const deleteProduct = async (productId) =>{

  const response = await axios.delete(`/api/product/${productId}`)
  return response
}


export const editProduct = async (productId) =>{

  const response = await axios.get(`/api/product/${productId}`)
  return response
}