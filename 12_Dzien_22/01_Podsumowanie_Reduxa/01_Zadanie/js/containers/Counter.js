import {connect} from "react-redux";

import Counter from '../components/Counter'

import {startCounter, pause, save} from "../redux/actions";

const mapState = (state) => ({
    counter: state.counter.value,
    isCounting: state.counter.isCounting,
})

const mapDispatch = (dispatch) => ({
    onStartCounter: () => dispatch(startCounter()),
    onPause: () => dispatch(pause()),
})

export default connect(mapState, mapDispatch)(Counter)