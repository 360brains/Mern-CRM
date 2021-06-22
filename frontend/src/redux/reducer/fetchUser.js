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

export const productReducer = (state = {products: []}, action) => {
    switch (action.type) {
      case "CREATE_PRODUCTS":
        return {
          products: [...state.products, action.payload],
        };
      case "GET_PRODUCTS":
        return {
          products: [...action.payload],
        };
      case "EDIT_PRODUCT":
        return {
          product: action.payload,
        };
      case "DELETE_PRODUCTS":
        return {
          products: state.products.filter((p) => p._id !== action.payload._id),
        };
      default:
        return state;
    }
  };
