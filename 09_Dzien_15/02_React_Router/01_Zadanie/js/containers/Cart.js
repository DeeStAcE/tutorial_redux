import {connect} from "react-redux";

import {addProduct, removeProduct} from "../redux/actions";
import {selectProduct, sum} from "../redux/selectors";

import Cart from "../components/Cart";

const mapStateToProps = (state, {limit}) => {
    return {
        products: selectProduct(state, limit),
        sum: sum(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addProduct: (payload) => dispatch(addProduct(payload)),
    removeProduct: (payload) => dispatch(removeProduct(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)