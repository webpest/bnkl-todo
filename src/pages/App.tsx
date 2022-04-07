import { useCallback, useEffect } from "react";
import { getToday } from "../utils";
import TodoList from "../components/Todo/TodoList";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoInput from "../components/Todo/TodoInput";
import { nanoid } from "nanoid";
import { useStoreState, useStoreActions } from "../store/hooks";

const App = () => {
  const todos = useStoreState((state) => state.todos);
  const filterBy = useStoreState((state) => state.filterBy);
  const setFilterBy = useStoreActions((action) => action.setFilterBy);
  const addTodo = useStoreActions((action) => action.addTodo);

  const filteredTodos = todos.filter((todo) => {
    if (filterBy === "") return true;
    return todo.tag === filterBy;
  });

  const handleAddTodo = (task: string, tag: string): void => {
    addTodo({ id: nanoid(), text: task, done: false, tag: tag });
  };

  useEffect(() => {
    setFilterBy(filterBy);
  }, [setFilterBy, filterBy]);

  const handleTagChange = useCallback(
    (color: string) => {
      console.log(color, "here");
      setFilterBy(color);
    },
    [setFilterBy]
  );

  return (
    <div className="h-screen overflow-y-auto bg-[#F2F2F2] text-dark font-sans text-xl">
      <div className="grid place-items-center h-screen">
        <div className=" w-[500px] h-[628px] bg-white rounded-[40px] overflow-hidden flex flex-col">
          <TodoHeader
            today={getToday()}
            count={filteredTodos.length}
            handleTagChange={handleTagChange}
            filtering={filterBy !== ""}
          />
          <TodoList todos={filteredTodos} />
          <TodoInput handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
