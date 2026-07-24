import weatherService from "../services/weatherService";
import { useEffect, useState } from "react";

function CapitalWeather({ country }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const [lat, long] = country.capitalInfo.latlng;

    weatherService.getWeatherData(lat, long).then((data) => {
      setWeather(data);
    });
  }, [country]);

  if (!weather) {
    return <div>Loading weather for {country.capital}...</div>;
  }

  return (
    <div>
      <h2>Weather in {country.capital}</h2>
      <div>
        Weather: {weather.weather[0].main} ({weather.weather[0].description})
      </div>
      <div>
        <img
          src={weatherService.getWeatherIconUrl(weather.weather[0].icon)}
          alt="Weather icon"
          width={150}
        />
      </div>
      <div>
        Temperature: {weather.main.temp} °C (feels like{" "}
        {weather.main.feels_like} °C)
      </div>
      <div>Pressure: {weather.main.pressure}hPa</div>
      <div>Humidity: {weather.main.humidity}%</div>
      <div>Wind Speed: {weather.wind.speed} m/s</div>
      <div>Clouds: {weather.clouds.all}%</div>
    </div>
  );
}

export default CapitalWeather;
