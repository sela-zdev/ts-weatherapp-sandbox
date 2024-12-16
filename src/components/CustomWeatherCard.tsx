import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type WeatherCardProps = {
  data: string | number | undefined;
  label: string;
  unit?: string;
};

const CustomWeatherCard: React.FC<WeatherCardProps> = ({
  data,
  label,
  unit,
}) => {
  return (
    <Grid item xs={12} sm={6}>
      <Card variant="outlined" sx={{ textAlign: "center", py: 3 }}>
        <CardContent>
          <Typography variant="h5" color="primary">
            {data}
            {unit && <Typography component="span"> {unit}</Typography>}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CustomWeatherCard;
