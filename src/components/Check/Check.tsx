import CheckIcon from "../../assets/check-icon.svg";

type Props = {
  check: boolean;
};

const Check = ({ check }: Props) => {
  const cls = check ? "bg-blue" : "bg-[#F2F4F9]";
  return (
    <span
      className={`inline-grid place-items-center w-8 h-8 border-2 border-blue rounded-full ${cls}`}
    >
      {check && <img src={CheckIcon} alt="" />}
    </span>
  );
};

export default Check;
