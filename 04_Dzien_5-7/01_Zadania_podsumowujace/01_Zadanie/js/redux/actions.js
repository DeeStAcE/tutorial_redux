// export {
//   INCREMENT, DECREMENT, ADD_PRODUCT, CHANGE_ORDER,
//   increment, decrement, addProduct, changeOrder
// };

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const ADD_PRODUCT = 'ADD_PRODUCT';
const CHANGE_ORDER = 'CHANGE_ORDER';

const increment = () => ({
    type: INCREMENT,
});

const decrement = () => ({
    type: DECREMENT
});

const addProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload,
});

const changeOrder = (payload) => ({
    type: CHANGE_ORDER,
    payload,
});

export {
    INCREMENT,
    DECREMENT,
    ADD_PRODUCT,
    CHANGE_ORDER,
    increment,
    decrement,
    addProduct,
    changeOrder
};