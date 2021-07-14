import axios from 'axios';
import { getCookie } from '../helpers/cookie';


export const signup = userData => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    return axios.post('/api/auth/signup', userData, config);
}



export const signin = userData => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    return axios.post('/api/auth/signin', userData, config);
}


export const getUserData = async () => {
    let token = getCookie();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.get("/api/auth" , config);
  
    return response;
  };
  

  
export const getAllUsers = async () => {
    let token = getCookie();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.get("/api/auth/alluser" , config);
  
    return response;
  };
  
  
    
export const createNewUser = async (userData) => {
  let token = getCookie();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post("/api/auth/addUser" ,userData, config);

  return response;
};
 export const editUser = async (userId,userData) =>{

  console.log('userId',userId,'userData',userData);
  let token = getCookie();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`/api/auth/editUser/${userId}`,userData, config)
  

  return response
}

export const deleteUser = async (userId) =>{

  let token = getCookie();
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      // 'Accept': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`/api/auth/deleteUser/${userId}`, config)
  

  return response
}