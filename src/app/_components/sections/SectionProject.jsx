import { Highlight } from "@/components/elements/Highlight";
import { TypographyH4, TypographyP } from "@/components/elements/Typography";
import { BlurFade } from "@/components/magicui/blur-fade";
import ProjectLatestSection from "@/components/partials/projects/ProjectLatestSection";
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUpIcon } from "lucide-react";
import Link from "next/link";

export default function SectionProject() {
  const projectsUrl = "https://www.grymaimm.my.id/projects";
  return (
    <BlurFade inView delay={0.25}>
      <section id="projects" className="w-full mt-10">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center gap-6">
            <TypographyH4>
              <Highlight>
                {" "}
                <TrendingUpIcon size={20} />
                Latest Projects
              </Highlight>
            </TypographyH4>
            <Button
              asChild
              variant="outline"
              size="xs"
              className="flex items-center gap-1 rounded-xl cursor-pointer px-2 has-[>svg]:px-2 pl-3 has-[>svg]:pl-3"
            >
              <Link
                href={projectsUrl}
                passHref
                rel="noopener noreferrer"
                target="_blank"
              >
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <TypographyP className="text-sm text-muted-foreground">
            Recent projects I’ve designed and developed.
          </TypographyP>
        </div>
        <ProjectLatestSection />
      </section>
    </BlurFade>
  );
}
