import { actionTypes } from "../contants/action-types"

const initialstate = {
    products : [],
}
export const productReducer = (state = initialstate , { type , payload }) => {
    switch(type) {
        case actionTypes.SET_PRODUCTS:
            return {...state, products: payload};
            default:
                return state;
    }
}

export const selectedProductsReducer = (state = {}, {type,payload}) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
        return {... state, ...payload};
        default:
            return state;

    }
}