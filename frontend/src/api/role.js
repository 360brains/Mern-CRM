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