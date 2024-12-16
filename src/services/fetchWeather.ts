import { Coord, WeatherDataProps } from "../types";

const APIKEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (coord: Coord) => {
    try {
        const response = await fetch(
            `${BASE_URL}/weather?lat=${coord.latitude}&lon=${coord.longitude}&appid=${APIKEY}&units=metric`
        );
        const result: WeatherDataProps = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};