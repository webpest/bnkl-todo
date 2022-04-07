import dayjs from "dayjs";

export const getToday = (): string => {
  return dayjs().format("ddd MMM D YYYY");
};
