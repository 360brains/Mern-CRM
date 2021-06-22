
import {combineReducers} from 'redux'
import {getProductsReducer , productReducer} from './reducer/fetchUser'

const AllReducers = combineReducers({
    getProductsReducer,
    productReducer

})


export default AllReducers