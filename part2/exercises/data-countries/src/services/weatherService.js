import axios from "axios";

const api_key = import.meta.env.VITE_WEATHER_API_KEY;

function getUrl(lat, long) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`;
}

function getWeatherData(lat, long) {
  return axios.get(getUrl(lat, long)).then((response) => {
    return response.data;
  });
}

function getWeatherIconUrl(code) {
  return `https://openweathermap.org/payload/api/media/file/${code}.png`;
}

export default { getWeatherData, getWeatherIconUrl };
