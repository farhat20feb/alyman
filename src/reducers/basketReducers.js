import { ADD_PRODUCT_BASKET,GET_PRODUCT_BASKET } from "../actions/types";

const initialState = {
    basketNumbers : 0,
    addedItems:[],
    total: 0
}

export default (state = initialState,action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET :
            let addedItem = action.payload
            return {
                addedItems: [...state.addedItems, addedItem],
                basketNumbers : state.basketNumbers + 1,
                total: state.total + addedItem.price,
                itemlist:localStorage.setItem('itemlist',JSON.stringify([...state.addedItems, addedItem]))
            }
            case GET_PRODUCT_BASKET :
                return {
                   ...state
                }
        default:
            return state;
    }

}