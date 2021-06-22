const axios = require('axios')
export const getUser = () => async (dispatch) => {

    try {
        const  {data}  = await axios.get("/api/auth/alluser");
        dispatch({
            type: 'GET_ALL_USER',
            payload: data,
        });
    } catch (error) {
        console.log('error in getting User:',error)
    }
}


export const createProduct = productData => async dispatch => {

    try{
    const response = await axios.post('/api/product' , productData)
    dispatch({type: "CREATE_PRODUCTS" , payload: response.data.product})

    }catch(err){
        console.log("Error while creating product" , err);
    }

}


export const getProducts = () => async dispatch => {

  try{
    const response = await axios.get('/api/product')
  dispatch({type: "GET_PRODUCTS" , payload: response.data.products})

  }catch(err){
      console.log("Error while fetching product" , err);
  }

}

export const deleteProducts = productId => async dispatch => {

  try{
    const response = await axios.delete(`/api/product/${productId}`)
  dispatch({type: "DELETE_PRODUCTS" , payload: response.data})

  }catch(err){
      console.log("Error while delete product" , err);
  }

}


export const editProduct = productId => async dispatch => {

  try{
    const response = await axios.get(`/api/product/${productId}`)
  dispatch({type: "EDIT_PRODUCT" , payload: response.data})

  }catch(err){
      console.log("Error while delete product" , err);
  }

}