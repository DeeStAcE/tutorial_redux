const QUOTE_FETCHING = 'QUOTE_FETCHING';
const QUOTE_FETCHED = 'QUOTE_FETCHED';
const QUOTE_ERROR = 'QUOTE_ERROR';
const ADD_FAV = 'ADD_FAV'

const startFetching = (payload) => ({
    type: QUOTE_FETCHING,
    payload, // payload: payload
});

const quoteFetched = (payload) => ({
    type: QUOTE_FETCHED,
    payload, // payload: payload
});

const quoteError = (payload) => ({
    type: QUOTE_ERROR,
    payload, // payload: payload
});

const addFavourite = (payload) => ({
    type: ADD_FAV,
    payload, // payload: payload
});

export {QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, ADD_FAV, startFetching, quoteFetched, quoteError, addFavourite};