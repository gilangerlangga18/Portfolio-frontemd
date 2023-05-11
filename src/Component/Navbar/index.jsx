import { Box, Button, Typography } from "@mui/material";
import React from "react";

// import { useNavigate } from "react-router-dom";

function Navbar() {
  // const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "90px",
        // backgroundColor: "#4982B9 ",

        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        color: "#e2e8f0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#FFC93C",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
            color: "white",
          }}
        >
          {" "}
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: "22px",
              cursor: "pointer",
            }}
          >
            {" "}
            Home
          </Typography>
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: "22px",
              cursor: "pointer",
            }}
            // onClick={() => navigate("/")}
          >
            {" "}
            My Project
          </Typography>
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: "22px",
              cursor: "pointer",
            }}
            // onClick={() => navigate("/project")}
          >
            Experience
          </Typography>
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: "22px",
              cursor: "pointer",
            }}
            // onClick={() => navigate("/experience")}
          >
            My Stuck
          </Typography>
        </Box>
        <Box>
          <Button
            LinkComponent="a"
            href="/cv-Front-End-achmad-gilang-erlangga.pdf"
            dowload="cv-Front-End-achmad-gilang-erlangga.pdf"
            sx={{
              fontWeight: "800",
              fontSize: "22px",
              color: "white",
              marginRight: "30px",
              cursor: "pointer",
            }}
            // onClick={() => navigate("/stack")}
          >
            Download My CV
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
