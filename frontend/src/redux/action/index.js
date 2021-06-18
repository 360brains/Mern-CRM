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
