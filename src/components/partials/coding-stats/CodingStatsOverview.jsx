import { formatDate } from "@/utils/format-date";
import CodingStatsOverviewCard from "./CodingStatsOverviewCard";

export default function CodingStatsOverview({ data }) {
  const formattedDates = {
    start: data?.start_date ? formatDate(data.start_date) : "N/A",
    end: data?.end_date ? formatDate(data.end_date) : "N/A",
    bestDay: data?.best_day?.date
      ? `${formatDate(data.best_day.date)} (${data?.best_day?.text ?? "N/A"})`
      : "N/A",
  };

  const overviewItems = [
    { label: "Start Date", value: formattedDates.start },
    { label: "End Date", value: formattedDates.end },
    {
      label: "Daily Coding Average",
      value: data?.human_readable_daily_average ?? "N/A",
    },
    {
      label: "This Week Coding Time",
      value: data?.human_readable_total ?? "N/A",
    },
    { label: "Best Day Coding Time", value: formattedDates.bestDay },
    {
      label: "All Time Since Today",
      value: data?.all_time_since_today?.text ?? "N/A",
    },
  ];

  return (
    <div className="grid gap-4 max-[321px]:grid-cols-1 min-[321px]:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {overviewItems.map(({ label, value }) => (
        <CodingStatsOverviewCard key={label} label={label} value={value} />
      ))}
    </div>
  );
}
