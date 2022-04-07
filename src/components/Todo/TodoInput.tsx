import AddIcon from "assets/add-icon.svg";
import { useCallback, useState } from "react";
import Tags from "components/Tag/Tags";

type Props = {
  handleAddTodo: (text: string, tag: string) => void;
};

const TodoInput = ({ handleAddTodo }: Props) => {
  const [text, setText] = useState<string>("");
  const [tag, setTag] = useState<string>("");

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setText(e.currentTarget.value);
  };

  const handleTagChange = useCallback((color: string) => {
    setTag(color);
  }, []);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (text !== "" && tag !== "") {
      handleAddTodo(text, tag);
      setText("");
    }
  };

  return (
    <div className="py-6 px-[30px] mb-6">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <img src={AddIcon} alt="" />
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={handleInputChange}
          className="placeholder:text-[#B3B3B3] outline-none flex-grow mx-5 p-0"
        />
        <Tags
          colors={["#86DA83", "#8F83DA"]}
          selected={tag}
          onChange={handleTagChange}
        />
      </form>
    </div>
  );
};

export default TodoInput;
