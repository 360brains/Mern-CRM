import {setCookie , getCookie , deleteCookie} from './cookie';
import {setLocalStorage , getLocalStorage , deleteLocalStorage} from './localStorage';

export const setAuthentication = (token , user) =>{
    setCookie('token' , token)
    setLocalStorage('user' , user)
}


export const isAuthenticated = () =>{
  if(getCookie('token') && getLocalStorage('user')){  
     return getLocalStorage('user')
  }else{
       return false
  }
}


export const logout = (next) =>{
     deleteLocalStorage('user')
     deleteCookie('token')

     next()
}