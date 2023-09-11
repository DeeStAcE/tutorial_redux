import {combineReducers} from "redux";

import {ADD_ARTICLE, ADD_USER, REMOVE_ARTICLE} from "./actions";

const usersInitialState = {
    jan: 0,
    gosia: 0
};

const users = (state = usersInitialState, {type, payload}) => {
    switch (type) {
        case ADD_USER: {
            return {
                ...state,
                [payload]: 0,
            }
        }
        case ADD_ARTICLE: {
            const articlesCounter = state[payload.userId] + 1;
            return {
                ...state,
                [payload.userId]: articlesCounter,
            }
        }
        default: {
            return state;
        }
    }
}

const articlesInitialState = [];

const articles = (state = articlesInitialState, {type, payload}) => {
    switch (type) {
        case ADD_ARTICLE: {
            return [...state, payload.title]
        }
        case REMOVE_ARTICLE: {
            console.log(state)
            return state.filter(art => {
                return art !== payload
            })
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    users,
    articles
});