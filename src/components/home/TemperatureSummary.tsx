import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

type TemperatureSummaryProps = {
  data: number | undefined;
  tempMax: number | undefined;
  tempMin: number | undefined;
};

const TemperatureSummary: React.FC<TemperatureSummaryProps> = ({
  data,
  tempMax,
  tempMin,
}) => {
  return (
    <Card variant="outlined" sx={{ textAlign: "center", py: 4 }}>
      <CardContent>
        <Typography variant="h3" color="primary">
          {data}°
        </Typography>
        <Typography>Temperature</Typography>
        <Typography variant="body2" color="text.secondary">
          Max: {tempMax} | Min: {tempMin}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TemperatureSummary;
