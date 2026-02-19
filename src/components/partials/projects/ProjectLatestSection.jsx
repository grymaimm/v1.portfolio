// src/app/_components/ProjectLatestSection.jsx
import EmptyData from "@/components/elements/EmptyData";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getLatestProjects } from "@/services/db";
import ProjectLatestCard from "./ProjectLatestCard";

export default async function ProjectLatestSection({ limit = 5 }) {
  const projects = await getLatestProjects(limit);

  if (!projects?.length) {
    return (
      <div className="border border-dashed rounded-2xl mt-4 mb-3">
        <EmptyData
          title="No Projects Yet"
          description="There are no projects to display at the moment. Please check back later."
        />
      </div>
    );
  }

  return (
    <ScrollArea className="relative w-full h-full whitespace-nowrap scroll-smooth">
      <div className="flex w-fit space-x-4 mt-4 mb-3">
        {projects.map((project) => (
          <ProjectLatestCard key={project.id} project={project} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
