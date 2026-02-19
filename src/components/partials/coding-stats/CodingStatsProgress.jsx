import { TypographyP } from "@/components/elements/Typography";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function CodingStatsProgress({ className, data }) {
  const { name, percent = 0 } = data;

  const progressVariants = {
    initial: { width: 0 },
    animate: {
      width: `${percent}%`,
      transition: { delay: 0.8 },
    },
  };

  return (
    <div className="flex items-center justify-between gap-4">
      {/* <div className='w-24 font-medium'>{name}</div> */}
      <TypographyP className="text-sm w-[40%]">{name}</TypographyP>
      <div className="bg-secondary relative flex h-3 w-[50%] justify-center rounded-full">
        <motion.span
          initial="initial"
          animate="animate"
          variants={progressVariants}
          className={cn(
            className,
            "absolute top-0 left-0 h-3 rounded-full px-3",
          )}
        >
          &ensp;
        </motion.span>
      </div>
      <TypographyP className="text-sm w-[10%]">
        {percent.toFixed(0)}%
      </TypographyP>
    </div>
  );
}
