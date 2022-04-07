import { useState, useEffect } from "react";

type Props = {
  colors: string[];
  onChange: (tag: string) => void;
  selected: string;
};

const Tags = ({ colors, onChange, selected }: Props) => {
  const [tag, setTag] = useState<string | null>(null);

  useEffect(() => {
    if (tag !== null) onChange(tag);
  }, [tag, onChange]);

  const handleToggle = (color: string): void => {
    selected === color ? setTag("") : setTag(color);
  };

  return (
    <>
      {colors.map((color, i) => {
        const active =
          color === selected
            ? "outline outline-[3px] outline-[#DEDEDE]"
            : "outline-none";

        return (
          <button
            key={i}
            className={`h-8 w-8 ml-2 rounded-xl ${active}`}
            style={{
              backgroundColor: color,
            }}
            onClick={() => handleToggle(color)}
          ></button>
        );
      })}
    </>
  );
};

export default Tags;
