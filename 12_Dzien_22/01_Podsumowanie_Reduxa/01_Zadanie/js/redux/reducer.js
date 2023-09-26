import {combineReducers} from "redux";

import {PAUSE, INCREASE, SAVE, DELETE} from "./actions";

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
            console.log(payload)
            console.log(state)
            state.splice(payload, 1)
            console.log(state)
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