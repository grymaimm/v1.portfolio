import { Highlight } from "@/components/elements/Highlight";
import { TypographyH4, TypographyP } from "@/components/elements/Typography";
import { BlurFade } from "@/components/magicui/blur-fade";
import { UserIcon } from "lucide-react";
export default function SectionAbout() {
  return (
    <BlurFade inView delay={0.25}>
      <section id="about" className="w-full space-y-2 mt-10">
        <TypographyH4>
          <Highlight>
            <UserIcon size={20} /> About
          </Highlight>
        </TypographyH4>
        <TypographyP className="text-sm text-muted-foreground">
          Experienced in software development with a strong focus on web
          development. I am a Computer Engineering graduate from Amikom
          University Yogyakarta with experience in Cybersecurity and Web
          Development.
        </TypographyP>
      </section>
    </BlurFade>
  );
}
