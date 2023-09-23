import {connect} from "react-redux";

import Recipe from "../../components/Recipes/Recipe";
import {selectObject} from "../Products/Product";

const mapStateToProps = (state, {id}) => ({
    recipe: selectObject(state.recipes, id),
    products: state.products
})

export default connect(mapStateToProps)(Recipe)