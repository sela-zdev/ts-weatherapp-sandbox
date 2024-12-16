import React from "react";
import Stack from "@mui/material/Stack";
import { City, Coord } from "../../types";
import { Button } from "@mui/material";

type LocationChoiceProps = {
  data: City[];
  onCitySelect: (coord: Coord) => void;
};

function LocationChoice({ data, onCitySelect }: LocationChoiceProps) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" p={2} gap={1}>
      {data.map((city) => (
        <Button
          key={city.name} // Assuming 'name' is a unique property of City
          onClick={() => onCitySelect(city.coord)} // Callback when a city is selected
          variant="contained"
        >
          {city.name}
        </Button>
      ))}
    </Stack>
  );
}

export default LocationChoice;
