/**
 * Tutaj zaimplementuj reducer do aplikacji counter
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default counterReducer;
 */

import {INCREMENT, DECREMENT} from "../actions/counterActions";

const counterReducer = (state = 0, {type, payload}) => {
    switch (type) {
        case INCREMENT: {
            return state + payload;
        }
        case DECREMENT: {
            return state - payload;
        }
        default: {
            return state;
        }
    }
}

export default counterReducer;