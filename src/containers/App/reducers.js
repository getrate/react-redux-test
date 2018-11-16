import {
  SET_VISIBILITY_FILTER,
  ADD,
  COMPLETE,
  REMOVE,
  VisibilityFilters
} from './constants'

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ACTIVE,
	todos: [{
		id: 0,
		isCompleted: false,
		isVisible: true,
		text: 'Sample Text'
	}, {
		id: 1,
		isCompleted: false,
		isVisible: true,
		text: 'Another Sample Text'
	}, {
		id: 2,
		isCompleted: false,
		isVisible: true,
		text: 'Yet another note'
	}]
}

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return Object.assign({}, state, {
				visibilityFilter: action.filter
			})
		case ADD:
			return Object.assign({}, state, {
				todos: [
				 	{
						id: action.id,
						isCompleted: action.isCompleted,
						isVisible: action.isVisible,
						text: action.text
					}
				]
			})
		case COMPLETE:
			return Object.assign({}, state, {
				todos: state.todos.map(todo => {
					if (todo.id !== action.id)
						return todo;
					return Object.assign({}, todo, {
						isCompleted: !todo.isCompleted
					})
				})
			})
		case REMOVE:
			return Object.assign({}, state, {
				todos: state.todos.map(todo => {
					if (todo.id !== action.id)
						return todo;
					return Object.assign({}, todo, {
						isVisible: !todo.isVisible
					})
				})
			})
		default:
			return state;
	}
}

export default todoReducer;

