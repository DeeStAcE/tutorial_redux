import {connect} from "react-redux";

import UserInput from "../components/UserInput";

import {addUser} from "../redux/actions";

const mapDispatchToProps = (dispatch) => ({
    onUserAdd: (payload) => dispatch(addUser(payload)),
});

export default connect(null, mapDispatchToProps)(UserInput);