import {
  TypographyH3,
  TypographyH6,
  TypographyP,
} from "@/components/elements/Typography";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  formatWeatherLocalTime,
  getNextHoursForecast,
} from "@/utils/weather-utils";
import Image from "next/image";
import { TiWeatherWindyCloudy } from "react-icons/ti";

export const WeatherHeader = () => {
  return (
    <CardHeader className="px-6">
      <CardTitle className="flex items-center gap-2 text-sm">
        <TiWeatherWindyCloudy size={18} className="text-sky-500" />
        Weather
      </CardTitle>
    </CardHeader>
  );
};

export const WeatherSkeleton = () => {
  return (
    <div className="-mt-1 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <Skeleton className="h-13 w-full" />
      </div>
      <div className="text-muted-foreground space-y-1 text-xs">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-3 w-full" />
      </div>
    </div>
  );
};

export const WeatherError = () => {
  return (
    <p className="text-muted-foreground mb-2 text-center text-xs">
      Location not found
    </p>
  );
};

export const WeatherNextHour = ({ weather }) => {
  const nextHours = getNextHoursForecast(weather, 5);

  return (
    <div className="flex items-center justify-between gap-2 mt-2">
      {nextHours.map((hour, idx) => (
        <Card
          key={idx}
          className="flex w-full h-full opacity-75 px-2 py-1 gap-0.5 flex-col rounded-lg items-center text-[10px]"
        >
          <span>{hour.time.split(" ")[1]}</span>
          <Image
            src={`https:${hour.condition.icon}`}
            alt="icon"
            width={22}
            height={22}
          />
          <span>{Math.round(hour.temp_c)}°C</span>
        </Card>
      ))}
    </div>
  );
};

export const WeatherDataDesktopV5 = ({ weather, loading }) => {
  if (loading) {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-2">
          <Skeleton className="h-8 w-24" />
          <div className="flex flex-col items-end gap-1">
            <Skeleton className="h-3 w-22" />
            <Skeleton className="h-2 w-18" />
          </div>
        </div>

        <div className="flex justify-between">
          <Skeleton className="h-2 w-24" />
          <Skeleton className="h-2 w-26" />
        </div>
      </div>
    );
  }

  if (
    !weather ||
    !weather.current ||
    !weather.current.condition ||
    !weather.location
  ) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 -mt-3">
      <div className="flex flex-row items-end justify-between">
        {/* <div className='flex items-center gap-1 -mt-0.75'>
          <Image
            src={`https:${weather.current.condition.icon}`}
            alt='icon'
            width={36}
            height={36}
            className='aspect-square -mt-1'
          />
          <TypographyH3 className='text-[26px] font-bold'>
            {Math.round(weather.current.temp_c)}°
          </TypographyH3>
        </div> */}
        <div className="flex items-center -ml-1">
          <Image
            src={`https:${weather.current.condition.icon}`}
            alt="icon"
            width={44}
            height={44}
            className="aspect-square w-10 h-10"
          />
          <TypographyH3 className="font-bold">
            {Math.round(weather.current.temp_c)}°
          </TypographyH3>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <TypographyH6 className="text-bold text-xs">
            {weather.location.name}, ID
          </TypographyH6>
          <TypographyP className="text-muted-foreground text-[10px]">
            {formatWeatherLocalTime(weather.location.localtime)}
          </TypographyP>
        </div>
      </div>

      <div className="flex flex-row items-start justify-between">
        <TypographyP className="text-muted-foreground text-[10px]">
          {weather.current.condition.text}
        </TypographyP>
        <div className="flex gap-1 text-muted-foreground text-[10px]">
          <span>FL: {Math.round(weather.current.feelslike_c)}°</span>
          <span>
            H: {Math.round(weather.forecast.forecastday[0].day.maxtemp_c)}°
          </span>
          <span>
            L: {Math.round(weather.forecast.forecastday[0].day.mintemp_c)}°
          </span>
        </div>
      </div>
      <WeatherNextHour weather={weather} />
    </div>
  );
};

export const WeatherDataMobile = ({ weather }) => {
  const condition = weather.weather[0];

  return (
    <div className="-mt-4 flex flex-col">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground bg-secondary/80 rounded-md px-2 py-1 text-xs">
          {weather.name}, {weather.sys.country}
        </p>
        <Image
          src={`https://openweathermap.org/img/wn/${condition.icon}@2x.png`}
          alt="weather"
          className="size-9"
          width={36}
          height={36}
        />
      </div>
      <div className="flex items-end justify-between">
        <h1 className="flex items-start text-4xl font-semibold">
          {Math.round(weather.main.temp)}°C
        </h1>
        <div className="text-muted-foreground space-y-1 text-end text-xs">
          <p className="capitalize">{condition.description}</p>
          <span>T: {Math.round(weather.main.temp_max)}°</span>
          &nbsp;
          <span>R: {Math.round(weather.main.temp_min)}°</span>
          &nbsp;
          <span>FL: {Math.round(weather.main.feels_like)}°</span>
          &nbsp;
          <span>H: {weather.main.humidity}%</span>
        </div>
      </div>
      <WeatherNextHour weather={weather} />
    </div>
  );
};
