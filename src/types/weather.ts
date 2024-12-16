export type WeatherDataProps = {
    main?: {
      temp: number;
      temp_max: number;
      temp_min: number;
      feels_like: number;
      humidity: number;
      pressure: number;
      sea_level?: number;
    };
    sys?: {
      sunrise: number;
      sunset: number;
    };
    weather?: { main: string; description: string; icon: string }[];
    wind?: { speed: number };
    name?: string;
  };