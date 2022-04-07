import { Todo } from "types/todo";

import { createStore, action, persist, Action } from "easy-peasy";

export interface StoreModel {
  todos: Todo[];
  filterBy: string;
  setFilterBy: Action<StoreModel, string>;
  addTodo: Action<StoreModel, Todo>;
  toggle: Action<StoreModel, Todo>;
}

const store = createStore<StoreModel>(
  persist({
    todos: [],
    filterBy: "",
    setFilterBy: action((state, payload) => {
      state.filterBy = payload;
    }),
    addTodo: action((state, todo) => {
      state.todos.push(todo);
    }),
    toggle: action((state, payload) => {
      state.todos.forEach((todo) => {
        return todo.id === payload.id ? (todo.done = !todo.done) : todo;
      });
    }),
  })
);

export default store;
