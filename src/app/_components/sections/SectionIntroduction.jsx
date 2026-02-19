import { SOCIAL_LINKS } from "@/commons/constants/Contacts";
import { ImageBlur } from "@/components/elements/ImageBlur";
import { TypographyH3, TypographyP } from "@/components/elements/Typography";
import { BlurFade } from "@/components/magicui/blur-fade";
import { HyperText } from "@/components/magicui/hyper-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Link from "next/link";
import { MdVerified as VerifiedIcon } from "react-icons/md";

const roles = ["Web Developer", "Full-Stack Developer"];
export default function SectionIntroduction() {
  return (
    <section className="w-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <BlurFade inView delay={0.1}>
            <div className="sm:flex sm:flex-col hidden sm:mb-4">
              <HyperText className="font-bold text-3xl md:text-4xl mt-0">{`Hi, I'm Muhammad Rahim`}</HyperText>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="size-3 rounded-full bg-green-500 animate-pulse" />
                  <TypographyP className="text-sm font-medium text-green-600 dark:text-green-400">
                    Online
                  </TypographyP>
                </div>
                <span className="text-primary/55 text-sm">|</span>
                <TypographyP className="text-primary/55 text-sm">
                  @aiiimmmm._
                </TypographyP>
              </div>
            </div>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <div className="flex flex-col sm:hidden">
              <div className="flex items-center gap-2">
                <Link href="/" passHref>
                  <TypographyH3 className="max-[390px]:text-lg">
                    Muhammad Rahim
                  </TypographyH3>
                </Link>
                <VerifiedIcon size={20} className="text-blue-400" />
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <div className="size-3 rounded-full bg-green-500 animate-pulse" />
                  <TypographyP className="text-sm font-medium text-green-600 dark:text-green-400">
                    Online
                  </TypographyP>
                </div>
                <span className="text-primary/55 text-sm">|</span>
                <TypographyP className="text-primary/55 text-sm">
                  @aiiimmmm._
                </TypographyP>
              </div>
            </div>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <div className="flex items-center gap-2 mb-4 sm:mt-0 mt-4">
              <span className="text-muted-foreground">I&apos;m a</span>
              <TypingAnimation
                words={roles}
                className="font-semibold text-lg md:text-xl bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                duration={80}
                pauseDelay={2000}
                loop
                showCursor
                cursorStyle="line"
              />
            </div>
          </BlurFade>
        </div>
        <BlurFade inView delay={0.2}>
          <div className="h-max w-max aspect-square rounded-full border-2 bg-background">
            <ImageBlur
              src="/images/me/PhotoProfileCompress.jpg"
              alt="MuhammadRahim"
              rounded="rounded-full"
              className="size-20 rounded-full aspect-square bg-background object-cover sm:size-24"
              width={500}
              height={500}
            />
          </div>
        </BlurFade>
      </div>
      <BlurFade inView delay={0.3}>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
          <span className="font-medium text-foreground">Passionate</span> about{" "}
          <span className="font-medium text-foreground">web development</span>{" "}
          and enjoy creating{" "}
          <span className="font-medium text-foreground">
            creative and innovative solutions
          </span>{" "}
          using{" "}
          <span className="font-medium text-foreground">
            modern technologies
          </span>{" "}
          such as <span className="font-medium text-foreground">React</span>,{" "}
          <span className="font-medium text-foreground">Next.js</span>,{" "}
          <span className="font-medium text-foreground">JavaScript</span>, and
          others, while remaining{" "}
          <span className="font-medium text-foreground">
            committed to continuously improving my skills and expertise
          </span>
          .
        </p>
      </BlurFade>
      <BlurFade inView delay={0.4}>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">Find me on</span>
          <div className="flex gap-2">
            {SOCIAL_LINKS.map((social, index) => (
              <BlurFade key={index} inView delay={0.4 + index * 0.1}>
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                >
                  <div className="p-2 rounded-full border border-border bg-background hover:bg-accent hover:scale-105 transition-all duration-200">
                    <social.icon className="size-4" />
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
