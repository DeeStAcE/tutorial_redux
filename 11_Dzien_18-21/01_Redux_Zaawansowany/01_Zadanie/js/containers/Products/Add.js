import {connect} from "react-redux";

import {addProduct} from "../../redux/actions/products";

import Add from '../../components/Products/Add';

const mapDispatchToProps = (dispatch) => ({
    addProduct: (payload) => dispatch(addProduct(payload)),
});

export default connect(null, mapDispatchToProps)(Add);