/**
 * Ambil jam saat ini berdasarkan localtime dari WeatherAPI
 */
export const getCurrentHourFromWeather = (weather) => {
  if (!weather?.location?.localtime) return null;

  return Number(weather.location.localtime.split(" ")[1].split(":")[0]);
};

/**
 * Ambil jam berikutnya (n jam ke depan)
 */
export const getNextHoursForecast = (weather, limit = 5) => {
  if (!weather?.forecast?.forecastday?.[0]?.hour) return [];

  const currentHour = getCurrentHourFromWeather(weather);
  if (currentHour === null) return [];

  return weather.forecast.forecastday[0].hour
    .filter((hour) => {
      const hourTime = Number(hour.time.split(" ")[1].split(":")[0]);
      return hourTime > currentHour;
    })
    .slice(0, limit);
};

export const formatWeatherLocalTime = (localtime) => {
  if (!localtime) return "";

  // Convert "YYYY-MM-DD HH:mm" → ISO
  const isoString = localtime.replace(" ", "T");
  const date = new Date(isoString);

  return new Intl.DateTimeFormat("en-US", {
    month: "short", // Jan
    day: "2-digit", // 23
    hour: "numeric", // 12
    minute: "2-digit",
    hour12: true, // am / pm
  })
    .format(date)
    .replace(" AM", "am")
    .replace(" PM", "pm");
};

// utils/getNextHoursForecastOpenWeather.js
export const getNextHoursForecastOpenWeather = (forecast, limit = 5) => {
  if (!forecast?.list) return [];

  const now = Date.now();

  return forecast.list
    .filter((item) => item.dt * 1000 > now)
    .slice(0, limit)
    .map((item) => ({
      time: new Date(item.dt * 1000).toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      temp: Math.round(item.main.temp),
      icon: item.weather[0].icon,
    }));
};
