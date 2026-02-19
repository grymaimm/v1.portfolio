import { getAccessToken } from "@/services/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 1️⃣ Ambil access token
    const tokenData = await getAccessToken();
    const accessToken = tokenData.access_token;

    // 2️⃣ Ambil player state
    const playerRes = await fetch("https://api.spotify.com/v1/me/player", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store", // supaya selalu fresh
    });

    // Tidak ada lagu diputar
    if (playerRes.status === 204) {
      return NextResponse.json({ isPlaying: false }, { status: 200 });
    }

    if (!playerRes.ok) {
      const error = await playerRes.text();
      return NextResponse.json({ error }, { status: playerRes.status });
    }

    const data = await playerRes.json();

    // 3️⃣ Playlist info (jika lagu dari playlist)
    let playlist = null;

    if (data.context?.type === "playlist") {
      const playlistId = data.context.uri.split(":")[2];

      const playlistRes = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          cache: "no-store",
        },
      );

      if (playlistRes.ok) {
        const playlistData = await playlistRes.json();

        playlist = {
          id: playlistId,
          name: playlistData.name,
          url: playlistData.external_urls.spotify,
        };
      }
    }

    // 4️⃣ Response FINAL
    const response = NextResponse.json({
      isPlaying: data.is_playing,

      // track info
      title: data.item?.name,
      artist: data.item?.artists?.map((a) => a.name).join(", "),
      album: data.item?.album?.name,
      cover: data.item?.album?.images?.[0]?.url,
      trackUrl: data.item?.external_urls?.spotify,

      // device
      device: data.device?.name || "Unknown Device",

      // progress
      progressMs: data.progress_ms,
      durationMs: data.item?.duration_ms,

      // player state
      shuffle: data.shuffle_state,
      repeat: data.repeat_state,

      // playlist (nullable)
      playlist,
    });

    // 🔥 Set Cache Header (mirip s-maxage versi lama)
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=5, stale-while-revalidate=10",
    );

    return response;
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
