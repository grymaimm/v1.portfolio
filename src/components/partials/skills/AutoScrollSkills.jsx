import { getAllSkills } from "@/commons/constants/MySkills";
import { Marquee } from "@/components/magicui/marquee";
import CardSkills from "./CardSkills";

export default function AutoScrollSkills() {
  const stacks = getAllSkills();
  const chunkSize = Math.ceil(stacks.length / 3);

  const rows = [
    stacks.slice(0, chunkSize),
    stacks.slice(chunkSize, chunkSize * 2),
    stacks.slice(chunkSize * 2),
  ];

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-2">
      {rows.map((row, i) => (
        <Marquee key={i} reverse={i === 1} className="[--duration:40s]">
          {row.map((stack) => (
            // <BlurFade key={stack.name} inView>
            <div key={stack.name}>
              <CardSkills
                name={stack.name}
                icon={stack.icon}
                color={stack.color}
                size={20}
              />
            </div>
            // </BlurFade>
          ))}
        </Marquee>
      ))}
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-[10%] bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-[10%] bg-linear-to-l"></div>
    </div>
  );
}
