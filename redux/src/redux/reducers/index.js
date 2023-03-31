import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducers";

const Reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductsReducer,
});

export default Reducers;