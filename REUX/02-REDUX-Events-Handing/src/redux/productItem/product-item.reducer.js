import {DECR_QTY, INCR_QTY} from "./product-item.actionTypes";

export const productItemKey = 'productItem';

let initialState = {
    sno : 101,
    image : 'https://www.slashgear.com/wp-content/uploads/2020/05/galaxy_watch_review_09-1280x720.jpg',
    name : 'Samsung Watch',
    qty : 2,
    price : 550
};

let productReducer = (state=initialState, action) => {
    let {type , payload} = action;
    switch(type) {
        case INCR_QTY:
            return {
                ...state,
                qty : state.qty + 1
            };
        case DECR_QTY:
            return {
                ...state,
                qty : (state.qty - 1 > 0) ? state.qty - 1 : 1
            };
        default: return state;
    }
};
export {productReducer};
