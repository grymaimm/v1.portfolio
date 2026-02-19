import { getALLTimeSinceToday, getReadStats } from "@/services/wakatime";
import { NextResponse } from "next/server";

export async function GET() {
  const [readStats, allTimeSinceToday] = await Promise.all([
    getReadStats(),
    getALLTimeSinceToday(),
  ]);

  return NextResponse.json(
    {
      ...readStats?.data,
      all_time_since_today: allTimeSinceToday?.data,
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    },
  );
}
