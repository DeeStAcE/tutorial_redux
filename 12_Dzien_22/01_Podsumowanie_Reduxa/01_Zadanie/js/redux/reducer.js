import {combineReducers} from "redux";
import {PAUSE, INCREASE, SAVE, DELETE, SET} from "./actions";

const initialState = {
    "isCounting": false,
    "value": 0
}

const counter = (state = initialState, {type, payload}) => {
    switch (type) {
        case INCREASE: {
            return {isCounting: true, value: state.value + 1}
        }
        case PAUSE: {
            return {...state, isCounting: false}
        }
        case SET: {
            return {...state, value: payload}
        }
        default: {
            return state
        }
    }
}

const list = (state = [], {type, payload}) => {
    switch (type) {
        case SAVE: {
            return [...state, payload]
        }
        case DELETE: {
            state.splice(payload, 1)
            return [...state]
        }
        default: {
            return state
        }
    }
}

export default combineReducers({
    counter,
    list
})