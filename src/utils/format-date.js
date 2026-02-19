import { format, parseISO } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export const formatDate = (date, type = "MMMM dd, yyyy") => {
  if (!date) {
    return "";
  }

  const formattedDate = format(
    toZonedTime(parseISO(date), "Asia/Jakarta"),
    type,
  );

  return formattedDate;
};
