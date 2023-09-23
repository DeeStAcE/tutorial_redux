import {createStore, applyMiddleware} from "redux";

import reducers from "./reducers";

const logger = (store) => (next) => (action) => {
    console.log('dispatched action', action);
    console.log('state', store.getState());

    if (action.payload === 'marcin') {
        next({
            type: 'ADD_USER',
            payload: 'rafał',
        });

        return;
    }

    next(action);
}

const store = createStore(reducers, applyMiddleware(logger));

export default store;