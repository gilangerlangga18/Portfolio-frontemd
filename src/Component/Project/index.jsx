import { Box, Typography } from "@mui/material";
import React from "react";
import BoxCarousel from "../Carousel";
import Dummy from "../../DummyData/DataProject.json";

function Project() {
  console.log(Dummy);

  return (
    <Box>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "60px" },
            fontWeight: "800",
            margin: "40px",
            color: "#e2e8f0",
          }}
        >
          Project _
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: { xs: "center", md: "none", lg: "none" },
            flexDirection: "column",
            alignItems: { xs: "center", md: "none", lg: "none" },
            gap: "40px",
          }}
        >
          {Dummy.map((item) => (
            <BoxCarousel item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Project;
