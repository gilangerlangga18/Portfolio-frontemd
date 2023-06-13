import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Navbar() {
  const page = [
    {
      linl: "#home",
      title: "Home",
    },
    {
      linl: "#project",
      title: "My Project",
    },
    {
      linl: "#experiences",
      title: "Experience",
    },
    {
      linl: "#stack",
      title: "My Stack",
    },
  ];

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
          backgroundColor: "#E2B091",
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
          {page.map((item) => (
            <Typography
              component="a"
              href={item.linl}
              sx={{
                fontWeight: "800",
                fontSize: "22px",
                cursor: "pointer",
                color: "unset",
                textDecoration: "unset",
                "&:hover": {
                  color: "#874e4c",
                  transition: "all 0.5s",
                },
              }}
            >
              {" "}
              {item.title}
            </Typography>
          ))}{" "}
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
              "&:hover": {
                color: "#874e4c",
                transition: "all 0.5s",
              },
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
