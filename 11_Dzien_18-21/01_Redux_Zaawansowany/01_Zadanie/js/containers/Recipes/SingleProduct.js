import {connect} from "react-redux";

import SingleProduct from "../../components/Recipes/SingleProduct";

const mapStateToProps = (state) => ({
    products: state.products,
})

export default connect(mapStateToProps)(SingleProduct)