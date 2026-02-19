"use client";

import { ICON_MAP, SKILLS_MAP } from "@/commons/constants/MySkills";
import { ImageBlur } from "@/components/elements/ImageBlur";
import LightRays from "@/components/magicui/light-rays";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { EyeIcon, PinIcon } from "lucide-react";
import Link from "next/link";

export default function ProjectLatestCard({ project }) {
  // ⛔ Guard wajib
  if (!project) return null;

  const projectSlugURL = `https://www.grymaimm.my.id/projects/${project.slug}`;

  return (
    <Link
      href={projectSlugURL}
      passHref
      rel="noopener noreferrer"
      target="_blank"
    >
      <Card className="group relative w-full max-w-xs py-0 bg-background">
        <div
          // className="h-full m-1 rounded-lg pb-6 bg-card text-card-foreground flex flex-col gap-6 border shadow-sm"
          className={cn(
            "group relative flex flex-col justify-between overflow-hidden rounded-xl h-full m-1 py-0",
            // light styles
            "bg-background [box-shadow:0_12px_24px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.05),0_0_0_1px_rgba(0,0,0,.03)]",
            // dark styles
            "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
          )}
        >
          <div style={{ width: "100%", height: "100%", position: "absolute" }}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#FFF"
              raysSpeed={2}
              lightSpread={1}
              rayLength={1.8}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.1}
              className="custom-rays rounded-xl shadow-xs"
            />
          </div>
          <div className="relative h-50 w-full overflow-hidden">
            <ImageBlur
              src={project.imageUrl}
              alt={project.title}
              width={1920}
              height={1080}
              className="pt-8 h-50 bg-primary/50 dark:bg-secondary/50 rounded-t-xl rounded-b-none object-cover group-hover:blur-xs"
            />
            {/* <ImageBlurCard
              src={project.imageUrl}
              alt={project.title}
              width={1920}
              height={1080}
              className="pt-6 bg-primary/50 dark:bg-secondary/50 rounded-t-xl rounded-b-none object-cover group-hover:blur-xs"
            /> */}
            {project.isFeatured && (
              <Badge
                variant="default"
                className="absolute z-2 top-3 left-3 flex px-2 items-center gap-2"
              >
                <PinIcon className="rotate-45" />
                <span>Featured</span>
              </Badge>
            )}
            <div className="absolute z-1 inset-0 flex items-center justify-center gap-1 rounded-t-xl rounded-b-none bg-black/70 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-80">
              <span>View Project</span>
              <EyeIcon size={20} />
            </div>
          </div>
          <CardContent className="space-y-2 py-6">
            <CardTitle className="truncate">{project.title}</CardTitle>
            <CardDescription className="truncate">
              {project.description}
            </CardDescription>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {project.techStack?.map((tech) => {
                const skill = SKILLS_MAP[tech];
                if (!skill) return null;

                const Icon = ICON_MAP[skill.icon];
                if (!Icon) return null;

                return (
                  <Tooltip key={tech}>
                    <TooltipTrigger className="flex items-center justify-center z-1">
                      <Icon size={20} className={skill.color} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tech}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}
