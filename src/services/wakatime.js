import axios from "axios";

const API_KEY = process.env.WAKATIME_API_KEY;
const BASE_URL = "https://wakatime.com/api/v1/users/current";

const getHeaders = () => ({
  headers: { Authorization: `Basic ${API_KEY}` },
});

const handleResponse = (response) => {
  if (response.status >= 400) {
    return { status: response.status, data: {} };
  }
  return { status: response.status, data: response.data?.data || {} };
};

export const getReadStats = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/stats/last_7_days`,
      getHeaders(),
    );
    const {
      start,
      end,
      modified_at,
      categories,
      best_day,
      human_readable_daily_average_including_other_language: daily_average,
      human_readable_total_including_other_language: total,
      languages,
      editors,
    } = response.data?.data || {};

    return {
      status: response.status,
      data: {
        last_update: modified_at,
        start_date: start,
        end_date: end,
        categories,
        best_day: {
          date: best_day?.date,
          text: best_day?.text,
        },
        human_readable_daily_average: daily_average,
        human_readable_total: total,
        languages: languages?.slice(0, 3),
        editors,
      },
    };
  } catch (error) {
    console.error("Error fetching WakaTime read stats:", error);
    return { status: 500, data: {} };
  }
};

export const getALLTimeSinceToday = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/all_time_since_today`,
      getHeaders(),
    );
    return handleResponse(response);
  } catch (error) {
    console.error("Error fetching all time since today:", error);
    return { status: 500, data: {} };
  }
};
