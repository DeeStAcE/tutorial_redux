import {connect} from 'react-redux';

import Home from '../../components/Home/index';

// => selectors.js
const lastFiveObjects = (state) => {
    return state.slice(-5).reverse();
}


const mapStateToProps = (state) => ({
    products: lastFiveObjects(state.products),
    recipes: lastFiveObjects(state.recipes),
});

export default connect(mapStateToProps)(Home);