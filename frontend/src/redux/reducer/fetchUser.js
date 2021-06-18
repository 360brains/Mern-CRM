export const getProductsReducer = (state = { Users: [] }, action) => {
    switch (action.type) {
        case 'GET_ALL_USER':
            return {
                Users: action.payload,
            };
        default:
            return state;
    }
};