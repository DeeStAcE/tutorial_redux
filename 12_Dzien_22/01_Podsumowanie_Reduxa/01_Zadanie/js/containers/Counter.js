import {connect} from "react-redux";

import Counter from '../components/Counter'

import {startCounter, pause, setValue} from "../redux/actions";

const mapState = (state, {initCounter}) => ({
    counter: state.counter.value,
    isCounting: state.counter.isCounting,
    initCounter,
})

const mapDispatch = (dispatch) => ({
    onStartCounter: () => dispatch(startCounter()),
    onPause: () => dispatch(pause()),
    onSetValue: (payload) => dispatch(setValue(payload))
})

export default connect(mapState, mapDispatch)(Counter)