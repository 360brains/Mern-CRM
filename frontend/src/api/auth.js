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
  
  