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


const NewCounter = () => {
    const {initCounter} = useParams()

    return <Counter initCounter={parseInt(initCounter)}/>
}

const Main = () => {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="" element={<Counter/>}/>
                        <Route path="/:initCounter/" element={<NewCounter/>}/>
                    </Routes>
                    <List/>
                </Router>
            </Provider>
        </>
    )
}

export default Main;
