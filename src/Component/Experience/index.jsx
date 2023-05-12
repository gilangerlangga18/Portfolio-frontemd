import { Box, Typography } from "@mui/material";
import React from "react";

function Experience() {
  return (
    <Box id="experiences">
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "60px" },
          fontWeight: "900",
          marginLeft: "35px",
          color: "#e2e8f0",
          marginTop: "50px",
        }}
      >
        My Experience __
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            width: "80%",
            // height: "400px",
            border: "1px #e2e8f0 solid",
            // backgroundColor: "white",
            borderRadius: "30px",
            display: "flex",
            // alignItems: "center",
            justifyContent: "start",
            color: "#e2e8f0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              margin: "30px",
              flexDirection: "column",
              justifyContent: "space-around",
              gap: { xs: "10px", md: "30px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "40px" },
                fontWeight: "800",
              }}
            >
              Frontend Developer
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "20px" },
                  fontWeight: "800",
                }}
              >
                EXP Tech
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "20px" },
                  fontWeight: "500",
                }}
              >
                | Januari 2023 - Maret
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "20px" },
                  fontWeight: "800",
                }}
              >
                Technology Used
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "20px" },
                  fontWeight: "500",
                }}
              >
                {" "}
                Next Js, React Js, Material UI, FireBase, Firestore, Cloud
                Storage
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "20px" },
                  fontWeight: "800",
                }}
              >
                Project
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "20px" },
                  fontWeight: "500",
                }}
              >
                Built and maintained web application
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
