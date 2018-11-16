import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  addAction,
  completeAction,
  removeAction,
  setVisibilityFilter
} from './actions';
import { getVisibleTodos } from './selectors';
import App from '../../components/App';

const mapStateToProps = state =>  ({
	messages: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
	submitNewMessage: bindActionCreators(addAction, dispatch),
	toggleComplete: bindActionCreators(completeAction, dispatch),
	toggleRemove: bindActionCreators(removeAction, dispatch),
	filter: bindActionCreators(setVisibilityFilter, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

