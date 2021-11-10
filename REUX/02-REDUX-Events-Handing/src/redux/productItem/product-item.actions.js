import {DECR_QTY, INCR_QTY} from "./product-item.actionTypes";

let incrQty = () => {
    return {
        type : INCR_QTY,
        payload : 'to increase the qty'
    }
};

let decrQty = () => {
    return {
        type : DECR_QTY,
        payload : 'to decrease the qty'
    }
};
export {incrQty, decrQty};
