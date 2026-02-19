import { NextResponse } from "next/server";

export async function GET() {
  try {
    const CITY = "Yogyakarta";
    const API_KEY = process.env.WEATHER_API_KEY;

    if (!API_KEY) {
      return NextResponse.json({ error: "API KEY NOT FOUND" }, { status: 500 });
    }

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${CITY}&hours=5`;

    const response = await fetch(url, {
      next: { revalidate: 300 }, // cache 5 menit (opsional)
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: errorText },
        { status: response.status },
      );
    }

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
