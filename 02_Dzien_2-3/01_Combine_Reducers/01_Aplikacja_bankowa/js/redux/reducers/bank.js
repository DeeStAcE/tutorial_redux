/**
 * Tutaj zaimplementuj reducer do aplikacji bankApp
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default bankReducer;
 */

import {WITHDRAW, DEPOSIT} from "../actions/bankActions";


function bankReducer(state = 0, {type, payload}) {
    switch (type) {
        case WITHDRAW:
            return state - payload;

        case DEPOSIT:
            return state + payload;

        default:
            return state;
    }
}

export default bankReducer;
