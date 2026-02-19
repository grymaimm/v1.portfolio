"use client";

import EmptyData from "@/components/elements/EmptyData";
import { Highlight } from "@/components/elements/Highlight";
import { TypographyH4, TypographyP } from "@/components/elements/Typography";
import { BlurFade } from "@/components/magicui/blur-fade";
import { fetcher } from "@/lib/fetcher";
import Link from "next/link";
import { PiGithubLogoBold as GithubIcon } from "react-icons/pi";
import useSWR from "swr";
import ContributionsCalender from "./ContributionsCalender";
import ContributionsOverview from "./ContributionsOverview";
import ContributionsSkeleton from "./ContributionsSkeleton";

export default function ContributionsSection({ username, endpoint }) {
  const { data, isLoading, error } = useSWR(endpoint, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 300_000,
    keepPreviousData: true,
  });

  const contributionCalendar =
    data?.contributionsCollection?.contributionCalendar ?? null;

  return (
    <BlurFade inView delay={0.25}>
      <section id="dashboard" className="mt-10">
        <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between space-y-1 mb-4">
          <div className="flex flex-col space-y-2">
            <TypographyH4>
              <Highlight className="flex items-center gap-2">
                <GithubIcon size={22} /> Contributions
              </Highlight>
            </TypographyH4>
            <TypographyP className="text-sm text-muted-foreground">
              My contributions from last year on github.
            </TypographyP>
          </div>
          <TypographyP className="text-sm text-muted-foreground">
            <Link
              href={`https://github.com/${username}`}
              target="_blank"
              passHref
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @{username}
            </Link>
          </TypographyP>
        </div>
        {isLoading && <ContributionsSkeleton />}
        {!isLoading && (!contributionCalendar || error) && (
          <EmptyData
            title="No Data Yet"
            description="Please check back later."
          />
        )}
        {!isLoading && contributionCalendar && (
          <div className="flex flex-col gap-4">
            <ContributionsOverview data={contributionCalendar} />
            <ContributionsCalender data={contributionCalendar} />
          </div>
        )}
      </section>
    </BlurFade>
  );
}
