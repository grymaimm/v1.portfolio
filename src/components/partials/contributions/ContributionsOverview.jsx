import ContributionsOverviewCard from "./ContributionsOverviewCard";

export default function ContributionsOverview({ data }) {
  const totalContributions = data?.totalContributions ?? 0;
  const weeks = data?.weeks ?? [];

  const totalThisWeekContribution =
    weeks
      .at(-1)
      ?.contributionDays.reduce(
        (sum, day) => sum + (day.contributionCount ?? 0),
        0,
      ) ?? 0;

  const totalContributionList = weeks.reduce(
    (acc, week) => [
      ...acc,
      ...week.contributionDays.map((day) => day.contributionCount ?? 0),
    ],
    [],
  );

  const bestContribution = Math.max(...totalContributionList, 0);
  const averageContribution =
    totalContributionList.length > 0
      ? totalContributions / totalContributionList.length
      : 0;

  const overviewItems = [
    { label: "Total", value: totalContributions },
    { label: "This Week", value: totalThisWeekContribution },
    { label: "Best Day", value: bestContribution },
    { label: "Average", value: averageContribution.toFixed(1), unit: "/ day" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
      {overviewItems.map(({ label, value, unit }) => (
        <ContributionsOverviewCard
          key={label}
          label={label}
          value={value}
          unit={unit}
        />
      ))}
    </div>
  );
}
