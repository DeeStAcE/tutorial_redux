import {connect} from 'react-redux';

import Articles from '../components/Articles';

import {addArticle, removeArticle} from '../redux/actions';

// mapStateToProps (users, articles)
const mapStateToProps = (state) => ({
    articles: state.articles,
    users: state.users,
});

// mapDispatchToProps (onAdd)
const mapDispatchToProps = (dispatch) => ({
    onAdd: (payload) => dispatch(addArticle(payload)),
    onRemove: (payload) => dispatch(removeArticle(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);