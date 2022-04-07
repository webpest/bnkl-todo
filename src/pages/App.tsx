import { useCallback, useEffect, useState } from "react";
import { getToday } from "../utils";
import TodoList from "../components/Todo/TodoList";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoInput from "../components/Todo/TodoInput";
import { nanoid } from "nanoid";
import { useStoreState, useStoreActions } from "../store/hooks";

const App = () => {
  const todos = useStoreState((state) => state.todos);
  const filteredTodos = useStoreState((state) => state.filteredTodos);
  const count = useStoreState((state) => state.count);
  const filtering = useStoreState((state) => state.filtering);
  const addTodo = useStoreActions((action) => action.addTodo);
  const setFilter = useStoreActions((action) => action.filterTodos);

  const handleAddTodo = (task: string, tag: string): void => {
    addTodo({ id: nanoid(), text: task, done: false, tag: tag });
  };

  useEffect(() => {
    setFilter("");
  }, []);

  const handleTagChange = useCallback(
    (color: string) => {
      console.log(color, "here");
      setFilter(color);
    },
    [setFilter]
  );

  return (
    <div className="h-screen overflow-y-auto bg-[#F2F2F2] text-dark font-sans text-xl">
      <div className="grid place-items-center h-screen">
        <div className=" w-[500px] h-[628px] bg-white rounded-[40px] overflow-hidden flex flex-col">
          <TodoHeader
            today={getToday()}
            count={count}
            handleTagChange={handleTagChange}
            filtering={filtering}
          />
          <TodoList todos={filteredTodos} />
          <TodoInput handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
