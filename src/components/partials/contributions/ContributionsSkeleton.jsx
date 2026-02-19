import { Skeleton } from "@/components/ui/skeleton";

export default function ContributionsSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <Skeleton className="h-26 w-full rounded-xl" />
        <Skeleton className="h-26 w-full rounded-xl" />
        <Skeleton className="h-26 w-full rounded-xl" />
        <Skeleton className="h-26 w-full rounded-xl" />
      </div>
      <Skeleton className="h-42 w-full rounded-xl" />
      <Skeleton className="h-4 w-44 rounded-xl" />
    </div>
  );
}
