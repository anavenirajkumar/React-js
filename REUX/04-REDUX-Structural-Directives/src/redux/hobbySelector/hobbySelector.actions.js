import {SELECT_CODING, SELECT_EATING, SELECT_SLEEPING} from "./hobbySelector.actionTypes";

let selectEating = () => {
    return {
        type : SELECT_EATING,
        payload : 'select eating'
    }
};

let selectCoding = () => {
    return {
        type : SELECT_CODING,
        payload : 'select coding'
    }
};

let selectSleeping= () => {
    return {
        type : SELECT_SLEEPING,
        payload : 'select sleeping'
    }
};

export {selectEating , selectCoding , selectSleeping}
