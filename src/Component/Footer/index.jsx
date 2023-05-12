import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        height: { xs: "200px", md: "500px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "10px", md: "20px" },
            color: "white",
            marginBottom: "30px",
            fontWeight: "600",
          }}
        >
          {" "}
          Coppy Right By Achmad Gilang Erlangga Dzakiy
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
