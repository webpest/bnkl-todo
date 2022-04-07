import { Todo } from "../types/todo";

import {
  createStore,
  computed,
  action,
  persist,
  Computed,
  Action,
} from "easy-peasy";

export interface StoreModel {
  todos: Todo[];
  filteredTodos: Todo[];
  count: Computed<StoreModel, number>;
  filtering: Computed<StoreModel, boolean>;
  addTodo: Action<StoreModel, Todo>;
  toggle: Action<StoreModel, Todo>;
  filterTodos: Action<StoreModel, string>;
}

const store = createStore<StoreModel>(
  persist({
    todos: [],
    filteredTodos: [],
    count: computed((state) => state.filteredTodos.length),
    filtering: computed(
      (state) => state.filteredTodos.length < state.todos.length
    ),
    addTodo: action((state, todo) => {
      state.todos.push(todo);
    }),
    toggle: action((state, payload) => {
      state.filteredTodos.forEach((todo) => {
        return todo.id === payload.id ? (todo.done = !todo.done) : todo;
      });

      state.todos.forEach((todo) => {
        return todo.id === payload.id ? (todo.done = !todo.done) : todo;
      });
    }),
    filterTodos: action((state, payload) => {
      const res = state.todos.filter((todo) => {
        if (payload === "") return true;
        return todo.tag === payload;
      });
      state.filteredTodos = res;
    }),
  })
);

export default store;
