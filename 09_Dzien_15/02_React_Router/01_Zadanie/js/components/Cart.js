import React from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import Form from "./Form";
import List from "./List";

import {addProduct, removeProduct} from "../redux/actions";
import {sum as sumSelector, selectProduct} from "../redux/selectors";

const Cart = () => {
    const {limit} = useParams()

    const products = useSelector((state) => selectProduct(state, limit))
    const sum = useSelector((state) => sumSelector(state))

    const dispatch = useDispatch()

    const addProductAction = (payload) => dispatch(addProduct(payload))
    const removeProductAction = (payload) => dispatch(removeProduct(payload))

    return (
        <div>
            <Form addProduct={addProductAction}/>
            <List removeProduct={removeProductAction} products={products}/>
            <h1>Do zapłaty: {sum} PLN</h1>
        </div>
    )
};

export default Cart;
