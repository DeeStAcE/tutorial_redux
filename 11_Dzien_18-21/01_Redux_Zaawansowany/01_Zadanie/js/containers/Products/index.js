import {connect} from "react-redux";

import Products from '../../components/Products/index';

const mapStateToProps = (state) => ({
    products: state.products,
});

export default connect(mapStateToProps)(Products);