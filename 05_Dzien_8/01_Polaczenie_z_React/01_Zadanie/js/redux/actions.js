const ADD_ARTICLE = 'ADD_ARTICLE';
const ADD_USER = 'ADD_USER';
const REMOVE_ARTICLE = 'REMOVE_ARTICLE'

const addArticle = (payload) => ({
    type: ADD_ARTICLE,
    payload, // payload: payload
});

const addUser = (payload) => ({
    type: ADD_USER,
    payload,
});

const removeArticle = (payload) => ({
    type: REMOVE_ARTICLE,
    payload,
});

export {ADD_ARTICLE, ADD_USER, REMOVE_ARTICLE, addArticle, addUser, removeArticle};