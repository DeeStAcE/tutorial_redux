// export default combineReducers({
//   counter,
//   products zad 2
// });

import {combineReducers} from "redux";
import {INCREMENT, DECREMENT, ADD_PRODUCT, CHANGE_ORDER} from "./actions";

const swapElementUp = (array, index, type) => {
    console.log(array, index, type);
    if (type === 'up') {
        if (index === 0) {
            return array;
        }

        [array[index], array[index - 1]] = [array[index - 1], array[index]];
        return array;
    }

    if (index === array.length - 1) {
        return array;
    }

    [array[index], array[index + 1]] = [array[index + 1], array[index]];
    return array;
}


const counter = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT: {
            return state + 1;
        }
        case DECREMENT: {
            return state - 1;
        }
        default: {
            return state;
        }
    }
}

const products = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];
        case CHANGE_ORDER:
            return swapElementUp([...state], Number(action.payload.index), action.payload.type);
        default:
            return state;
    }
}

export default combineReducers({
    counter,
    products,
})