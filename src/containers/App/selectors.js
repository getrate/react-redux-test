export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(t => t.isCompleted)
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.isCompleted)
  }
};
