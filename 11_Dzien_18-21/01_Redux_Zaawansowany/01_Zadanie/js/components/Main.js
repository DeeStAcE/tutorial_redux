import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams
} from 'react-router-dom';

import Layout from './Layout';

import Home from '../containers/Home/index';
import Products from '../containers/Products/index';
import AddProduct from '../containers/Products/Add';
import Product from '../containers/Products/Product'
import Recipes from '../containers/Recipes/index'
import AddRecipe from '../containers/Recipes/Add'
import Recipe from '../containers/Recipes/Recipe'

import {Provider} from "react-redux";
import store from '../redux/store';

const ProductDetails = () => {
    const {id} = useParams()

    return (
        <Product id={id}/>
    )
}

const RecipeDetails = () => {
    const {id} = useParams()

    return (
        <Recipe id={id}/>
    )
}

const Main = () => {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/products/add" element={<AddProduct/>}/>
                        <Route path="/products/:id" element={<ProductDetails/>}/>
                        <Route path="/recipes" element={<Recipes/>}/>
                        <Route path="/recipes/add" element={<AddRecipe/>}/>
                        <Route path="/recipes/:id" element={<RecipeDetails/>}/>
                    </Routes>
                </Layout>
            </Router>
        </Provider>
    )
}

export default Main;