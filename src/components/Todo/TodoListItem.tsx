import Check from "../Check/Check";
import TagIndicator from "../Tag/TagIndicator";
import { Todo } from "../../types/todo";
import { useStoreActions, Actions } from "easy-peasy";
import { StoreModel } from "../../store";

type Props = {
  todo: Todo;
};

const TodoListItem = ({ todo }: Props) => {
  const toggleTodo = useStoreActions(
    (action: Actions<StoreModel>) => action.toggle
  );
  return (
    <li
      className="py-6 px-[30px] border-b border-[#EFEFEF] hover:cursor-pointer flex items-center"
      onClick={() => toggleTodo(todo)}
    >
      <Check check={todo.done} />
      <span className="mx-4 flex-grow">{todo.text}</span>
      <TagIndicator color={todo.tag} />
    </li>
  );
};

export default TodoListItem;
