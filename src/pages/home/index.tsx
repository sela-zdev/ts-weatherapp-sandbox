import React, { useEffect, useState } from "react";
import HomeLayout from "./view";
import { City, Coord, WeatherDataProps } from "../../types";
import { fetchWeather } from "../../services/fetchWeather";

const cambodianCities: City[] = [
  {
    name: "Phnom Penh",
    coord: {
      latitude: 11.5564,
      longitude: 104.9282,
    },
  },
  {
    name: "Siem Reap",
    coord: {
      latitude: 13.3633,
      longitude: 103.8564,
    },
  },
  {
    name: "Battambang",
    coord: {
      latitude: 13.0957,
      longitude: 103.2022,
    },
  },
  {
    name: "Sihanoukville",
    coord: {
      latitude: 10.6252,
      longitude: 103.5234,
    },
  },
  {
    name: "Kampot",
    coord: {
      latitude: 10.6102,
      longitude: 104.1818,
    },
  },
];

function Home() {
  const [data, setData] = useState<WeatherDataProps>({});
  const [coord, setCoord] = useState<Coord>({
    latitude: 13.3633,
    longitude: 103.8564,
  });

  useEffect(() => {
    handleWeatherRequest();
  }, []);

  async function handleWeatherRequest() {
    const weatherData = await fetchWeather(coord);
    if (weatherData) {
      setData(weatherData);
    }
  }

  function onCitySelect(newCoord: Coord) {
    setCoord(newCoord);
    handleWeatherRequest();
  }

  return (
    <HomeLayout
      data={data}
      city={cambodianCities}
      onCitySelect={onCitySelect}
    />
  );
}

export default Home;
