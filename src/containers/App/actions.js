import {
  ADD,
  COMPLETE,
  REMOVE,
  SET_VISIBILITY_FILTER
} from './constants'

export const addAction = (text, id, isCompleted = false, isVisible = true) => {
	return {
		type: ADD,
		text,
		id,
		isCompleted,
		isVisible
	}
}
export const completeAction = id => {
	return {
		type: COMPLETE,
		id
	}
}

export const removeAction = id => {
	return {
		type: REMOVE,
		id
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}
