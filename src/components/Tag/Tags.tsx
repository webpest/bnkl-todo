import { useState, useEffect } from "react";

type Props = {
  colors: string[];
  onChange: (tag: string) => void;
};

const Tags = ({ colors, onChange }: Props) => {
  const [tag, setTag] = useState<string | null>(null);

  useEffect(() => {
    if (tag !== null) onChange(tag);
  }, [tag, onChange]);

  const handleToggle = (color: string): void => {
    tag === color ? setTag("") : setTag(color);
  };

  return (
    <>
      {colors.map((color, i) => {
        const active =
          color === tag
            ? "outline outline-[3px] outline-[#F5F5F5]"
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
