import axios from "axios";
import { getCookie } from '../helpers/cookie'

export const getRoles = async () => {
    let token = getCookie();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get("/api/role", config);

    return response;
};

export const AddRoles = async (roleName, modulesPermissions) => {
    let token = getCookie();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    console.log('token: ', token);

    const response = await axios.post("/api/role", {role: roleName, permissions: modulesPermissions} ,config);

    return response;
};
export const editRole = async (roleId) =>{

  let token = getCookie();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(`/api/role${roleId}`, config )
  

  return response
}