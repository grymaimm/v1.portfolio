"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const useSpotify = () => {
  const [song, setSong] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const intervalRef = useRef(null);
  const mountedRef = useRef(false);

  const isPlaying = song?.isPlaying ?? false;

  /* =====================
     STOP POLLING
  ===================== */
  const stopPolling = useCallback(() => {
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  /* =====================
     FETCH SONG
  ===================== */
  const fetchSong = useCallback(
    async ({ silent = false } = {}) => {
      try {
        if (!silent && !error && !song) {
          setIsLoading(true);
        }

        const res = await fetch("/api/spotify/now-playing");

        if (!mountedRef.current) return;

        // IDLE
        if (res.status === 204) {
          setSong(null);
          setProgress(0);
          setDuration(0);
          setError(false);
          setIsLoading(false);
          return;
        }

        // ERROR
        if (!res.ok) {
          console.warn("Spotify API error:", res.status);
          setError(true);
          setIsLoading(false);
          stopPolling();
          return;
        }

        const data = await res.json();

        setSong(data);
        setProgress(data.progressMs ?? 0);
        setDuration(data.durationMs ?? 0);
        setError(false);
        setIsLoading(false);
      } catch (err) {
        console.warn("Fetch now-playing failed:", err);
        if (!mountedRef.current) return;

        setError(true);
        setIsLoading(false);
        stopPolling();
      }
    },
    [error, song, stopPolling],
  );

  /* =====================
     START POLLING
  ===================== */
  const startPolling = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => fetchSong({ silent: true }), 5000);
  }, [fetchSong]);

  /* =====================
     INITIAL LOAD
  ===================== */
  useEffect(() => {
    mountedRef.current = true;

    fetchSong();
    startPolling();

    return () => {
      mountedRef.current = false;
      stopPolling();
    };
  }, [fetchSong, startPolling, stopPolling]);

  /* =====================
     PROGRESS TIMER
  ===================== */
  useEffect(() => {
    if (!isPlaying || error) return;

    const timer = setInterval(() => {
      setProgress((prev) => (prev + 1000 < duration ? prev + 1000 : duration));
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, duration, error]);

  return {
    song,
    progress,
    duration,
    isPlaying,
    isLoading,
    error,
  };
};
