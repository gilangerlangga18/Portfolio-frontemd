import { Box, Button, Typography } from "@mui/material";
import React from "react";

// import { useNavigate } from "react-router-dom";

function Navbar() {
  // const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: { xs: "40px", md: "90px" },
        // backgroundColor: "#4982B9 ",

        display: "flex",
        position: { xs: "fixed", md: "unset" },
        justifyContent: "center",
        color: "#e2e8f0",
        right: { xs: "0", md: "none" },
        bottom: { xs: "0", md: "none" },
        zIndex: { xs: "10", md: "none" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: { xs: "180px", md: "90%" },
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#FFC93C",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
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
        <Box
          sx={{
            // backgroundColor: "red",
            width: "100%",
            display: "flex",
            justifyContent: { xs: "center", md: "end" },
            alignItems: { xs: "center", md: "center" },
          }}
        >
          {" "}
          <Button
            LinkComponent="a"
            href="/cv-Front-End-achmad-gilang-erlangga.pdf"
            dowload="cv-Front-End-achmad-gilang-erlangga.pdf"
            sx={{
              fontWeight: { xs: "600", md: "800" },
              fontSize: { xs: "12px", md: "22px" },
              color: "white",
              marginRight: { xs: "0", md: "30px" },
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
