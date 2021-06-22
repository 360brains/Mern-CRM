
import axios from 'axios';
import {getCookie}  from '../helpers/cookie';


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

    const response = await axios.get('/api/product')

    return response
}

