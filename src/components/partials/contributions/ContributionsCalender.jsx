"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import { motion } from "motion/react";
import { useState } from "react";

export default function ContributionsCalender({ data }) {
  const [selectContribution, setSelectContribution] = useState({
    count: null,
    date: null,
  });

  const weeks = data?.weeks ?? [];
  const months =
    data?.months?.map((month) => {
      const getContributionsByMonth = weeks
        .filter(
          (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7),
        )
        .flatMap((week) => week.contributionDays)
        .reduce((total, day) => total + day.contributionCount, 0);

      return { ...month, contributionsCount: getContributionsByMonth };
    }) ?? [];

  // Custom colors for contribution levels
  const CONTRIB_COLORS = [
    // "#c7d2fe",  // 200
    // "#818cf8",  // 400
    // "#6366f1",  // 500
    // "#4338ca",  // 700
    // "#3730a3",  // 800

    // 'oklch(0.917 0.08 205.041)',
    // 'oklch(0.789 0.154 211.53)',
    // 'oklch(0.715 0.143 215.221)',
    // 'oklch(0.609 0.126 221.723)',
    // 'oklch(0.52 0.105 223.128)',

    "oklch(0.91 0.096 180.426)",
    "oklch(0.855 0.138 181.071)",
    "oklch(0.704 0.14 182.503)",
    "oklch(0.6 0.118 184.704)",
    "oklch(0.437 0.078 188.216)",
  ];

  const getBackgroundColor = (count) =>
    count > 0
      ? CONTRIB_COLORS[Math.min(count, CONTRIB_COLORS.length - 1)]
      : undefined;

  const handleHover = (count, date) => setSelectContribution({ count, date });

  return (
    <>
      <ScrollArea className="no-scrollbar relative flex max-w-full flex-col">
        <ul className="text-muted-foreground flex gap-6 text-xs">
          {months.map(({ firstDay, totalWeeks, name }) => (
            <li
              key={firstDay}
              className={clsx({ invisible: totalWeeks < 2 })}
              style={{ minWidth: 15 * totalWeeks }}
            >
              {name}
            </li>
          ))}
        </ul>

        <div className="flex justify-between gap-0.75 pb-3 pt-1">
          {weeks.map(({ firstDay, contributionDays }) => (
            <div key={firstDay} className="flex flex-col gap-1">
              {contributionDays.map(({ date, contributionCount }) => {
                const backgroundColor = getBackgroundColor(contributionCount);
                const delay = Math.random() * contributionDays.length * 0.15;
                return (
                  <Tooltip key={date}>
                    <TooltipTrigger asChild>
                      <motion.span
                        key={date}
                        initial={{ opacity: 0, translateY: -20 }}
                        animate={{
                          opacity: 1,
                          translateY: 0,
                          transition: { delay },
                        }}
                        className="bg-primary/15 dark:bg-secondary inline-flex size-4 items-center justify-center rounded-[0.4rem]"
                        style={{ backgroundColor }}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      {contributionCount} contributions on {date}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="-mt-1 flex flex-wrap items-center justify-between gap-2">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <span>Less</span>
          <ul className="mt-0.5 flex gap-1">
            <motion.li className="bg-border dark:bg-secondary h-3.25 w-3.25 rounded-[5px]" />
            {CONTRIB_COLORS.map((color, index) => (
              <motion.li
                key={color}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: index * 0.3 } }}
                className="h-3.25 w-3.25 rounded-[5px]"
                style={{ backgroundColor: color }}
              />
            ))}
          </ul>
          <span>More</span>
        </div>

        <div
          className={clsx("bg-secondary rounded-sm px-2 text-sm", {
            "opacity-100": selectContribution.date,
            "opacity-0": !selectContribution.date,
          })}
        >
          {selectContribution.count} contributions on {selectContribution.date}
        </div>
      </div>
    </>
  );
}
