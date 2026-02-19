// services/spotify.js
const basicAuth = Buffer.from(
  process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET,
).toString("base64");

/**
 * Ambil access token baru dari refresh_token
 * Dipanggil otomatis oleh API
 */
export async function getAccessToken() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basicAuth}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error("Failed getAccessToken: " + error);
  }

  return res.json(); // { access_token, expires_in }
}
