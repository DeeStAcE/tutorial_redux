import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from 'react-router-dom';
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import store from './redux/store';

import Cart from './components/Cart';

function Root() {
    return (
        <Provider store={store}>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/all">Wszystkie</Link></li>
                        <li><Link to="/10">Do 10 zł</Link></li>
                        <li><Link to="/50">Do 50 zł</Link></li>
                        <li><Link to="/100">Do 100 zł</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/:limit" element={<Cart/>}/>
                </Routes>
            </Router>
        </Provider>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Root/>);