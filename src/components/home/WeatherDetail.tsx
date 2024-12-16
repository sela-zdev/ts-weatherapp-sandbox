import React from "react";

import CustomWeatherCard from "../CustomWeatherCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TemperatureSummary from "./TemperatureSummary";

import { WeatherDataProps } from "../../types";

type WeatherDetailProps = {
  data: WeatherDataProps;
};

function WeatherDetail(data: WeatherDetailProps) {
  const { main, sys, wind } = data.data;
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <TemperatureSummary
            data={main?.temp}
            // icon={WeatherAbstract}
            tempMax={main?.temp_max}
            tempMin={main?.temp_min}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <CustomWeatherCard
              data={`${main?.feels_like}°`}
              label="Temperature Feel Like"
              // icon={Temperature}
            />
            <CustomWeatherCard
              data={main?.humidity}
              label="Humidity"
              // icon={Humidity}
              unit="%"
            />
            <CustomWeatherCard
              data={wind?.speed}
              label="Wind Speed"
              // icon={WindSpeed}
              unit="m/s"
            />
            <CustomWeatherCard
              data={`${sys?.sunrise || 0} - ${sys?.sunset || 0}`}
              label="Sunrise & Sunset"
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WeatherDetail;
