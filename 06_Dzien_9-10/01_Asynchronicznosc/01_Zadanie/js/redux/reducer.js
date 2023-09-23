import {combineReducers} from "redux";

import {QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, ADD_FAV} from "./actions";

const initialState = {
    loading: false,
    error: "",
    quote: null
}

function quote(state = initialState, {type, payload}) {
    switch (type) {
        case QUOTE_FETCHING: {
            return {
                ...state,
                loading: true
            }
        }

        case QUOTE_FETCHED: {
            return {
                loading: false,
                quote: payload,
                error: null
            }
        }

        case QUOTE_ERROR: {
            return {
                loading: false,
                quote: [],
                error: payload
            }
        }

        default: {
            return state;
        }
    }
}

function favourites(state = [], {type, payload}) {
    switch (type) {
        case ADD_FAV: {
            return [...state, payload]
        }

        default: {
            return state;
        }
    }
}

export default combineReducers({
    quote,
    favourites,
});
