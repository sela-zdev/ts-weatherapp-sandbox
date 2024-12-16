import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";

import { WeatherDataProps } from "../../types";

type WeatherSummaryProps = {
  data: WeatherDataProps;
};

function WeatherSummary(data: WeatherSummaryProps) {
  const { main, weather, name } = data.data;
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {weather && (
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar
                src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
                alt="Weather Icon"
                sx={{ width: 60, height: 60 }}
              />
              <Typography variant="h2" color="primary">
                {Math.round(main?.temp || 0)}°
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Humidity: {main?.humidity}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sea Level: {main?.sea_level}hPa
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pressure: {main?.pressure}hPa
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} textAlign="right">
            <Typography variant="h5" color="primary">
              {name?.toUpperCase()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date().toLocaleString()}
            </Typography>
            <Typography>{`${weather[0]?.main} - ${weather[0]?.description}`}</Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default WeatherSummary;
