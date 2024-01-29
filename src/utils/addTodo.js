export const addTodo = (setTodos, newTodo) => {
  setTodos((todos) => [
    ...todos,
    newTodo,
  ]);
};
