import { Highlight } from "@/components/elements/Highlight";
import { TypographyH4, TypographyP } from "@/components/elements/Typography";
import { BlurFade } from "@/components/magicui/blur-fade";
import AutoScrollSkills from "@/components/partials/skills/AutoScrollSkills";
import { GrTechnology as TechnologyIcon } from "react-icons/gr";

export default function SectionSkills() {
  return (
    <BlurFade inView delay={0.25}>
      <section id="skills" className="w-full space-y-2 mt-10">
        <TypographyH4>
          <Highlight>
            <TechnologyIcon size={20} /> Tech Stack
          </Highlight>
        </TypographyH4>
        <TypographyP className="text-sm text-muted-foreground">
          Tools and technologies I use to build and develop applications.
        </TypographyP>
        <AutoScrollSkills />
      </section>
    </BlurFade>
  );
}
