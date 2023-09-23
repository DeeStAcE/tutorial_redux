import {connect} from "react-redux";

import {addRecipe} from "../../redux/actions/recipes";

import Add from '../../components/Recipes/Add';

const mapDispatchToProps = (dispatch) => ({
    addRecipe: (payload) => dispatch(addRecipe(payload)),
});

export default connect(null, mapDispatchToProps)(Add);