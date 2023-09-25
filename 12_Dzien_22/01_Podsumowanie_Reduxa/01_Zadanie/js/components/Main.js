import React from "react";
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams
} from "react-router-dom";

import Counter from '../containers/Counter'
import List from '../containers/List'
import store from '../redux/store'

const Main = () => {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Counter/>
                    <List/>
                </Router>
            </Provider>
        </>
    )
}

export default Main;
