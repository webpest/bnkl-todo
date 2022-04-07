import TodoListItem from "./TodoListItem";
import { Todo } from "../../types/todo";

type Props = {
  todos: Todo[];
};

const TodoList = ({ todos }: Props) => {
  return (
    <ul className="overflow-y-auto">
      {todos.map((todo, i) => (
        <TodoListItem todo={todo} key={i} />
      ))}
    </ul>
  );
};

export default TodoList;
