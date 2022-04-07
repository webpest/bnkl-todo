import Tags from "../Tag/Tags";

type Props = {
  today: string;
  count: number;
  handleTagChange: (color: string) => void;
  filtering: boolean;
};

const TodoHeader = ({ today, count, handleTagChange, filtering }: Props) => {
  return (
    <>
      <div className="bg-red py-[31px] text-white text-center">
        Today, {today}
      </div>
      <div className="bg-[#F9F9F9] text-red py-6 px-[30px] flex items-center justify-between">
        <span>
          {!filtering
            ? `Showing ${count} tasks`
            : `Filtering and showing ${count} tasks`}
        </span>
        <span>
          <Tags colors={["#86DA83", "#8F83DA"]} onChange={handleTagChange} />
        </span>
      </div>
    </>
  );
};

export default TodoHeader;
