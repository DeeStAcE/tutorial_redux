import {connect} from "react-redux";

import Product from '../../components/Products/Product'

export const selectObject = (state, id) => {
    return state.filter(object => object.id === Number(id))
}

const mapStateToProps = (state, {id}) => ({
    product: selectObject(state.products, id)
})

export default connect(mapStateToProps)(Product)