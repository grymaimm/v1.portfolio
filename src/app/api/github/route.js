// src/app/api/github/route.js
import { getGithubUser } from "@/services/github";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    const response = await getGithubUser(type);

    return NextResponse.json(response.data, {
      status: response.status,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    });
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
