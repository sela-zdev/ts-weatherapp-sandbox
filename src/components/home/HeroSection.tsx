import React from "react";
import Avatar from "@mui/material/Avatar";

function HeroSection() {
  return (
    <Avatar
      variant="square"
      src="https://t3.ftcdn.net/jpg/06/91/70/18/360_F_691701852_e8RZNagbqGakJccEu9iFtHRlh9c8sVis.jpg"
      alt="Background Image"
      sx={{ width: "100%", height: 200, objectFit: "cover" }}
    />
  );
}

export default HeroSection;
