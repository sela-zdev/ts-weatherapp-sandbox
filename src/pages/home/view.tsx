import React from "react";
import Stack from "@mui/material/Stack";
import WeatherSummary from "../../components/home/WeatherSummary";
import WeatherDetail from "../../components/home/WeatherDetail";
import { City, Coord, WeatherDataProps } from "../../types";
import HeroSection from "../../components/home/HeroSection";
import LocationChoice from "../../components/home/LocationChoice";

type HomeLayoutProps = {
  data: WeatherDataProps;
  city: City[];
  onCitySelect: (coord: Coord) => void;
};

function HomeLayout({ data, city, onCitySelect }: HomeLayoutProps) {
  return (
    <Stack>
      <HeroSection />
      <LocationChoice data={city} onCitySelect={onCitySelect} />
      <WeatherSummary data={data} />
      <WeatherDetail data={data} />
    </Stack>
  );
}

export default HomeLayout;
