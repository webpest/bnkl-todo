type Props = {
  color: string;
};

const TagIndicator = ({ color = "red" }: Props) => {
  return (
    <span
      className="inline-block w-[18px] h-[18px] rounded-[6.75px]"
      style={{ backgroundColor: color }}
    ></span>
  );
};

export default TagIndicator;
