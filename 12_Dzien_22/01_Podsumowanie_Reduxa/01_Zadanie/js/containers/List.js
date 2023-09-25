import {connect} from "react-redux";

import List from '../components/List'

import {save} from "../redux/actions";

const mapState = (state) => ({
    list: state.list,
    counter: state.counter.value,
})

const mapDispatch = (dispatch) => ({
    onSave: (payload) => dispatch(save(payload)),
})

export default connect(mapState, mapDispatch)(List);
