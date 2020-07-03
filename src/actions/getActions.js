import { GET_PRODUCT_BASKET } from './types';

export const getNumbers = () => {
    return (dispatch) => {
       dispatch({
            type : GET_PRODUCT_BASKET
       });
    }
}