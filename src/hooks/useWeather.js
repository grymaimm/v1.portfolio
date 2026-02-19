"use client";

import { useEffect, useState } from "react";

export const useWeatherAPI = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchWeather = async () => {
      try {
        const res = await fetch("/api/weather");
        const data = await res.json();

        if (!mounted) return;

        if (data.error) {
          setError(data.error.message || "Gagal mengambil data cuaca");
          return;
        }

        setWeather(data);
      } catch (err) {
        mounted && setError("Network error");
      } finally {
        mounted && setLoading(false);
      }
    };

    fetchWeather();

    return () => {
      mounted = false;
    };
  }, []);

  return { weather, loading, error };
};
