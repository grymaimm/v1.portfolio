import { useWeatherAPI } from "@/hooks/useWeather";
import { WeatherCardDesktop, WeatherCardMobile } from "./WeatherCard";

export const WeatherInfoDesktop = () => {
  const { weather, loading, error } = useWeatherAPI();

  return (
    <WeatherCardDesktop weather={weather} loading={loading} error={error} />
  );
};

export const WeatherInfoMobile = () => {
  const { weather, loading, error } = useWeatherAPI();

  return (
    <WeatherCardMobile weather={weather} loading={loading} error={error} />
  );
};
