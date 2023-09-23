import React from "react";
import {connect} from "react-redux";
import {fetchQuote} from "../redux/actions";
import Quote from "../components/Quote";

const mapStateToProps = (state) => ({
    quote: state.quote.quote,
    loading: state.loading,
    error: state.error
})

const mapDispatchToProps = (dispatch) => ({
    fetchQuote: () => dispatch(fetchQuote())
})

export default connect(mapStateToProps, mapDispatchToProps)(Quote)
