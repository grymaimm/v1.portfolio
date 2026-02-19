"use client";

import { EDUCATION } from "@/commons/constants/Education";
import { Highlight } from "@/components/elements/Highlight";
import { ImageBlur } from "@/components/elements/ImageBlur";
import {
  TypographyH4,
  TypographyH6,
  TypographyP,
} from "@/components/elements/Typography";
import { BlurFade } from "@/components/magicui/blur-fade";
import { useIsMobile } from "@/hooks/useMobile";
import { Building } from "lucide-react";
import { HiOutlineAcademicCap as AcademicCapIcon } from "react-icons/hi";

export default function SectionEducation() {
  return (
    <BlurFade inView delay={0.25}>
      <section id="education" className="w-full space-y-2 mt-10">
        <TypographyH4>
          <Highlight>
            <AcademicCapIcon size={24} /> Education
          </Highlight>
        </TypographyH4>
        <TypographyP className="text-sm text-muted-foreground">
          A summary of the education I have completed.
        </TypographyP>
        <CardEducation {...EDUCATION} />
      </section>
    </BlurFade>
  );
}

function CardEducation({
  institution,
  degree,
  studyPeriod,
  duration,
  concentration,
  specialization,
  logo,
}) {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-start gap-x-4 mt-4">
      <div className="flex">
        <div className="h-max w-max rounded">
          {logo ? (
            <ImageBlur
              src={logo}
              width={64}
              height={64}
              alt={institution + " logo"}
              rounded="rounded"
              className="size-12 sm:size-16"
            />
          ) : (
            <Building size={50} />
          )}
        </div>
      </div>
      <div className="group flex grow flex-col gap-2">
        {isMobile ? (
          <>
            <div className="flex flex-1 flex-col justify-start gap-1 text-base">
              <TypographyH6 className="inline-flex items-center text-base font-semibold leading-none sm:text-lg">
                {institution}
              </TypographyH6>
              <TypographyP className="text-sm text-muted-foreground">
                {degree}
              </TypographyP>
              <TypographyP className="text-sm text-muted-foreground">
                • Expertise: {specialization}
              </TypographyP>
              <div className="mt-1 flex text-sm text-muted-foreground">
                <TypographyP className="text-sm text-muted-foreground">
                  {studyPeriod}&nbsp; • &nbsp;
                  <span className="hidden sm:inline">{duration}</span>
                  <span className="italic sm:hidden">
                    {duration.replace("Years", "Yrs").replace("Months", "Mos")}
                  </span>
                </TypographyP>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-start justify-between">
              <div className="flex flex-1 flex-col justify-start gap-1 text-base">
                <TypographyH6 className="inline-flex items-center text-base font-semibold leading-none sm:text-lg">
                  {institution}
                </TypographyH6>
                <TypographyP className="text-sm text-muted-foreground">
                  {degree}
                </TypographyP>
                <TypographyP className="text-sm text-muted-foreground">
                  • Expertise: {specialization}
                </TypographyP>
              </div>
              <ul className="list-none text-right text-sm tabular-nums">
                <li>{studyPeriod}</li>
                <li className="italic text-muted-foreground">{duration}</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
